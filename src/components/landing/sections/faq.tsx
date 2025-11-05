'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'How long does it take to implement an AI solution?',
      answer:
        'Most AI implementations take 8-12 weeks from initial assessment to production deployment. Quick-win projects can be delivered even faster. We provide detailed timelines during the discovery phase and stick to our commitments with regular milestone updates.',
    },
    {
      question: 'What if I don\'t see ROI within 90 days?',
      answer:
        'We stand behind our work with a unique ROI guarantee. If you don\'t see measurable positive ROI within 90 days of launch, we continue working for free until you do. This includes optimization, additional features, and ongoing support at no extra cost.',
    },
    {
      question: 'Do you work with custom AI models or just off-the-shelf solutions?',
      answer:
        'We work with both. For most SME businesses, we leverage proven AI services like OpenAI GPT-4, Claude, and other enterprise APIs for faster deployment. For specialized needs, we can fine-tune models or develop custom AI solutions tailored to your specific industry and use case.',
    },
    {
      question: 'What about ongoing maintenance and updates?',
      answer:
        'All packages include 30 days of post-launch optimization. After that, we offer flexible maintenance plans starting at $2,500/month. This includes monitoring, updates, performance optimization, and priority support. You can also choose to manage the system in-house—we provide full documentation and training.',
    },
    {
      question: 'Will I own the code and intellectual property?',
      answer:
        'Yes, absolutely. You own 100% of the code, infrastructure, and intellectual property. There are no vendor lock-ins. You can modify, deploy, or sell the solution however you want. We can also provide white-label options if you want to rebrand it as your own product.',
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer:
        'We implement enterprise-grade security including encryption at rest and in transit, SOC 2 Type II compliance, GDPR compliance, and row-level security policies. All infrastructure follows best practices for your industry, and we can help you achieve any specific compliance requirements (HIPAA, PCI-DSS, etc.).',
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer:
        'Yes. We have extensive experience integrating with ERPs (SAP, Oracle), CRMs (Salesforce, HubSpot), databases (PostgreSQL, MySQL, MongoDB), and custom APIs. During the discovery phase, we audit your current tech stack and design seamless integrations.',
    },
    {
      question: 'What kind of training do you provide?',
      answer:
        'We provide comprehensive training at multiple levels: executive overviews, user training for day-to-day operations, and technical training for your IT team. Our AI EdTech Academy also offers certification programs for deeper AI literacy across your organization.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We work across multiple industries including manufacturing, retail, professional services, healthcare, logistics, and financial services. Our team has delivered 50+ projects for SME companies with revenues from $2M to $350M annually.',
    },
    {
      question: 'How much does it cost to get started?',
      answer:
        'Our AI Opportunity Assessment starts at $15,000 and provides a comprehensive roadmap with clear ROI projections. Full implementation packages start at $45,000. We offer flexible payment plans and can work within most budgets to deliver measurable value.',
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-neutral-50">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600">
            Everything you need to know about working with APEXA
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white border-2 border-neutral-200 rounded-xl px-6 py-2 hover:border-primary-300 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-neutral-900 hover:text-primary-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-neutral-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center pt-8 space-y-4">
          <p className="text-neutral-600">
            Still have questions?
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Contact Our Team</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';

