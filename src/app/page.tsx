import { Suspense } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  HeroSection,
  ClientLogosSection,
  ProblemSection,
  SolutionSection,
  ServicesSection,
  CaseStudiesSection,
  ProcessSection,
  TrustSignalsSection,
  FAQSection,
  FinalCTASection,
} from '@/components/landing';
import { BookingSection } from '@/components/landing/forms/booking-section';
import { ContactForm } from '@/components/landing/forms/contact-form';
import { ROICalculator } from '@/components/landing/interactive/roi-calculator';
import { ChatWidget } from '@/components/widgets/chat-widget';
import { ExitIntentPopup } from '@/components/widgets/exit-intent-popup';

// Loading component for suspense boundaries
function SectionLoader() {
  return (
    <div className="py-24 px-4 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section - Load immediately */}
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>

        {/* Client Logos */}
        <Suspense fallback={null}>
          <ClientLogosSection />
        </Suspense>

        {/* Problem Section */}
        <Suspense fallback={null}>
          <ProblemSection />
        </Suspense>

        {/* Solution Section */}
        <Suspense fallback={null}>
          <SolutionSection />
        </Suspense>

        {/* Services/Pricing Section */}
        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>

        {/* Case Studies */}
        <Suspense fallback={null}>
          <CaseStudiesSection />
        </Suspense>

        {/* ROI Calculator */}
        <Suspense fallback={null}>
          <ROICalculator />
        </Suspense>

        {/* Process Section */}
        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>

        {/* Trust Signals */}
        <Suspense fallback={null}>
          <TrustSignalsSection />
        </Suspense>

        {/* Booking Section */}
        <Suspense fallback={null}>
          <BookingSection />
        </Suspense>

        {/* FAQ Section */}
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>

        {/* Contact Form */}
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        {/* Final CTA */}
        <Suspense fallback={null}>
          <FinalCTASection />
        </Suspense>
      </main>

      <Footer />

      {/* Interactive Widgets */}
      <ChatWidget />
      <ExitIntentPopup />
    </>
  );
}

