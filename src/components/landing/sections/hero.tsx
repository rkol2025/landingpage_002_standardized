'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold border border-primary-200">
                  🚀 AI-Powered Business Transformation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Transform Your Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500">
                  with AI That Delivers ROI
                </span>
                <span className="block text-neutral-700 text-4xl md:text-5xl mt-2">
                  in 90 Days
                </span>
              </h1>
              <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
                We help small and medium-sized businesses automate workflows, reduce costs by up to 60%, and grow faster using tailored AI solutions built for scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="#booking">
                  Get Free Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setVideoOpen(true)}
                className="group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>ROI guaranteed in 90 days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <span>24/7 Support included</span>
              </div>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="relative h-96 md:h-full min-h-[500px]">
            <button
              onClick={() => setVideoOpen(true)}
              className="w-full h-full relative group cursor-pointer"
              aria-label="Watch demo video"
            >
              {/* Modern Dashboard Mockup */}
              <div className="w-full h-full bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-2xl border-2 border-primary-200 flex items-center justify-center overflow-hidden shadow-2xl group-hover:shadow-primary-200 group-hover:scale-[1.02] transition-all duration-300">
                <div className="w-full h-full p-8 space-y-6">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gradient-to-r from-primary-400 to-primary-300 rounded w-1/3"></div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-primary-200 rounded-full"></div>
                      <div className="w-8 h-8 bg-secondary-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mock Stat Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Revenue', value: '+340%', color: 'from-green-400 to-green-300' },
                      { label: 'Efficiency', value: '+85%', color: 'from-blue-400 to-blue-300' },
                      { label: 'Cost Savings', value: '-60%', color: 'from-purple-400 to-purple-300' },
                      { label: 'ROI', value: '12x', color: 'from-orange-400 to-orange-300' },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-neutral-100 space-y-2 hover:scale-105 transition-transform"
                      >
                        <div className="text-xs text-neutral-500 font-medium">{stat.label}</div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Chart */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-neutral-100">
                    <div className="h-3 bg-gradient-to-r from-primary-300 to-primary-200 rounded w-1/3 mb-6"></div>
                    <div className="flex items-end justify-between gap-2 h-32">
                      {[45, 60, 55, 75, 70, 85, 90].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/0 via-black/5 to-black/10 group-hover:from-black/10 group-hover:via-black/15 group-hover:to-black/20 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-primary-300 transition-all duration-300 border-4 border-primary-100">
                    <Play className="w-8 h-8 text-primary-600 fill-primary-600 ml-1" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-black rounded-xl overflow-hidden w-full max-w-5xl aspect-video shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="APEXA AI Solutions Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

