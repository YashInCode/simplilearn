import { exploringFeaturesData } from '../data';

export default function ExploringSection() {
  const features = exploringFeaturesData;

  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#F5AB40' }}>
            What We'll Explore
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl ">
            The Critical shifts every enterprise must plan for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon=feature.icon;
           return (
             <div
              key={feature.id}
              className="group p-8 bg-white rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <div className='flex items-center gap-2'>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-blue-700"/>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
                </div>

              <p className="text-lx text-black">
                {feature.description}
              </p>
            </div>
           )
})}
        </div>
      </div>
    </section>
  );
}
