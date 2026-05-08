'use client';
import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import ServiceShowcase from '@/components/ServiceShowcase';

/* ─── Data ─────────────────────────────────────────────────────────── */
const STATS = [
  { value: '30+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3M+', label: 'Sq Ft Managed' },
  { value: '500+', label: 'Projects Completed' },
];

const PRODUCTS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4C14 4 6 8 6 14V20L14 24L22 20V14C22 8 14 4 14 4Z" stroke="#00c8ff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14h8M14 10v8" stroke="#00c8ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'HVAC Control',
    desc: 'Open-standard BACnet controls for easy integration, dependable performance, and future-ready buildings.',
    tag: 'HVAC',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="10" r="5" stroke="#00c8ff" strokeWidth="1.5"/>
        <path d="M14 15v9M10 24h8" stroke="#00c8ff" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 8l-2-2M20 8l2-2M6 12H4M24 12h-2" stroke="#7c3aed" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Lighting Control',
    desc: 'Advanced lighting control products that enhance comfort, productivity, and energy efficiency throughout your facility.',
    tag: 'LIGHTING',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="12" width="18" height="13" rx="2" stroke="#00c8ff" strokeWidth="1.5"/>
        <path d="M9 12V8a5 5 0 0110 0v4" stroke="#00c8ff" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="18" r="2" fill="#7c3aed"/>
      </svg>
    ),
    title: 'Access Control',
    desc: 'Flexible access control solutions that improve security, support safety, and provide convenient building management.',
    tag: 'ACCESS',
  },
];

const PORTFOLIO = [
  { name: 'Emory University Hospital',   loc: 'Atlanta, GA',        controllers: '1,294', points: '32,350', type: 'Healthcare'  },
  { name: 'Delta Data Center',           loc: 'Hapeville, GA',      controllers: '325',   points: '4,875',  type: 'Technology'  },
  { name: 'Delta Reservations Center',   loc: 'Hapeville, GA',      controllers: '233',   points: '4,660',  type: 'Corporate'   },
  { name: 'Monroe County School System', loc: 'Monroe County, GA',  controllers: '650',   points: '12,490', type: 'Education'   },
  { name: 'Alcon Headquarters',          loc: 'Duluth, GA',         controllers: '455',   points: '7,180',  type: 'Corporate'   },
  { name: 'Carter Presidential Center',  loc: 'Atlanta, GA',        controllers: '126',   points: '1,890',  type: 'Government'  },
];

const SERVICES = [
  { label: 'DDC System Design',        icon: '⬡' },
  { label: 'BAS Installation',         icon: '⬡' },
  { label: 'Preventive Maintenance',   icon: '⬡' },
  { label: 'Energy Audits',            icon: '⬡' },
  { label: 'System Upgrades',          icon: '⬡' },
  { label: 'Remote Monitoring',        icon: '⬡' },
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function Home() {
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-40px' }
    );

    const observables = document.querySelectorAll('[data-observe]');
    observables.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section id="home" className={styles.hero}>
        {/* Background layers */}
        <div className={styles.heroBg}>
          <img src="/hero-bg.png" alt="" className={styles.heroBgImg} aria-hidden="true" />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />
        </div>

        {/* Glow orbs */}
        <div className={`${styles.orbA} glow-orb`} aria-hidden="true" />
        <div className={`${styles.orbB} glow-orb`} aria-hidden="true" />

        {/* Content */}
        <div className="container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', paddingLeft: '4rem' }}>
          <div className={styles.heroContent}>
            {/* Eyebrow */}
            <div className={`eyebrow ${styles.animate1}`}>
              Authorized Reliable Controls Dealer
            </div>

            {/* Title */}
            <h1 className={`${styles.heroTitle} ${styles.animate2}`}>
              Smart Building
              <br />
              <span className={styles.titleAccent}>Automation & Control</span>
            </h1>

            {/* Description */}
            <p className={`${styles.heroDesc} ${styles.animate3}`}>
              Designing and implementing building automation systems (BAS), energy
              management systems, and integrated HVAC controls for commercial
              facilities across the Southeast — for over 30 years.
            </p>

            {/* Actions */}
            <div className={`${styles.heroActions} ${styles.animate4}`}>
              <a href="#about" className="btn-primary" id="hero-cta-primary">
                Discover More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#contact" className="btn-ghost" id="hero-cta-secondary">
                Contact Sales
              </a>
            </div>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollLine} />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────── */}
      <div className={styles.statsBar} data-observe aria-label="Key statistics">
        <div className="container">
          <div className={styles.statsInner}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.statItem}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SHOWCASE ──────────────────────────────────────────── */}
      <section id="services" className={`section ${styles.showcaseSection}`}>
        <div className="container">
          <ServiceShowcase />
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ── ABOUT ─────────────────────────────────────────────────────── */}
      <section id="about" className={`section ${styles.aboutSection}`} data-observe>
        <div className={styles.aboutGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.aboutGrid}>
            {/* Text */}
            <div className={styles.aboutText}>
              <div className="eyebrow">About ISI</div>
              <h2 className="section-title">
                Integrated Building Systems<br />for Every Facility
              </h2>
              <p className={styles.aboutP}>
                Integrated Systems Inc. has been designing and implementing commercial
                building automation systems (BAS) and energy management systems for
                more than 30 years. We install and maintain DDC control systems,
                smart HVAC controls, and facilities management systems across all
                types of commercial environments — offices, schools, hospitals,
                warehouses, and laboratories.
              </p>
              <p className={styles.aboutP}>
                No matter if your facility is two thousand square feet or three million —
                ISI can design and install a custom automated building control system
                that delivers long-term reliability, intelligent building performance,
                and measurable energy savings for years to come.
              </p>

              <div className={styles.serviceList}>
                {SERVICES.map(({ label }) => (
                  <div key={label} className={styles.serviceItem}>
                    <span className={styles.serviceDot} aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Glass panel */}
            <div className={styles.aboutVisual}>
              <div className={styles.visualFrame}>
                <div className={styles.visualGlow} aria-hidden="true" />
                <div className={styles.visualOrb}   aria-hidden="true" />

                {/* Live card */}
                <div className={styles.liveCard}>
                  <div className={styles.liveHeader}>
                    <span className={styles.liveDot} aria-hidden="true" />
                    <span className={styles.liveLabel}>LIVE</span>
                    <span className={styles.liveTitle}>Energy Monitor</span>
                  </div>
                  <div className={styles.liveStats}>
                    <div className={styles.liveStat}>
                      <div className={styles.liveStatValue}>23.4 kWh</div>
                      <div className={styles.liveStatName}>Current Usage</div>
                    </div>
                    <div className={styles.liveStat}>
                      <div className={`${styles.liveStatValue} ${styles.liveStatGreen}`}>-18%</div>
                      <div className={styles.liveStatName}>vs Last Month</div>
                    </div>
                  </div>
                  <div className={styles.liveBar}>
                    <div className={styles.liveBarFill} style={{ width: '62%' }} aria-label="62% efficiency" />
                  </div>
                  <div className={styles.liveBarLabel}>System Efficiency: 62% → Optimizing</div>
                </div>

                {/* System tag */}
                <div className={styles.sysTag}>
                  <span className={styles.sysTagDot} aria-hidden="true" />
                  BACnet/IP Protocol Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ── PRODUCTS ──────────────────────────────────────────────────── */}
      <section id="products" className={`section ${styles.productsSection}`} data-observe>
        <div className={styles.productsGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.productsMeta}>
            <div className="eyebrow">Our Products</div>
            <h2 className="section-title center">Reliable Controls Systems</h2>
            <p className={styles.productsSubtitle}>
              Building automation solutions that monitor, control, and optimize HVAC,
              lighting, and security systems to improve energy efficiency, occupant
              comfort, and environmental sustainability.
            </p>
          </div>

          <div className={styles.productCards}>
            {PRODUCTS.map(({ icon, title, desc, tag }) => (
              <div key={title} className={`glass-card ${styles.productCard}`} id={`product-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className={styles.productTag}>{tag}</div>
                <div className={styles.productIcon} aria-hidden="true">{icon}</div>
                <h3 className={styles.productTitle}>{title}</h3>
                <p className={styles.productDesc}>{desc}</p>
                <a href="#contact" className={styles.productLink}>
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ── PORTFOLIO ─────────────────────────────────────────────────── */}
      <section id="portfolio" className={`section ${styles.portfolioSection}`} data-observe>
        <div className="container">
          <div className={styles.portfolioMeta}>
            <div className="eyebrow">Project Portfolio</div>
            <h2 className="section-title center">Proven Track Record</h2>
            <p className={styles.portfolioSubtitle}>
              Three decades of landmark installations across the Southeast.
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map(({ name, loc, controllers, points, type }) => (
              <div key={name} className={`glass-card ${styles.portfolioItem}`}>
                <div className={styles.portfolioType}>{type}</div>
                <h3 className={styles.portfolioName}>{name}</h3>
                <p className={styles.portfolioLoc}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1C4.79 1 3 2.79 3 5c0 3.31 4 8 4 8s4-4.69 4-8c0-2.21-1.79-4-4-4z" stroke="#00c8ff" strokeWidth="1.2"/>
                    <circle cx="7" cy="5" r="1.5" stroke="#00c8ff" strokeWidth="1.2"/>
                  </svg>
                  {loc}
                </p>
                <div className={styles.portfolioStats}>
                  <div className={styles.portfolioStat}>
                    <div className={styles.portfolioStatValue}>{controllers}</div>
                    <div className={styles.portfolioStatLabel}>Controllers</div>
                  </div>
                  <div className={styles.portfolioStatDivider} aria-hidden="true" />
                  <div className={styles.portfolioStat}>
                    <div className={styles.portfolioStatValue}>{points}</div>
                    <div className={styles.portfolioStatLabel}>Data Points</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ── CONTACT CTA ───────────────────────────────────────────────── */}
      <section id="contact" className={`section ${styles.ctaSection}`} data-observe>
        <div className={styles.ctaGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.ctaInner}>
            <div className="eyebrow">Get In Touch</div>
            <h2 className={`section-title ${styles.ctaTitle}`}>
              Ready to Automate<br />Your Building?
            </h2>
            <p className={styles.ctaDesc}>
              Contact our team today to discuss your commercial HVAC control needs.
              We serve facilities of all sizes across the Southeast.
            </p>

            <div className={styles.ctaActions}>
              <a
                href="mailto:kcarroll@isi-energy.com"
                className="btn-primary"
                id="contact-cta"
              >
                Start the conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
