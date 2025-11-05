'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

export function ServicesSection() {
  const plans = [
    {
      name: 'AI Opportunity Assessment',
      description: 'Perfect for getting started with AI',
      price: '$15,000',
      duration: 'one-time',
      popular: false,
      features: [
        'Comprehensive AI readiness audit',
        'Identify top 5 quick-win opportunities',
        'Custom AI roadmap for your business',
        'Competitive analysis & benchmarking',
        'ROI projections for each opportunity',
        'Executive presentation & workshop',
        '2-week delivery',
        'Email & phone support',
      ],
      cta: 'Start Assessment',
      highlight: false,
    },
    {
      name: 'Quick-Win Implementation',
      description: 'Most popular for immediate ROI',
      price: '$45,000',
      duration: 'one-time',
      popular: true,
      features: [
        'Everything in Assessment package',
        'Full implementation of top 3 AI solutions',
        'Custom AI agent development',
        'Integration with existing systems',
        'Team training & documentation',
        'Performance monitoring dashboard',
        '8-week delivery',
        'Priority support (24/7)',
        '30-day post-launch optimization',
        'ROI guarantee or money back',
      ],
      cta: 'Get Started',
      highlight: true,
    },
    {
      name: 'Enterprise AI Transformation',
      description: 'For comprehensive AI adoption',
      price: 'Custom',
      duration: 'quote',
      popular: false,
      features: [
        'Everything in Quick-Win package',
        'Custom AI architecture & infrastructure',
        'Unlimited AI features & integrations',
        'White-label options available',
        'Dedicated AI engineering team',
        'Advanced security & compliance',
        'Ongoing maintenance & optimization',
        '24/7 dedicated support',
        'Quarterly strategy reviews',
        'AI EdTech Academy access',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Choose the package that fits your AI transformation journey. Every plan includes guaranteed ROI or your money back.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`relative p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? 'ring-2 ring-primary-600 shadow-xl scale-105 bg-gradient-to-b from-white to-primary-50'
                  : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1">
                  <Star className="w-3 h-3 mr-1 fill-white" />
                  Most Popular
                </Badge>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-900">{plan.name}</h3>
                  <p className="text-sm text-neutral-600">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                    {plan.duration !== 'quote' && (
                      <span className="text-neutral-600">{plan.duration}</span>
                    )}
                  </div>
                  {plan.popular && (
                    <p className="text-sm text-success font-semibold">
                      💰 Average 12x ROI in first year
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700'
                      : ''
                  }`}
                  variant={plan.highlight ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="#booking">{plan.cta}</Link>
                </Button>

                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-sm font-semibold text-neutral-900 mb-4">
                    What's included:
                  </p>
                  <div className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 pt-8">
          <p className="text-neutral-600">
            Not sure which package is right for you?
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="#booking">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

