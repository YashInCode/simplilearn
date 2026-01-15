'use client';

import React, { useState, useRef } from 'react';
import { submitToAirtable } from '@/app/actions';
import { Mail } from 'lucide-react';

export default function EmailSection() {
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
    <section id="rsvp" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row gap-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            
          >
          <div className="flex flex-wrap gap-3">
             <div className='flex-1 w-[clamp(550px,70vw,700px)] flex items-center gap-3 border px-6 py-4 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900'>
              <Mail className='text-gray-300'/>
               <input
              type="email"
              name="email"
              required
              className="w-[clamp(550px,70vw,700px)] border-none outline-none placeholder-gray-400 "
              placeholder="Enter your work email to confirm your attendance"
            />
             </div>
            <button
              type="submit"
              disabled={isLoading}
              className="text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#F5AB40E5' }}
            >
              {isLoading ? 'Submitting...' : 'RSVP Now'}
            </button>
          </div>
          </form>
        </div>

        {message && (
          <div
            className={`mb-12 p-4 rounded-lg text-center font-medium ${
              messageType === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message}
          </div>
        )}

        <div className="space-y-8">
          <p className="text-xl text-gray-900 leading-relaxed">
            AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            But even the most advanced enterprises are asking the same question:
          </p>

          <div className="text-center py-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Which capabilities will matter most, and how do we build them at scale?
            </h2>
          </div>

          <p className="text-xl text-gray-900 leading-relaxed">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.
          </p>
        </div>
      </div>
    </section>
  );
}
