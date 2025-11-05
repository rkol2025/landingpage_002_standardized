'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  revenue: z.enum(['2-10M', '10-20M', '20-50M', '50M+'], {
    errorMap: () => ({ message: 'Please select your annual revenue range' }),
  }),
  message: z.string().min(20, 'Please provide more details (minimum 20 characters)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      // TODO: Send to your backend or email service
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
                Let's Talk About Your AI Journey
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Ready to transform your business? Fill out the form and our AI experts will contact you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Email Us</h3>
                  <a
                    href="mailto:hello@apexa.ai"
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    hello@apexa.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Call Us</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-600 hover:text-primary-600 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Visit Us</h3>
                  <p className="text-neutral-600">
                    123 AI Innovation Drive<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-4">
                <strong className="text-neutral-900">Response Time:</strong> We typically respond within 4 business hours
              </p>
              <p className="text-sm text-neutral-600">
                <strong className="text-neutral-900">Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border border-neutral-200 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <Input
                    placeholder="John Smith"
                    {...register('name')}
                    className={errors.name ? 'border-error' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-error">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">
                    Email <span className="text-error">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    {...register('email')}
                    className={errors.email ? 'border-error' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">
                    Company <span className="text-error">*</span>
                  </label>
                  <Input
                    placeholder="Company Name"
                    {...register('company')}
                    className={errors.company ? 'border-error' : ''}
                  />
                  {errors.company && (
                    <p className="text-sm text-error">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-900">
                    Phone (Optional)
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-900">
                  Annual Revenue <span className="text-error">*</span>
                </label>
                <select
                  {...register('revenue')}
                  className={`flex h-10 w-full rounded-md border ${
                    errors.revenue ? 'border-error' : 'border-neutral-300'
                  } bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
                >
                  <option value="">Select revenue range</option>
                  <option value="2-10M">$2M - $10M</option>
                  <option value="10-20M">$10M - $20M</option>
                  <option value="20-50M">$20M - $50M</option>
                  <option value="50M+">$50M+</option>
                </select>
                {errors.revenue && (
                  <p className="text-sm text-error">{errors.revenue.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-900">
                  Tell us about your AI needs <span className="text-error">*</span>
                </label>
                <textarea
                  className={`w-full px-3 py-2 border ${
                    errors.message ? 'border-error' : 'border-neutral-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-32`}
                  placeholder="What challenges are you facing? What are your AI goals?"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-sm text-error">{errors.message.message}</p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-success/10 border border-success rounded-lg text-success flex items-center gap-2">
                  <span className="text-lg">✓</span>
                  <span>Thank you! We'll be in touch within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-error/10 border border-error rounded-lg text-error">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                className="w-full group"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

