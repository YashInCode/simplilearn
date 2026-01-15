import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import "./hero.css" 


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
          <div className="mb-25">
            <Image
            src="/images/hero/simplilearn.png"
            alt="simlilearn"
            height={305}
            width={305}
            />
          </div>

          <div className="inline-block">
            <span className="text-outline bg-cyan-400 py-5 px-7 rounded font-bold text-xl tracking-wider">
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

          <div className="flex flex-col  gap-6 pt-12 text-white">
            <div className="flex items-center gap-3">
               <Calendar/>
              <span className="text-xl font-semibold">February 20, 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin/>
              <span className="text-xl font-semibold">Chamberlain's Steak &amp; Fish House, Dallas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
