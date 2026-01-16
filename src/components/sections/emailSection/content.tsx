'use client';

import { useRsvpForm } from '@/hooks/useRsvpForm';
import RsvpForm from '@/components/reusableComponents/RsvpForm';

export default function EmailSection() {
  const { email, emailStored, isLoading, message, messageType, setEmail, handleRsvpNow, handleSendRsvpEmail, handleCancelRsvp } = useRsvpForm();

  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
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
            buttonColor="#F5AB40E5"
            textColor="dark"
          />
        </div>

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
