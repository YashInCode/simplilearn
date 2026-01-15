import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/header_background.png"
          alt="Event Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl  px-4 sm:px-6 lg:p-20">
        <div className="space-y-6">
          <div className="mb-8">
            <h3 className="text-white font-light text-lg">
              simpli<span className="font-semibold">learn</span>
            </h3>
          </div>

          <div className="inline-block">
            <span className="bg-cyan-400 text-black py-5 px-7 rounded font-bold text-xl tracking-wider">
              Invite-Only
            </span>
            <span className="text-cyan-300 text-lg font-light pl-5">
            An Executive Roundtable · Lunch
          </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl">
            <span className="text-yellow-600">The Skills That Matter Next:</span>
            <br />
            <span className="text-yellow-600">Preparing Your Workforce</span>
            <br />
            <span className="text-yellow-600">&amp; Leaders for the AI Era</span>
            <br />
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 pt-12 text-white">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xl font-semibold">February 20, 2026</p>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xl font-semibold">Chamberlain's Steak &amp; Fish House, Dallas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
