import { CONTACT } from '../site-config';
import { SERVICES, SITE, sol, rs, waLink } from './data';
import { SvcHeader, SvcFooter, Icon, ICON_FOR } from './chrome';

const TITLE = 'Software Development Services Sri Lanka | Ravion Studio';
const DESC =
  'Ravion Studio builds business management systems, POS systems, mobile apps, websites and AI chatbots for Sri Lankan businesses. See prices and plans for each service.';

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/services' },
  openGraph: { title: TITLE, description: DESC, url: '/services', type: 'website', images: ['/og.png'], siteName: 'Ravion Studio' },
};

export default function Services() {
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: SERVICES.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: sol(s.id).name.en,
        url: `${SITE}/services/${s.slug}`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      ],
    },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SvcHeader />
      <main className="svc">
        <section className="svc-hero svc-hero-sm">
          <div className="wrap">
            <nav className="svc-crumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Services</span>
            </nav>
            <h1>Software, apps, websites and AI for Sri Lankan businesses</h1>
            <p className="svc-intro">
              Pick a service to see what we build, the plans and prices, and answers to common questions. Every price is a starting price; you get the exact
              price after a free call.
            </p>
          </div>
        </section>
        <section className="svc-section">
          <div className="wrap svc-hub">
            {SERVICES.map((svc) => {
              const s = sol(svc.id);
              return (
                <a key={svc.slug} href={`/services/${svc.slug}`} className="svc-hubcard">
                  <span className="svc-hubicon">
                    <Icon name={ICON_FOR[svc.id]} size={22} />
                  </span>
                  <h2>{s.name.en}</h2>
                  <p>{s.pitch.en}</p>
                  <p className="svc-hubprice">
                    from <b>{rs(s.tiers[0].lkr)}</b>
                  </p>
                  <span className="svc-hubmore">
                    Plans & prices <Icon name="arrow" size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>
        <section className="svc-cta">
          <div className="wrap">
            <h2>Not sure what you need?</h2>
            <p>Tell us about your business on WhatsApp and we will suggest the right setup.</p>
            <div className="svc-ctas">
              <a className="btn btn-sun" href={waLink('Hi Ravion Studio, I am not sure what I need.')} target="_blank" rel="noopener">
                <Icon name="wa" size={18} /> WhatsApp {CONTACT.whatsappDisplay}
              </a>
              <a className="btn btn-line-light" href="/#estimate">
                Estimate your price
              </a>
            </div>
          </div>
        </section>
      </main>
      <SvcFooter />
    </>
  );
}
