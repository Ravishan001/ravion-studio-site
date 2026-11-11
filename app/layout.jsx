import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ravionstudio.com'),
  title: 'Ravion Studio | Software, Apps, Websites & AI Agents',
  description:
    'Ravion Studio is a software company in Sri Lanka building management systems, POS, mobile apps, websites, online stores and AI agents for businesses here and abroad.',
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
      </head>
      <body>{children}</body>
    </html>
  );
}
