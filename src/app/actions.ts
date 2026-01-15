'use server';

interface FormData {
  email: string;
  name: string;
  company?: string;
  message?: string;
}

export async function submitToAirtable(formData: FormData) {
  try {
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Submissions';

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      return {
        success: false,
        message: 'Server configuration error. Please contact support.',
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
              Email: formData.email,
              Name: formData.name || formData.email.split('@')[0],
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        success: false,
        message: 'Failed to submit form. Please check your Airtable configuration.',
      };
    }

    const result = await response.json();

    return {
      success: true,
      message: 'Thank you! Your RSVP has been received.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}
