'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#products',  label: 'Products' },
  { href: '#portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => handleNavClick('#home')}>
          <div className={styles.logoMark}>
            <Image
              src="/images/x logo.png"
              alt="Integrated Systems logo"
              width={36}
              height={36}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span className={styles.logoText}>
            INTEGRATED <strong>SYSTEMS</strong>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.navLink} ${active === href ? styles.navLinkActive : ''}`}
              onClick={() => handleNavClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className={styles.navCta} onClick={() => handleNavClick('#contact')}>
          Contact Us
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={styles.mobileLink}
            onClick={() => handleNavClick(href)}
          >
            {label}
          </a>
        ))}
        <a href="#contact" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={() => handleNavClick('#contact')}>
          Contact Us
        </a>
      </div>
    </header>
  );
}
