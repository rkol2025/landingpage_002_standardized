'use client';

import { Calendar, Clock, Video } from 'lucide-react';

export function BookingSection() {
  return (
    <section id="booking" className="py-24 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Book Your Free Strategy Call
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call with our AI experts. No sales pitch—just actionable insights for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-xl border border-neutral-200 text-center space-y-3">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mx-auto">
              <Calendar className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="font-bold text-neutral-900">Choose Your Time</h3>
            <p className="text-sm text-neutral-600">
              Pick a slot that works for your schedule
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-neutral-200 text-center space-y-3">
            <div className="w-12 h-12 bg-secondary-50 rounded-lg flex items-center justify-center mx-auto">
              <Video className="w-6 h-6 text-secondary-600" />
            </div>
            <h3 className="font-bold text-neutral-900">30-Minute Video Call</h3>
            <p className="text-sm text-neutral-600">
              Meet with our AI consultant via Zoom
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-neutral-200 text-center space-y-3">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-bold text-neutral-900">Get Actionable Insights</h3>
            <p className="text-sm text-neutral-600">
              Walk away with a customized AI roadmap
            </p>
          </div>
        </div>

        {/* Calendly Embed Placeholder */}
        <div className="bg-white rounded-2xl border-2 border-neutral-200 shadow-xl overflow-hidden">
          <div className="aspect-[16/9] md:aspect-[16/10] bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <Calendar className="w-16 h-16 text-primary-600 mx-auto" />
              <h3 className="text-2xl font-bold text-neutral-900">
                Calendar Integration Coming Soon
              </h3>
              <p className="text-neutral-600 max-w-md">
                Replace this placeholder with your actual Calendly embed code or booking widget.
              </p>
              <div className="pt-4">
                <code className="text-xs bg-neutral-100 px-4 py-2 rounded text-neutral-700">
                  {`<!-- Calendly inline widget begin -->`}
                  <br />
                  {`<div class="calendly-inline-widget" data-url="https://calendly.com/your-link" style="min-width:320px;height:630px;"></div>`}
                  <br />
                  {`<!-- Calendly inline widget end -->`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-neutral-600">
            <strong className="text-neutral-900">What to expect:</strong> We'll discuss your business challenges, explore AI opportunities, and provide you with a preliminary roadmap—all completely free with no obligations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="text-success text-lg">✓</span>
              No sales pressure
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success text-lg">✓</span>
              Expert AI consultant
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success text-lg">✓</span>
              Actionable takeaways
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

