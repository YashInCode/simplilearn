import { useState, useEffect } from 'react';
import { submitToAirtable, checkEmailExists } from '@/app/actions';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = 'rsvpEmail';
const RESET_TIMEOUT = 5000;

export function useRsvpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [email, setEmail] = useState('');
  const [emailStored, setEmailStored] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY);
    if (storedEmail) {
      setEmail(storedEmail);
      setEmailStored(true);
    }
  }, []);

  const validateEmail = (emailStr: string): boolean => {
    const trimmed = emailStr.trim();
    return trimmed.length > 0 && EMAIL_REGEX.test(trimmed);
  };

  const handleRsvpNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessageType('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    localStorage.setItem(STORAGE_KEY, email.trim());
    setEmailStored(true);
    setMessage('');
    setMessageType('');
  };

  const handleSendRsvpEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const trimmedEmail = email.trim();
      const emailCheck = await checkEmailExists(trimmedEmail);

      if (emailCheck.exists) {
        setMessageType('success');
        setMessage('You already have completed your RSVP. Thank you!');
        return;
      }

      const result = await submitToAirtable({
        email: trimmedEmail,
        name: trimmedEmail.split('@')[0],
        company: '',
        message: '',
      });

      if (result.success) {
        setMessageType('success');
        setMessage('RSVP confirmed! Your registration has been saved.');

        setTimeout(() => {
          localStorage.removeItem(STORAGE_KEY);
          setEmail('');
          setEmailStored(false);
          setMessage('');
        }, RESET_TIMEOUT);
      } else {
        setMessageType('error');
        setMessage(result.message || 'Failed to complete RSVP.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRsvp = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEmail('');
    setEmailStored(false);
    setMessage('');
    setMessageType('');
  };

  return {
    isLoading,
    message,
    messageType,
    email,
    emailStored,
    setEmail,
    handleRsvpNow,
    handleSendRsvpEmail,
    handleCancelRsvp,
  };
}
