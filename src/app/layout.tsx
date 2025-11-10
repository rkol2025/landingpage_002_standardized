import type { Metadata } from 'next';
import { Inter, Lato, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'APEXA - AI Consulting and Implementation Agency',
  description: 'Transform your business with enterprise-grade AI solutions. We help SMEs automate workflows, reduce costs, and grow faster with guaranteed ROI in 90 days.',
  keywords: 'AI consulting, AI implementation, business automation, machine learning, enterprise AI, SME AI solutions',
  authors: [{ name: 'APEXA' }],
  icons: {
    icon: [
      { url: '/images/apexa_logo_black.png', type: 'image/png' },
    ],
    shortcut: ['/images/apexa_logo_black.png'],
    apple: ['/images/apexa_logo_black.png'],
  },
  openGraph: {
    title: 'APEXA - AI Consulting and Implementation Agency',
    description: 'Transform your business with enterprise-grade AI solutions. Guaranteed ROI in 90 days.',
    type: 'website',
    locale: 'en_US',
    siteName: 'APEXA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEXA - AI Consulting and Implementation Agency',
    description: 'Transform your business with enterprise-grade AI solutions.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${lato.variable} scroll-smooth`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

