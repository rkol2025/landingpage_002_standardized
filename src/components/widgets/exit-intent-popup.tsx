'use client';

import { useState, useEffect } from 'react';
import { useMouseLeave } from '@/hooks/use-mouse-leave';
import { Button } from '@/components/ui/button';
import { X, Calendar, Gift } from 'lucide-react';

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useMouseLeave(() => {
    if (!hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  });

  useEffect(() => {
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitIntentShown', 'true');
  };

  const handleBooking = () => {
    handleClose();
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 text-white p-8 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-2">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Wait! Before You Go...
            </h2>
            <p className="text-lg text-primary-50">
              Get Your FREE AI Opportunity Assessment
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="text-center space-y-4">
            <p className="text-lg text-neutral-700 leading-relaxed">
              <strong className="text-neutral-900">Limited Time Offer:</strong> Schedule your free 30-minute strategy call and receive a complimentary AI readiness assessment worth $5,000!
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-6">
              <div className="p-4 bg-primary-50 rounded-xl border border-primary-200 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-bold text-sm text-neutral-900 mb-1">
                  Identify Opportunities
                </h3>
                <p className="text-xs text-neutral-600">
                  Top 5 AI quick wins for your business
                </p>
              </div>

              <div className="p-4 bg-secondary-50 rounded-xl border border-secondary-200 text-center">
                <div className="text-3xl mb-2">💰</div>
                <h3 className="font-bold text-sm text-neutral-900 mb-1">
                  ROI Projections
                </h3>
                <p className="text-xs text-neutral-600">
                  See potential savings and returns
                </p>
              </div>

              <div className="p-4 bg-success/10 rounded-xl border border-success/30 text-center">
                <div className="text-3xl mb-2">🗺️</div>
                <h3 className="font-bold text-sm text-neutral-900 mb-1">
                  Custom Roadmap
                </h3>
                <p className="text-xs text-neutral-600">
                  Step-by-step implementation plan
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                ⏰ Limited Availability: Only 5 Spots Left This Week
              </p>
              <p className="text-xs text-neutral-600">
                Our senior AI consultants are booking fast. Reserve your slot before they're gone!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleBooking}
              size="lg"
              className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book My Free Assessment
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
                $5,000 Value
              </span>
            </Button>
            <Button
              onClick={handleClose}
              size="lg"
              variant="ghost"
              className="sm:w-auto"
            >
              No thanks, I'll pass
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-neutral-500 pt-4 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <span className="text-success text-lg">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-1">
              <span className="text-success text-lg">✓</span>
              30-minute call only
            </div>
            <div className="flex items-center gap-1">
              <span className="text-success text-lg">✓</span>
              Zero obligation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

