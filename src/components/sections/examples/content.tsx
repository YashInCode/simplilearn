'use client';

import React from 'react';
import Image from 'next/image';

export default function ExamplesSection() {
  const takeaways = [
    'A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.',
    'Insights from high-scale operating environments including the former CLO of McDonald\'s on what truly scales and what breaks under pressure.',
    'Signals for where capability gaps may already be forming in your organization.',
    'Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.',
    'Actionable insights you can take straight into your next exec meeting.',
  ];

  const handleRsvpClick = () => {
    const rsvpSection = document.getElementById('rsvp');
    rsvpSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-8 leading-tight">
              Go behind the curtain with real examples and high-scale insights
            </h2>

            <p className="text-xl font-semibold text-gray-900 mb-6">
              You'll walk away with:
            </p>

            <div className="space-y-6 mb-10">
              {takeaways.map((takeaway, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-yellow-500 rounded-full"></div>
                  <p className="text-gray-900 leading-relaxed text-lg">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900 placeholder-gray-500"
              />
              <button
                onClick={handleRsvpClick}
                className="bg-yellow-400 text-white font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                RSVP Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center h-80">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/examples/example-icon.png"
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
