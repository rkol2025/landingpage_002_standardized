'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/hooks/use-scroll';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll();

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-end gap-3">
          <div className="relative h-[48px] w-[52px]">
            <Image
              src="/images/apexa_logo_black.png"
              alt="APEXA logo"
              width={52}
              height={52}
              priority
            />
          </div>
          <span className="text-neutral-700 text-4xl md:text-5xl leading-none">
            APEXA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button asChild>
            <Link href="#booking">Get Your AI Strategy</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-neutral-700" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full" variant="outline" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="#booking">Book Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

