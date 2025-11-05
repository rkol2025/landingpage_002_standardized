export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business processes, identify AI opportunities, and create a custom roadmap with clear ROI projections.',
      icon: '🎯',
      deliverables: ['AI readiness audit', 'Opportunity assessment', 'Custom roadmap'],
      duration: '1 week',
    },
    {
      number: '02',
      title: 'Design & Planning',
      description: 'Our team designs the perfect AI architecture, selects the best technologies, and plans implementation milestones.',
      icon: '📐',
      deliverables: ['Technical architecture', 'Implementation plan', 'Timeline & budget'],
      duration: '1-2 weeks',
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'We build your AI solution using cutting-edge technologies, integrate with existing systems, and ensure everything works seamlessly.',
      icon: '⚙️',
      deliverables: ['Production-ready code', 'System integration', 'Testing & QA'],
      duration: '4-8 weeks',
    },
    {
      number: '04',
      title: 'Launch & Optimization',
      description: 'We deploy your solution, train your team, monitor performance, and continuously optimize for maximum ROI.',
      icon: '🚀',
      deliverables: ['Production deployment', 'Team training', '30-day optimization'],
      duration: 'Ongoing',
    },
  ];

  return (
    <section id="process" className="py-24 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Our Proven 4-Phase Process
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            From initial assessment to production deployment, we follow a battle-tested methodology that delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line - only between steps */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] right-[-40%] h-1">
                  <div className="w-full h-full bg-gradient-to-r from-primary-500 via-primary-400 to-transparent"></div>
                </div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 space-y-4 h-full">
                {/* Number Badge */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="text-4xl">{step.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <p className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                    Deliverables:
                  </p>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start gap-2">
                        <span className="text-primary-600 mt-0.5">▸</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Duration */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold">
                    ⏱️ {step.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white text-center space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Transparent Process, Guaranteed Results
          </h3>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Every phase includes regular check-ins, clear milestones, and measurable progress. You're in control every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-400">8-12</div>
              <div className="text-sm text-neutral-400 mt-1">Weeks Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success">100%</div>
              <div className="text-sm text-neutral-400 mt-1">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400">50+</div>
              <div className="text-sm text-neutral-400 mt-1">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

