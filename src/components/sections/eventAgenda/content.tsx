import React from 'react';

export default function EventAgenda() {
  const agendaItems = [
    {
      title: 'Welcome & Opening',
      speaker: 'Sudipto Mitra, CRO Simplilearn',
      description: 'Why capability-building is now a board-level issue and what\'s changing in the workforce landscape.',
    },
    {
      title: 'Keynote: What Enterprise Leaders Are Seeing on the Ground',
      speaker: 'Rob Lauber, Former CLO McDonald\'s',
      description: 'A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.',
    },
    {
      title: 'Lunch & Executive Conversation',
      speaker: 'Industry Experts Invited',
      description: 'What large enterprise talent ecosystems are learning about capability-building at scale.',
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-cyan-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
            Event Agenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-900 font-semibold mb-4">
                {item.speaker}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
