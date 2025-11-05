import { CheckCircle, Zap, Shield, TrendingUp, Users, Rocket } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: <Zap className="w-6 h-6 text-primary-600" />,
      title: 'Production-ready AI in weeks, not months',
      description: '8-12 week delivery with proven frameworks and accelerators',
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-600" />,
      title: 'Enterprise security standards built-in',
      description: 'SOC 2 compliant, GDPR ready, with row-level security',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: 'Guaranteed ROI in 90 days or we work for free',
      description: 'Measurable business outcomes tied to your KPIs',
    },
    {
      icon: <Rocket className="w-6 h-6 text-primary-600" />,
      title: 'Scalable architecture from day one',
      description: 'Cloud-native design that grows with your business',
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: 'Comprehensive team training included',
      description: 'AI EdTech Academy with certification programs',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      title: 'Full ownership and white-label options',
      description: '100% code ownership with your branding',
    },
  ];

  return (
    <section id="solutions" className="py-24 px-4 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold border border-success/20">
              ✓ Our Solution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            AI Development Done Right
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We've perfected the process of building enterprise-grade AI applications for SME businesses. Here's what makes us different:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                  {solution.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center space-y-6 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to See It in Action?
          </h3>
          <p className="text-lg text-primary-50 max-w-2xl mx-auto">
            Join our free discovery call to see how we can transform your business with AI solutions tailored to your industry and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Free Discovery Call
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border-2 border-white/20"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

