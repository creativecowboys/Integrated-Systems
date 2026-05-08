'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ServiceShowcase.module.css';

const SERVICES = [
  {
    id: 'ddc',
    label: 'DDC System Design',
    image: '/services/ddc-design.png',
    headline: 'Direct Digital Control System Design',
    description:
      'We engineer custom DDC building control systems tailored to your facility\'s exact mechanical layout — from single-zone offices to multi-building campuses. Every automated building control design is optimized for energy efficiency, occupant comfort, and long-term system reliability.',
    bullets: ['Custom building control sequences', 'BACnet & Modbus integration', 'As-built documentation'],
  },
  {
    id: 'bas',
    label: 'BAS Installation',
    image: '/services/bas-installation.png',
    headline: 'Building Automation System Installation',
    description:
      'Our certified technicians handle full BAS and building management system installations — sensors, controllers, networking, and field wiring. We deploy intelligent building solutions that integrate seamlessly with your existing mechanical infrastructure.',
    bullets: ['Turnkey BAS installation', 'Minimal downtime scheduling', 'Full system commissioning'],
  },
  {
    id: 'maintenance',
    label: 'Preventive Maintenance',
    image: '/services/preventive-maintenance.png',
    headline: 'Preventive Maintenance Programs',
    description:
      'Proactive maintenance keeps your building automation and smart HVAC control systems running at peak efficiency year-round. Our scheduled PM programs include full inspections, calibration, software updates, and detailed performance reporting.',
    bullets: ['Quarterly & annual service plans', 'Sensor calibration & tuning', 'Performance reports'],
  },
  {
    id: 'energy',
    label: 'Energy Audits',
    image: '/services/energy-audits.png',
    headline: 'Energy Management System Audits',
    description:
      'We analyze your building\'s energy management systems and consumption patterns to identify savings through automated energy solutions — control optimization, scheduling improvements, and equipment right-sizing — with documented ROI projections.',
    bullets: ['EMS & BAS performance analysis', 'Automated energy optimization', 'Documented ROI projections'],
  },
  {
    id: 'upgrades',
    label: 'System Upgrades',
    image: '/services/system-upgrades.png',
    headline: 'Smart Building System Upgrades',
    description:
      'Replace aging pneumatic controls and obsolete building management hardware with modern, open-protocol smart building technology — without replacing your mechanical equipment. We migrate your existing control sequences and add intelligent building capabilities.',
    bullets: ['Pneumatic-to-DDC migration', 'Open protocol (BACnet)', 'Integrated building systems upgrade'],
  },
  {
    id: 'remote',
    label: 'Remote Monitoring',
    image: '/services/remote-monitoring.png',
    headline: 'Remote Building Monitoring & Support',
    description:
      'Our operations center monitors your building automation systems and environmental control systems 24/7 — detecting faults, dispatching technicians, and resolving issues before occupants notice. Real-time intelligent building visibility, anytime.',
    bullets: ['24/7 BAS fault detection', 'Remote diagnostics & control', 'Priority dispatch response'],
  },
];

const TEXT_FADE_MS = 250; // ms for text to fade out before swapping

export default function ServiceShowcase() {
  const [active, setActive]         = useState(0); // controls which image is visible
  const [displayed, setDisplayed]   = useState(0); // controls which text is rendered
  const [textIn, setTextIn]         = useState(true); // true = visible, false = fading out

  const handleTabChange = (i) => {
    if (i === active) return;

    // 1. Fade text out
    setTextIn(false);

    // 2. After text is gone: swap content + crossfade image + fade text back in
    setTimeout(() => {
      setActive(i);
      setDisplayed(i);
      setTextIn(true);
    }, TEXT_FADE_MS);
  };

  const service = SERVICES[displayed];

  return (
    <div className={styles.showcase}>
      {/* Tab Strip */}
      <div className={styles.tabStrip}>
        {SERVICES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
            onClick={() => handleTabChange(i)}
            id={`service-tab-${s.id}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Content Panel — no key prop, stays mounted */}
      <div className={styles.panel}>

        {/* Image side — all images stacked, crossfade via opacity */}
        <div className={styles.imageWrap}>
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.imageLayer} ${i === active ? styles.imageLayerActive : ''}`}
            >
              <Image
                src={s.image}
                alt={s.headline}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority={i === 0}
              />
            </div>
          ))}
          <div className={styles.imageOverlay} />
        </div>

        {/* Text side — fade + slide on swap */}
        <div className={styles.content}>
          <div className={`${styles.contentInner} ${textIn ? styles.textIn : styles.textOut}`}>
            <p className={styles.eyebrow}>Our Services</p>
            <h2 className={styles.headline}>{service.headline}</h2>
            <p className={styles.desc}>{service.description}</p>
            <ul className={styles.bullets}>
              {service.bullets.map((b) => (
                <li key={b} className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  {b}
                </li>
              ))}
            </ul>
            <div className={styles.ctaWrap}>
              <a href="#contact" className="btn-primary" id={`service-cta-${service.id}`}>
                Start your project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
