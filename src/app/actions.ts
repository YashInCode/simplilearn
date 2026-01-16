'use server';

interface FormData {
  email: string;
  name: string;
  company?: string;
  message?: string;
}

const AIRTABLE_CONFIG = {
  getApiKey: () => process.env.AIRTABLE_API_KEY,
  getBaseId: () => process.env.AIRTABLE_BASE_ID,
  getTableName: () => process.env.AIRTABLE_TABLE_NAME || 'Submissions',
};

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function escapeFilterFormula(str: string): string {
  return str.replace(/[\\]/g, '\\\\').replace(/"/g, '\\"');
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function checkEmailExists(email: string) {
  try {
    const AIRTABLE_API_KEY = AIRTABLE_CONFIG.getApiKey();
    const AIRTABLE_BASE_ID = AIRTABLE_CONFIG.getBaseId();
    const AIRTABLE_TABLE_NAME = AIRTABLE_CONFIG.getTableName();

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return {
        exists: false,
        error: 'Server configuration error',
      };
    }

    const sanitizedEmail = sanitizeEmail(email);

    if (!isValidEmail(sanitizedEmail)) {
      return {
        exists: false,
        error: 'Invalid email format',
      };
    }

    const escapedEmail = escapeFilterFormula(sanitizedEmail);
    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?filterByFormula=%7BEmail%7D%3D%22${encodeURIComponent(escapedEmail)}%22`;

    const response = await fetch(airtableUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return {
        exists: false,
        error: 'Failed to check email',
      };
    }

    const result = await response.json();

    return {
      exists: result.records && result.records.length > 0,
      error: null,
    };
  } catch (error) {
    return {
      exists: false,
      error: 'An error occurred while checking email',
    };
  }
}

export async function submitToAirtable(formData: FormData) {
  try {
    const AIRTABLE_API_KEY = AIRTABLE_CONFIG.getApiKey();
    const AIRTABLE_BASE_ID = AIRTABLE_CONFIG.getBaseId();
    const AIRTABLE_TABLE_NAME = AIRTABLE_CONFIG.getTableName();

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return {
        success: false,
        message: 'Server configuration error. Please contact support.',
      };
    }

    const sanitizedEmail = sanitizeEmail(formData.email);

    if (!isValidEmail(sanitizedEmail)) {
      return {
        success: false,
        message: 'Invalid email format.',
      };
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Email: sanitizedEmail,
              Name: formData.name?.substring(0, 100) || sanitizedEmail.split('@')[0],
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: `Failed to submit form: ${error.error?.message || 'Unknown error'}`,
      };
    }

    await response.json();

    return {
      success: true,
      message: 'Thank you! Your RSVP has been received.',
    };
  } catch (error) {
    return {
      success: false,
      message: `An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}
