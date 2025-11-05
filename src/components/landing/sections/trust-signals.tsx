import { Award, Shield, Clock, Users, TrendingUp, Zap } from 'lucide-react';

export function TrustSignalsSection() {
  const signals = [
    {
      icon: <Award className="w-8 h-8" />,
      label: 'Industry Recognition',
      value: 'Top 10 AI Agencies 2024',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: 'Client Satisfaction',
      value: '4.9/5 Average Rating',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      label: 'Enterprise Security',
      value: 'SOC 2 Type II Certified',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: 'Uptime Guarantee',
      value: '99.9% SLA',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: 'Average Client ROI',
      value: '12x in First Year',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      label: 'Successful Projects',
      value: '50+ Deployments',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: '🔒' },
    { name: 'ISO 27001', icon: '🛡️' },
    { name: 'GDPR Compliant', icon: '✓' },
    { name: 'AWS Partner', icon: '☁️' },
    { name: 'Microsoft Partner', icon: '⚡' },
    { name: 'Google Cloud', icon: '🌐' },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Why Companies Trust APEXA
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We're committed to excellence, security, and delivering measurable results for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signals.map((signal, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 text-center space-y-4"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${signal.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {signal.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-neutral-900">{signal.value}</h3>
                <p className="text-sm text-neutral-600 font-medium">{signal.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="pt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Certifications & Partnerships
            </h3>
            <p className="text-neutral-600">
              Trusted by leading technology providers and certified for enterprise security
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{cert.icon}</span>
                <span className="text-sm font-semibold text-neutral-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-xl bg-success/5 border border-success/20 text-center space-y-2">
            <div className="text-4xl">💰</div>
            <h4 className="font-bold text-neutral-900">ROI Guarantee</h4>
            <p className="text-sm text-neutral-600">
              If you don't see positive ROI in 90 days, we work for free until you do
            </p>
          </div>
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 text-center space-y-2">
            <div className="text-4xl">🔒</div>
            <h4 className="font-bold text-neutral-900">Data Security</h4>
            <p className="text-sm text-neutral-600">
              Bank-level encryption, SOC 2 compliance, and complete data ownership
            </p>
          </div>
          <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20 text-center space-y-2">
            <div className="text-4xl">⚡</div>
            <h4 className="font-bold text-neutral-900">Fast Delivery</h4>
            <p className="text-sm text-neutral-600">
              Production-ready AI solutions delivered in 8-12 weeks, not months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

