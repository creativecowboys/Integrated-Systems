import Logo from './Logo';
import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

const CONTACTS = [
  { name: 'Keith Carroll', role: 'President',    email: 'kcarroll@isi-energy.com' },
  { name: 'Wayne Lyle',    role: 'Operations',   email: 'wlyle@isi-energy.com' },
  { name: 'Ryan Carroll',  role: 'Business Dev', email: 'rcarroll@isi-energy.com' },
];

const NAV = [
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#industries',   label: 'Industries' },
  { href: '#process',      label: 'Process' },
  { href: '#work',         label: 'Work' },
  { href: '#about',        label: 'About' },
  { href: '#contact',      label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#home" className={styles.brand} aria-label="Integrated Systems home">
            <Logo size={34} />
            <span className={styles.brandText}>INTEGRATED&nbsp;<strong>SYSTEMS</strong></span>
          </a>
          <p className={styles.mission}>
            "To obtain and satisfy a loyal client base through technical expertise
            and dedication to service."
          </p>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Authorized Reliable Controls Dealer
          </span>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Main Office</h4>
          <address className={styles.address}>
            8915 Highway 5<br />
            Douglasville, GA 30134
          </address>
          <dl className={styles.contactLines}>
            <div className={styles.line}>
              <dt>Phone</dt>
              <dd><a href="tel:7705770515">(770) 577-0515</a></dd>
            </div>
            <div className={styles.line}>
              <dt>Fax</dt>
              <dd>(770) 949-9111</dd>
            </div>
          </dl>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Key Contacts</h4>
          <ul className={styles.contacts}>
            {CONTACTS.map(({ name, role, email }) => (
              <li key={email} className={styles.contact}>
                <span className={styles.contactName}>{name}</span>
                <span className={styles.contactRole}>{role}</span>
                <a href={`mailto:${email}`} className={styles.contactEmail}>{email}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigate</h4>
          <ul className={styles.navList}>
            {NAV.map(({ href, label }) => (
              <li key={href}><a href={href} className={styles.navLink}>{label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <span>© {YEAR} Integrated Systems, Inc. All rights reserved.</span>
          <span className={styles.region}>Serving commercial facilities across the Southeast</span>
        </div>
      </div>
    </footer>
  );
}
