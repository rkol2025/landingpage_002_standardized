export function ProblemSection() {
  const problems = [
    {
      icon: '⏱️',
      title: 'Slow Development Cycles',
      description: 'Traditional AI development takes 6-12 months. Your competitors are already moving faster.',
      impact: 'Lost market opportunities',
    },
    {
      icon: '💸',
      title: 'Prohibitive Costs',
      description: 'Building AI infrastructure requires $500K+ investment and expensive specialist teams.',
      impact: 'Budget constraints',
    },
    {
      icon: '🔧',
      title: 'Complex Maintenance',
      description: 'Keeping AI systems updated, optimized, and compliant demands constant technical expertise.',
      impact: 'Resource drain',
    },
    {
      icon: '📉',
      title: 'Uncertain ROI',
      description: 'Without clear implementation strategy, AI projects often fail to deliver measurable business value.',
      impact: 'Wasted investments',
    },
  ];

  return (
    <section id="problem" className="py-24 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            The Challenge with AI Adoption Today
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Most SME businesses want to leverage AI but face significant barriers that prevent them from getting started or seeing results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-white border-2 border-red-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="text-5xl group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-900">
                  {problem.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
              <div className="pt-2 border-t border-red-100">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-red-600">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  {problem.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-lg font-semibold text-neutral-700">
            Sound familiar? <span className="text-primary-600">There's a better way.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

