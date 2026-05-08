import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowTop} aria-hidden="true" />

      <div className={`container ${styles.footerInner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="11" height="11" rx="2" stroke="#00c8ff" strokeWidth="1.5"/>
              <rect x="16" y="1" width="11" height="11" rx="2" stroke="#00c8ff" strokeWidth="1.5"/>
              <rect x="1" y="16" width="11" height="11" rx="2" stroke="#7c3aed" strokeWidth="1.5"/>
              <rect x="16" y="16" width="11" height="11" rx="2" stroke="#00c8ff" strokeWidth="1.5" opacity="0.5"/>
              <circle cx="14" cy="14" r="2.5" fill="#00c8ff"/>
            </svg>
            <span className={styles.logoText}>INTEGRATED <strong>SYSTEMS</strong></span>
          </div>
          <p className={styles.mission}>
            "To obtain and satisfy a loyal client base through technical expertise and dedication to service."
          </p>
          <p className={styles.copyright}>
            © {YEAR} Integrated Systems, Inc. All rights reserved.
          </p>
        </div>

        {/* Office */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Main Office</h4>
          <address className={styles.address}>
            <p>8915 Highway 5</p>
            <p>Douglasville, GA 30134</p>
          </address>
          <div className={styles.contactLine}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:7705770515" className={styles.contactVal}>(770) 577-0515</a>
          </div>
          <div className={styles.contactLine}>
            <span className={styles.contactLabel}>Fax</span>
            <span className={styles.contactVal}>(770) 949-9111</span>
          </div>
        </div>

        {/* Contacts */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Key Contacts</h4>
          {[
            { name: 'Keith Carroll',  role: 'President',     email: 'kcarroll@isi-energy.com' },
            { name: 'Wayne Lyle',     role: 'Operations',    email: 'wlyle@isi-energy.com'    },
            { name: 'Ryan Carroll',   role: 'Business Dev',  email: 'rcarroll@isi-energy.com' },
          ].map(({ name, role, email }) => (
            <div key={email} className={styles.contactCard}>
              <div className={styles.contactName}>{name}</div>
              <div className={styles.contactRole}>{role}</div>
              <a href={`mailto:${email}`} className={styles.contactEmail}>{email}</a>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.linkList}>
            {['#home', '#about', '#products', '#portfolio', '#contact'].map((href) => (
              <li key={href}>
                <a href={href} className={styles.footerLink}>
                  {href.replace('#', '').replace(/^\w/, c => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
