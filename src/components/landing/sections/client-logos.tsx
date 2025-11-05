'use client';

import { useEffect, useRef } from 'react';

interface ClientLogo {
  name: string;
  abbr: string;
}

const clients: ClientLogo[] = [
  { name: 'Manufacturing Corp', abbr: 'MC' },
  { name: 'Retail Solutions', abbr: 'RS' },
  { name: 'Financial Services', abbr: 'FS' },
  { name: 'Healthcare Plus', abbr: 'HP' },
  { name: 'Tech Innovations', abbr: 'TI' },
  { name: 'Logistics Pro', abbr: 'LP' },
  { name: 'Education First', abbr: 'EF' },
  { name: 'Consulting Group', abbr: 'CG' },
];

export function ClientLogosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollInterval = setInterval(() => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scroll.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scroll.scrollLeft = scrollAmount;
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16 px-4 bg-white border-y border-neutral-200">
      <div className="container mx-auto max-w-7xl space-y-8">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl font-bold text-neutral-800">
            Join 50+ Companies Already Transforming with AI
          </h2>
        </div>

        <div ref={scrollRef} className="overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {/* Original set */}
            {clients.map((client, i) => (
              <div
                key={i}
                className="min-w-max flex items-center justify-center h-20 px-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 hover:from-secondary-500 hover:to-secondary-600 transition-all flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl">
                    {client.abbr}
                  </div>
                  <p className="text-xs text-neutral-600 mt-2 font-medium">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client, i) => (
              <div
                key={`duplicate-${i}`}
                className="min-w-max flex items-center justify-center h-20 px-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 hover:from-secondary-500 hover:to-secondary-600 transition-all flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl">
                    {client.abbr}
                  </div>
                  <p className="text-xs text-neutral-600 mt-2 font-medium">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

