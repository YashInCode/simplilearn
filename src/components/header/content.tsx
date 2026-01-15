'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Event Details', href: '#agenda' },
    { label: 'Topics', href: '#speakers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-light text-xl">
              simpli<span className="font-semibold">learn</span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-cyan-400 transition-colors text-sm font-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#rsvp"
              className="bg-cyan-400 text-black px-6 py-2 rounded font-bold hover:bg-cyan-300 transition-colors text-sm"
            >
              RSVP
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 bg-black/95">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-cyan-400 py-2 transition-colors text-sm font-light"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#rsvp"
                className="bg-cyan-400 text-black px-6 py-2 rounded font-bold hover:bg-cyan-300 transition-colors text-sm inline-block mt-2"
                onClick={() => setIsOpen(false)}
              >
                RSVP
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
