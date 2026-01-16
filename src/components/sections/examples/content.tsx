'use client';

import Image from 'next/image';
import { takeawaysData } from '../data';
import { useRsvpForm } from '@/hooks/useRsvpForm';
import RsvpForm from '@/components/reusableComponents/RsvpForm';
import exampleIcon from '@/assets/images/examples/example-icon.png';

export default function ExamplesSection() {
  const takeaways = takeawaysData;
  const { email, emailStored, isLoading, message, messageType, setEmail, handleRsvpNow, handleSendRsvpEmail, handleCancelRsvp } = useRsvpForm();

  return (
    <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <div className="order-2 lg:order-1">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 leading-tight">
          Go behind the curtain with real examples and high-scale insights
        </h2>

        <div className="ml-10">
          <p className="text-xl font-semibold text-gray-900 mb-6">
            You'll walk away with:
          </p>

          <div className="space-y-6 mb-10">
            {takeaways.map((takeaway, index) => (
              <div key={index} className="flex gap-4 w-170">
                <div className="w-1 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-900 text-lg">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-220 gap-3">
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
              buttonColor="#FBBF24"
              textColor="dark"
            />
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src={exampleIcon}
            alt="3D Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>
  );
}