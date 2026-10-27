import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ravionstudio.com'),
  title: 'Ravion Studio | Websites & AI Assistants',
  description:
    'Ravion Studio builds websites, WhatsApp AI assistants, booking systems and automations for small businesses in Sri Lanka and abroad.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Ravion Studio | Websites & AI Assistants',
    description: 'Websites, WhatsApp AI assistants and automations for small businesses.',
    images: ['/og.png'],
    type: 'website',
  },
};

export const viewport = { themeColor: '#101632', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=Noto+Sans+Sinhala:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
