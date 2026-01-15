import { BarChart3, CircuitBoard, History, Rocket, ShieldCheck, Workflow } from "lucide-react";


export default function ExploringSection() {
  const features = [
    {
      id: 1,
      icon:History,
      title: 'Skill Decay',
      description: 'every 2 -3 years fater for technical skill',
    },
    {
      id: 2,
      icon: Workflow,
      title: 'Manager Role Shift',
      description: 'orchestrating people + AI agents',
    },
    {
      id: 3,
      icon: BarChart3,
      title: 'Leaders + AI CoPilots',
      description: 'requires sensemaking and systerms thinking',
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Frontline Capability',
      description: 'now depends on digital fluency',
    },
    {
      id: 5,
      icon: CircuitBoard,
      title: 'Core Human Capabiliites',
      description: 'analytical reasoning nad scenario planning',
    },
    {
      id: 6,
      icon: Rocket,
      title: 'Winning Organizations',
      description: 'predict skills ahead of demand',
    },
  ];

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
