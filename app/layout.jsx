import './globals.css';
import { CONTACT } from './site-config';

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ravion Studio',
  url: 'https://www.ravionstudio.com',
  logo: 'https://www.ravionstudio.com/favicon.svg',
  image: 'https://www.ravionstudio.com/og.png',
  description:
    'Software company in Sri Lanka building management systems, POS, mobile apps, websites, online stores and AI agents for businesses.',
  telephone: '+' + CONTACT.whatsapp,
  email: CONTACT.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Kuliyapitiya', addressCountry: 'LK' },
  areaServed: ['LK', 'Worldwide'],
  knowsLanguage: ['en', 'si'],
};

export const metadata = {
  metadataBase: new URL('https://ravionstudio.com'),
  title: 'Ravion Studio | Software, Apps, Websites & AI Agents',
  description:
    'Ravion Studio is a software company in Sri Lanka building management systems, POS, mobile apps, websites, online stores and AI agents for businesses here and abroad.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Ravion Studio | Software, Apps, Websites & AI Agents',
    description: 'Management systems, POS, mobile apps, websites and AI agents for businesses.',
    images: ['/og.png'],
    type: 'website',
  },
};

export const viewport = { themeColor: '#0b0f2a', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Geist:wght@400;500;600&family=Noto+Sans+Sinhala:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
