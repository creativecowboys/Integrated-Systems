'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

/* ─────────────────────────  DATA  ───────────────────────── */

const STATS = [
  { to: 30,  suffix: '+',  label: 'Years in Business' },
  { to: 500, suffix: '+',  label: 'Projects Completed' },
  { to: 3,   suffix: 'M+', label: 'Sq Ft Under Management' },
  { to: 100, suffix: '%',  label: 'Client Satisfaction' },
];

const CAPABILITIES = [
  {
    id: 'ddc',
    title: 'DDC System Design',
    desc: 'Custom direct digital control systems engineered to your exact mechanical layout — from single-zone offices to multi-building campuses.',
    bullets: ['Custom control sequences', 'BACnet & Modbus integration', 'As-built documentation'],
    icon: 'design',
    image: '/services/ddc-design.png',
  },
  {
    id: 'bas',
    title: 'BAS Installation',
    desc: 'Turnkey building automation installs — sensors, controllers, networking, and field wiring — commissioned to integrate cleanly with existing infrastructure.',
    bullets: ['Full system commissioning', 'Minimal-downtime scheduling', 'Certified technicians'],
    icon: 'install',
    image: '/services/bas-installation.png',
  },
  {
    id: 'maintenance',
    title: 'Preventive Maintenance',
    desc: 'Scheduled service programs that keep automation and smart HVAC controls running at peak efficiency year-round.',
    bullets: ['Quarterly & annual plans', 'Sensor calibration & tuning', 'Performance reporting'],
    icon: 'maintain',
    image: '/services/preventive-maintenance.png',
  },
  {
    id: 'energy',
    title: 'Energy Audits',
    desc: 'We analyze consumption patterns to uncover savings through control optimization, scheduling, and right-sizing — with documented ROI.',
    bullets: ['EMS & BAS analysis', 'Control optimization', 'Documented ROI projections'],
    icon: 'energy',
    image: '/services/energy-audits.png',
  },
  {
    id: 'upgrades',
    title: 'System Upgrades',
    desc: 'Replace aging pneumatic controls and obsolete hardware with modern open-protocol technology — without replacing mechanical equipment.',
    bullets: ['Pneumatic-to-DDC migration', 'Open protocol (BACnet)', 'Sequence migration'],
    icon: 'upgrade',
    image: '/services/system-upgrades.png',
  },
  {
    id: 'remote',
    title: 'Remote Monitoring',
    desc: 'Our operations center watches your systems 24/7 — detecting faults and dispatching technicians before occupants ever notice.',
    bullets: ['24/7 fault detection', 'Remote diagnostics', 'Priority dispatch'],
    icon: 'monitor',
    image: '/services/remote-monitoring.png',
  },
];

const INDUSTRIES = [
  { name: 'Healthcare',   note: 'Hospitals & critical-care environments', icon: 'health' },
  { name: 'Education',    note: 'K-12 districts & university campuses',    icon: 'edu' },
  { name: 'Government',   note: 'Civic & institutional facilities',         icon: 'gov' },
  { name: 'Corporate',   note: 'Headquarters & office portfolios',         icon: 'corp' },
  { name: 'Data Centers', note: 'Mission-critical technology spaces',       icon: 'data' },
  { name: 'Industrial',   note: 'Warehouses, labs & manufacturing',         icon: 'industrial' },
];

const PROCESS = [
  { n: '01', title: 'Assess', desc: 'We survey your facility, mechanical systems, and goals to scope the right solution.' },
  { n: '02', title: 'Design', desc: 'Engineers design control sequences and system architecture tailored to your building.' },
  { n: '03', title: 'Install', desc: 'Certified technicians deploy and commission hardware with minimal disruption.' },
  { n: '04', title: 'Maintain', desc: 'Ongoing monitoring, tuning, and support keep performance high for years.' },
];

const PRODUCTS = [
  {
    tag: 'HVAC',
    title: 'HVAC Control',
    desc: 'Open-standard BACnet controls for dependable performance, easy integration, and future-ready buildings.',
    icon: 'hvac',
  },
  {
    tag: 'Lighting',
    title: 'Lighting Control',
    desc: 'Advanced lighting control that enhances comfort, productivity, and energy efficiency across your facility.',
    icon: 'lighting',
  },
  {
    tag: 'Access',
    title: 'Access Control',
    desc: 'Flexible access solutions that improve security, support safety, and simplify building management.',
    icon: 'access',
  },
];

const FEATURED = {
  name: 'Emory University Hospital', loc: 'Atlanta, GA',
  controllers: '1,294', points: '32,350', type: 'Healthcare',
};
const PORTFOLIO = [
  { name: 'Delta Data Center',         loc: 'Hapeville, GA',     controllers: '325', points: '4,875',  type: 'Technology' },
  { name: 'Delta Reservations Center', loc: 'Hapeville, GA',     controllers: '233', points: '4,660',  type: 'Corporate' },
  { name: 'Monroe County Schools',     loc: 'Monroe County, GA', controllers: '650', points: '12,490', type: 'Education' },
  { name: 'Alcon Headquarters',        loc: 'Duluth, GA',        controllers: '455', points: '7,180',  type: 'Corporate' },
  { name: 'Carter Presidential Center',loc: 'Atlanta, GA',       controllers: '126', points: '1,890',  type: 'Government' },
];

const DIFFERENTIATORS = [
  { title: 'Open, vendor-independent', desc: 'We build on open BACnet protocols so you are never locked into a single manufacturer.' },
  { title: '30+ years in the field',   desc: 'Three decades of installations across the Southeast — from 2,000 to 3,000,000 sq ft.' },
  { title: 'In-house engineering',     desc: 'Design, installation, and service handled by our own certified team, not subcontractors.' },
  { title: '24/7 monitoring & support', desc: 'Our operations center resolves issues before they reach your occupants.' },
];

/* ─────────────────────────  ICONS  ───────────────────────── */
const ICON = {
  design: 'M4 7h16M4 12h10M4 17h7M17 14l4 4-4 4',
  install: 'M12 3v6m0 0 3-3m-3 3L9 6M5 13h14l-1 8H6l-1-8Z',
  maintain: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2m9-9h-2M5 12H3m14.5-6.5-1.4 1.4M7.9 16.1l-1.4 1.4m0-11.4 1.4 1.4m8.2 8.2 1.4 1.4',
  energy: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  upgrade: 'M12 20V8m0 0-5 5m5-5 5 5M5 4h14',
  monitor: 'M3 5h18v11H3zM8 21h8m-4-5v5M7 11l2.5-3 2 2.5L14 7l3 4',
  health: 'M12 21s-7-4.5-9.5-9C1 9 2.5 5 6 5c2 0 3 1.2 6 4 3-2.8 4-4 6-4 3.5 0 5 4 3.5 7C19 16.5 12 21 12 21Z',
  edu: 'M3 8l9-4 9 4-9 4-9-4Zm3 2.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5',
  gov: 'M4 9h16M5 9l7-5 7 5M6 9v8m4-8v8m4-8v8m4-8v8M3 21h18',
  corp: 'M3 21V5l8-2v18M11 21V9l8-2v14M3 21h18M6 8h2m-2 4h2m9 0h2m-2 4h2',
  data: 'M4 4h16v5H4zm0 11h16v5H4zM7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6',
  industrial: 'M3 21h18M4 21V10l5 4V10l5 4V8l5 3v10M8 6V3',
  hvac: 'M12 4a8 8 0 0 0-8 8c0 3 8 8 8 8s8-5 8-8a8 8 0 0 0-8-8Zm0 5v6m-3-3h6',
  lighting: 'M9 18h6m-5 3h4M12 2a6 6 0 0 0-4 10.5c.7.7 1 1.4 1 2.5h6c0-1.1.3-1.8 1-2.5A6 6 0 0 0 12 2Z',
  access: 'M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3m-3 3v2',
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON[name]} />
    </svg>
  );
}

/* ─────────────────────────  COUNTER  ───────────────────────── */
function Counter({ to, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return;
      done.current = true;
      const dur = 1400, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────────────────────  PAGE  ───────────────────────── */
export default function Home() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(`Website inquiry — ${f.company.value || f.name.value}`);
    const body = encodeURIComponent(
      `Name: ${f.name.value}\nCompany: ${f.company.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\n\n${f.message.value}`
    );
    window.location.href = `mailto:rcarroll@isi-energy.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* ════════ HERO ════════ */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroBgWrap} aria-hidden="true">
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={`kicker ${styles.heroKicker}`}>Authorized Reliable Controls Dealer</span>
            <h1 className={styles.heroTitle}>
              Smart building automation,<br />
              <span className={styles.heroAccent}>engineered to perform.</span>
            </h1>
            <p className={styles.heroLead}>
              For 30+ years, Integrated Systems has designed, installed, and maintained
              building automation systems, energy management, and integrated HVAC controls
              for commercial facilities across the Southeast.
            </p>
            <div className={styles.heroActions}>
              <a href="#contact" className="btn btn-primary">
                Get a Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#work" className="btn btn-ghost">See our work</a>
            </div>
            <ul className={styles.heroTrust}>
              <li>BACnet open protocol</li>
              <li>Vendor-independent</li>
              <li>24/7 monitoring</li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <Image
                src="/images/hero.png"
                alt="Modern commercial building interior with integrated automation"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 560px"
                className={styles.heroImg}
              />
              <div className={styles.heroImgShade} aria-hidden="true" />

              <div className={styles.liveCard}>
                <div className={styles.liveHead}>
                  <span className={styles.liveDot} aria-hidden="true" />
                  <span className={styles.liveLabel}>LIVE</span>
                  <span className={styles.liveTitle}>Energy Monitor</span>
                </div>
                <div className={styles.liveStats}>
                  <div>
                    <div className={styles.liveVal}>23.4<small>kWh</small></div>
                    <div className={styles.liveName}>Current Usage</div>
                  </div>
                  <div>
                    <div className={`${styles.liveVal} ${styles.liveGreen}`}>−18%</div>
                    <div className={styles.liveName}>vs Last Month</div>
                  </div>
                </div>
                <div className={styles.liveBar}><span style={{ width: '62%' }} /></div>
                <div className={styles.liveFoot}>System efficiency 62% · optimizing</div>
              </div>

              <div className={styles.protoTag}>
                <span aria-hidden="true" />BACnet/IP active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section className={styles.statsWrap} aria-label="Company statistics">
        <div className={`container ${styles.stats}`}>
          {STATS.map(({ to, suffix, label }) => (
            <div key={label} className={`${styles.stat} reveal`}>
              <div className={styles.statValue}><Counter to={to} suffix={suffix} /></div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════ CAPABILITIES ════════ */}
      <section id="capabilities" className="section">
        <div className="container">
          <div className={`${styles.head} reveal`}>
            <span className="kicker">What we do</span>
            <h2 className="h-section">Full-lifecycle building controls</h2>
            <p className="lead">
              From first survey to round-the-clock support, we handle every stage of your
              building automation system in-house.
            </p>
          </div>

          <div className={styles.capGrid}>
            {CAPABILITIES.map((c) => (
              <article key={c.id} className={`card ${styles.cap} reveal`}>
                <div className={styles.capMedia}>
                  <Image
                    src={c.image}
                    alt={`${c.title} — Integrated Systems`}
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 380px"
                    className={styles.capImg}
                  />
                  <span className={styles.capIcon}><Icon name={c.icon} /></span>
                </div>
                <div className={styles.capBody}>
                  <h3 className={styles.capTitle}>{c.title}</h3>
                  <p className={styles.capDesc}>{c.desc}</p>
                  <ul className={styles.capList}>
                    {c.bullets.map((b) => (
                      <li key={b}><span className={styles.tick} aria-hidden="true" />{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ INDUSTRIES ════════ */}
      <section id="industries" className="section section-tint">
        <div className="container">
          <div className={`${styles.head} reveal`}>
            <span className="kicker">Industries we serve</span>
            <h2 className="h-section">Trusted across the built environment</h2>
            <p className="lead">
              No matter the facility — 2,000 square feet or 3 million — we deliver controls
              tuned to how your building actually runs.
            </p>
          </div>

          <div className={styles.indGrid}>
            {INDUSTRIES.map((i) => (
              <div key={i.name} className={`${styles.ind} reveal`}>
                <div className={styles.indIcon}><Icon name={i.icon} /></div>
                <div>
                  <h3 className={styles.indName}>{i.name}</h3>
                  <p className={styles.indNote}>{i.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section id="process" className="section">
        <div className="container">
          <div className={`${styles.head} reveal`}>
            <span className="kicker">How we work</span>
            <h2 className="h-section">A clear path from survey to support</h2>
          </div>

          <ol className={styles.processGrid}>
            {PROCESS.map((p, i) => (
              <li key={p.n} className={`${styles.step} reveal`}>
                <span className={styles.stepNum}>{p.n}</span>
                <h3 className={styles.stepTitle}>{p.title}</h3>
                <p className={styles.stepDesc}>{p.desc}</p>
                {i < PROCESS.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════ COMMAND CENTER BAND ════════ */}
      <section className={styles.band} aria-label="24/7 operations center">
        <Image
          src="/services/remote-monitoring.png"
          alt="Integrated Systems operations center monitoring building automation systems"
          fill
          sizes="100vw"
          className={styles.bandImg}
        />
        <div className={styles.bandShade} aria-hidden="true" />
        <div className={`container ${styles.bandInner}`}>
          <div className={`${styles.bandCopy} reveal`}>
            <span className={`kicker ${styles.kickerLight}`}>Operations center</span>
            <h2 className={styles.bandTitle}>Round-the-clock building intelligence</h2>
            <p className={styles.bandLead}>
              Every system we install can report home. Our team watches performance in real
              time — catching faults, tuning efficiency, and dispatching technicians before
              your occupants ever notice a thing.
            </p>
            <div className={styles.bandStats}>
              <div className={styles.bandStat}>
                <span className={styles.bandStatVal}>24/7</span>
                <span className={styles.bandStatLabel}>Live monitoring</span>
              </div>
              <div className={styles.bandStat}>
                <span className={styles.bandStatVal}>&lt;1 hr</span>
                <span className={styles.bandStatLabel}>Fault response</span>
              </div>
              <div className={styles.bandStat}>
                <span className={styles.bandStatVal}>100%</span>
                <span className={styles.bandStatLabel}>Remote visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PRODUCTS ════════ */}
      <section id="products" className="section section-tint">
        <div className="container">
          <div className={`${styles.head} reveal`}>
            <span className="kicker">Reliable Controls systems</span>
            <h2 className="h-section">One platform, every building system</h2>
            <p className="lead">
              Monitor, control, and optimize HVAC, lighting, and security from a single
              open-protocol platform — improving efficiency, comfort, and sustainability.
            </p>
          </div>

          <div className={styles.prodGrid}>
            {PRODUCTS.map((p) => (
              <article key={p.title} className={`card ${styles.prod} reveal`}>
                <span className={styles.prodTag}>{p.tag}</span>
                <div className={styles.prodIcon}><Icon name={p.icon} /></div>
                <h3 className={styles.prodTitle}>{p.title}</h3>
                <p className={styles.prodDesc}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WORK / PORTFOLIO ════════ */}
      <section id="work" className="section">
        <div className="container">
          <div className={`${styles.head} reveal`}>
            <span className="kicker">Proven track record</span>
            <h2 className="h-section">Landmark installations across the Southeast</h2>
          </div>

          <div className={styles.workLayout}>
            <article className={`${styles.featured} reveal`}>
              <div className={styles.featuredType}>{FEATURED.type}</div>
              <h3 className={styles.featuredName}>{FEATURED.name}</h3>
              <p className={styles.featuredLoc}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1C4.8 1 3 2.8 3 5c0 3.3 4 8 4 8s4-4.7 4-8c0-2.2-1.8-4-4-4Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5" r="1.4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {FEATURED.loc}
              </p>
              <div className={styles.featuredStats}>
                <div>
                  <div className={styles.featuredVal}>{FEATURED.controllers}</div>
                  <div className={styles.featuredLabel}>Controllers</div>
                </div>
                <div className={styles.featuredDivide} aria-hidden="true" />
                <div>
                  <div className={styles.featuredVal}>{FEATURED.points}</div>
                  <div className={styles.featuredLabel}>Data Points</div>
                </div>
              </div>
              <p className={styles.featuredNote}>
                One of the largest building automation deployments in the region — over
                32,000 monitored points across a 24/7 critical-care environment.
              </p>
            </article>

            <div className={styles.workGrid}>
              {PORTFOLIO.map((p) => (
                <article key={p.name} className={`${styles.workItem} reveal`}>
                  <div className={styles.workType}>{p.type}</div>
                  <h3 className={styles.workName}>{p.name}</h3>
                  <p className={styles.workLoc}>{p.loc}</p>
                  <div className={styles.workStats}>
                    <span><strong>{p.controllers}</strong> controllers</span>
                    <span><strong>{p.points}</strong> points</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ABOUT ════════ */}
      <section id="about" className="section section-tint">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={`${styles.aboutCopy} reveal`}>
              <span className="kicker">Why Integrated Systems</span>
              <h2 className="h-section">Three decades of getting buildings right</h2>
              <p className="lead">
                Integrated Systems Inc. has designed and maintained commercial building
                automation and energy management systems for more than 30 years — across
                offices, schools, hospitals, warehouses, and laboratories.
              </p>
              <p className={styles.aboutMission}>
                "To obtain and satisfy a loyal client base through technical expertise and
                dedication to service."
              </p>
            </div>

            <ul className={styles.diffList}>
              {DIFFERENTIATORS.map((d, i) => (
                <li key={d.title} className={`${styles.diff} reveal`}>
                  <span className={styles.diffNum}>0{i + 1}</span>
                  <div>
                    <h3 className={styles.diffTitle}>{d.title}</h3>
                    <p className={styles.diffDesc}>{d.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════ CONTACT ════════ */}
      <section id="contact" className={styles.contact}>
        <div className={`container ${styles.contactInner}`}>
          <div className={`${styles.contactCopy} reveal`}>
            <span className={`kicker ${styles.kickerLight}`}>Get in touch</span>
            <h2 className={styles.contactTitle}>Ready to automate your building?</h2>
            <p className={styles.contactLead}>
              Tell us about your facility and goals. Our team will get back to you to scope
              the right solution — no pressure, no jargon.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Call</span>
                <a href="tel:7705770515" className={styles.infoVal}>(770) 577-0515</a>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Visit</span>
                <span className={styles.infoVal}>8915 Highway 5, Douglasville, GA 30134</span>
              </div>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:rcarroll@isi-energy.com" className={styles.infoVal}>rcarroll@isi-energy.com</a>
              </div>
            </div>
          </div>

          <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <label className={styles.field}>
                <span>Name</span>
                <input name="name" type="text" required placeholder="Jane Smith" />
              </label>
              <label className={styles.field}>
                <span>Company</span>
                <input name="company" type="text" placeholder="Facility / Organization" />
              </label>
            </div>
            <div className={styles.formRow}>
              <label className={styles.field}>
                <span>Email</span>
                <input name="email" type="email" required placeholder="jane@company.com" />
              </label>
              <label className={styles.field}>
                <span>Phone</span>
                <input name="phone" type="tel" placeholder="(770) 555-0123" />
              </label>
            </div>
            <label className={styles.field}>
              <span>How can we help?</span>
              <textarea name="message" rows={4} required placeholder="Tell us about your building and what you're looking to improve…" />
            </label>
            <button type="submit" className="btn btn-accent">
              {sent ? 'Opening your email…' : 'Send inquiry'}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className={styles.formNote}>We typically respond within one business day.</p>
          </form>
        </div>
      </section>
    </>
  );
}
