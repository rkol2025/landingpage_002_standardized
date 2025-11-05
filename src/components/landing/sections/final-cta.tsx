import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
              Join 50+ successful companies that have already automated workflows, reduced costs, and accelerated growth with APEXA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 hover:text-primary-700 font-semibold shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-6 group"
              asChild
            >
              <Link href="#booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold text-lg px-8 py-6 group"
              asChild
            >
              <Link href="#contact">
                <MessageSquare className="w-5 h-5 mr-2" />
                Send Us a Message
              </Link>
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold mb-2">90 Days</div>
              <div className="text-sm text-primary-100">
                Guaranteed ROI or We Work Free
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold mb-2">$0</div>
              <div className="text-sm text-primary-100">
                No Cost for Discovery Call
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-primary-100">
                Support Included in All Plans
              </div>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 text-sm text-primary-100">
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✓</span>
              100% satisfaction guaranteed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

