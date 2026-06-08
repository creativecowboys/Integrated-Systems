'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#industries',   label: 'Industries' },
  { href: '#process',      label: 'Process' },
  { href: '#work',         label: 'Work' },
  { href: '#about',        label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} onClick={() => setOpen(false)} aria-label="Integrated Systems home">
          <Logo className={styles.logoMark} />
          <span className={styles.brandText}>INTEGRATED&nbsp;<strong>SYSTEMS</strong></span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.link}>{label}</a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="tel:7705770515" className={styles.phone}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5.2 2.5 6.6 5.4 5.3 6.9c.7 1.4 1.4 2.1 2.8 2.8l1.5-1.3 2.9 1.4c.1 1.4-1 2.8-2.6 2.6C6.4 11.9 4.1 9.6 2.6 5.1 2.4 3.5 3.8 2.4 5.2 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
            (770) 577-0515
          </a>
          <a href="#contact" className={`btn btn-primary ${styles.cta}`}>Get a Consultation</a>
        </div>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className={styles.mobileFoot}>
          <a href="tel:7705770515" className={styles.mobilePhone}>(770) 577-0515</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Get a Consultation</a>
        </div>
      </div>
    </header>
  );
}
