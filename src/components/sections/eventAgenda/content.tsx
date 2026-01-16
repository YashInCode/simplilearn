import { eventAgendaData } from '../data';

export default function EventAgenda() {
  const agendaItems = eventAgendaData;

  return (
    <section id="agenda" className="py-20 " style={{backgroundColor:'#00FFFF'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Event Agenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className='w-70 h-35'>
                
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-8">
                {item.title}
              </h3>
              </div>

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
