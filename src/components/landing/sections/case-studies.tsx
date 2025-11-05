import { ArrowRight, TrendingUp } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'AI-Powered Customer Support',
      company: 'RetailTech Solutions',
      industry: 'E-Commerce',
      revenue: '$12M annually',
      metric: '340% Increase',
      metricLabel: 'in Customer Satisfaction',
      description: 'Automated customer support with intelligent chatbot handling 10,000+ queries/month',
      results: [
        'Customer satisfaction score up from 72% to 95%',
        'Support costs reduced by 60% ($180K/year savings)',
        '24/7 availability with instant responses',
        'Support team refocused on complex issues',
      ],
      bg: 'from-blue-600 to-blue-500',
      timeline: '6 weeks',
      roi: '12x in first year',
    },
    {
      title: 'Automated Content Generation',
      company: 'Creative Marketing Agency',
      industry: 'Marketing & Advertising',
      revenue: '$8M annually',
      metric: '10x Faster',
      metricLabel: 'Content Production',
      description: 'AI-driven content creation system producing high-quality marketing materials at scale',
      results: [
        'Reduced content production time by 90%',
        'Increased output from 50 to 500 pieces/month',
        'Maintained brand consistency across channels',
        'Labor costs down by $250K annually',
      ],
      bg: 'from-purple-600 to-purple-500',
      timeline: '8 weeks',
      roi: '15x in first year',
    },
    {
      title: 'Predictive Analytics Dashboard',
      company: 'Manufacturing Co',
      industry: 'Industrial Manufacturing',
      revenue: '$45M annually',
      metric: '$2.5M Saved',
      metricLabel: 'in Annual Costs',
      description: 'AI-powered business intelligence platform delivering real-time insights and predictions',
      results: [
        'Predictive maintenance reduced downtime 75%',
        'Inventory optimization saved $1.2M/year',
        'Data analysis time reduced from days to seconds',
        'Improved decision-making across all departments',
      ],
      bg: 'from-green-600 to-green-500',
      timeline: '10 weeks',
      roi: '18x in first year',
    },
  ];

  return (
    <section id="case-studies" className="py-24 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            See how we've helped SME companies transform their operations and achieve measurable ROI with AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${study.bg} p-8 text-white space-y-3`}>
                <div className="space-y-1">
                  <p className="text-sm text-white/80 font-medium">{study.industry}</p>
                  <h3 className="text-2xl font-bold leading-tight">{study.title}</h3>
                  <p className="text-white/90 font-semibold">{study.company}</p>
                  <p className="text-sm text-white/70">{study.revenue}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {study.roi} ROI
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-600">
                      {study.metric}
                    </div>
                    <p className="text-sm text-neutral-600 font-medium">{study.metricLabel}</p>
                  </div>
                </div>

                <p className="text-neutral-700 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-neutral-900">Key Results:</p>
                  {study.results.map((result, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="text-success mt-1 flex-shrink-0">✓</span>
                      <span className="text-sm text-neutral-700 leading-relaxed">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">
                      <span className="font-semibold text-neutral-900">Timeline:</span> {study.timeline}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-lg text-neutral-700 mb-6">
            Want similar results for your business?
          </p>
          <Button asChild size="lg" className="group">
            <a href="#booking">
              Schedule Your Free Discovery Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

