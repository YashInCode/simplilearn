'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { submitToAirtable } from '@/app/actions';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessageType('error');
      setMessage('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const result = await submitToAirtable({
        email,
        name: email.split('@')[0],
        company: '',
        message: '',
      });
      
      if (result.success) {
        setMessageType('success');
        setMessage(result.message);
        formRef.current?.reset();
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessageType('error');
        setMessage(result.message);
      }
    } catch (error) {
      setMessageType('error');
      setMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer_background.png"
          alt="Footer Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-blue-900/60 to-black/60"></div>
      </div>

      <div className="relative z-10">
        <div className="w-full py-8" style={{ backgroundColor: '#06B6D4' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Space is limited.
              </h2>

              <div className="flex flex-col gap-2 w-full md:w-auto">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your work email to confirm your attendance"
                    className="flex-1 md:flex-none px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-600 min-w-80"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-yellow-400 text-white font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Submitting...' : 'RSVP Now'}
                  </button>
                </form>
                {message && (
                  <div
                    className={`p-3 rounded-lg text-sm font-medium text-center ${
                      messageType === 'success'
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-shrink-0 h-20 w-40">
                <Image
                  src="/images/hero/simplilearn.png"
                  alt="Simplilearn Logo"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-200 font-light text-base">
                  &copy; {currentYear}-2025 - Simplilearn Solutions. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
