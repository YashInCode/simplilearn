import React from 'react';
import Image from 'next/image';

export default function FeatureSpeakers() {
  const speakers = [
    {
      id: 1,
      name: 'Rob Lauber',
      bio: 'Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald\'s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.',
      image: '/images/speakers/Rob Lauber.png'
    },
    {
      id: 2,
      name: 'Krishna Kumar',
      bio: 'Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn\'t, in building workforce readiness for AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.',
      image: '/images/speakers/Krishna Kumar.png'
    },
    {
      id: 3,
      name: 'Sudipto Mitra',
      bio: 'Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.',
      image: '/images/speakers/Sudipto Mitra.png'
    },
  ];

  return (
    <section id="speakers" className="py-20" style={{ backgroundColor: '#112D8E' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#F5AB40' }}>
            Featured Speakers
          </h2>
        </div>

        <div className="space-y-12">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-full md:w-64">
                <div className="relative h-72 w-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg overflow-hidden shadow-lg">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <svg className="w-32 h-32 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#06B6D4' }}>
                  {speaker.name}
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: '#1D4DF4', border: '2px solid #06B6D4' }}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Additional Expert Perspectives
          </h3>
          <p className="text-white text-lg leading-relaxed">
            Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
