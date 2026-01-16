'use client';

import Image from 'next/image';
import { useRsvpForm } from '@/hooks/useRsvpForm';
import RsvpForm from '@/components/reusableComponents/RsvpForm';
import footerBg from '@/assets/backgrounds/footer_background.png';
import simpliLearnLogo from '@/assets/images/hero/simplilearn.png';

export default function Footer() {
  const { email, emailStored, isLoading, message, messageType, setEmail, handleRsvpNow, handleSendRsvpEmail, handleCancelRsvp } = useRsvpForm();

  return (
    <footer className="relative min-h-[420px] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBg}
          alt="Footer Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Space is limited.
            </h2>

            <RsvpForm
              email={email}
              emailStored={emailStored}
              isLoading={isLoading}
              message={message}
              messageType={messageType}
              onEmailChange={setEmail}
              onRsvpNow={handleRsvpNow}
              onSendRsvp={handleSendRsvpEmail}
              onCancel={handleCancelRsvp}
              buttonColor="#FCD34D"
              textColor="light"
              isFooter={true}
            />
          </div>

          <div className="flex justify-between items-center pt-30 ">
            <div className="relative w-[250px] h-[100px] flex-shrink-0">
              <Image
                src={simpliLearnLogo}
                alt="Simplilearn Logo"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-200 text-lg tracking-wider text-right">
              © 2009–2025 – Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
