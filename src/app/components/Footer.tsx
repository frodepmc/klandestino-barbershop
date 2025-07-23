import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={styles.socialIcon}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <Link href="/" className={styles.brand}>
            <Image src="/logo.jpg" alt="Klandestino Logo" width={100} height={100} />
          </Link>
          <p className={styles.tagline}>El estilo no se encuentra, se crea.</p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Explora</h3>
          <Link href="/gallery" className={styles.footerLink}>Galería</Link>
          <Link href="/services" className={styles.footerLink}>Servicios</Link>
          <Link href="/education" className={styles.footerLink}>Educación</Link>
          <Link href="/events" className={styles.footerLink}>Eventos</Link>
          <Link href="/about/alejandro" className={styles.footerLink}>Sobre Alejandro</Link>
          <Link href="/contact" className={styles.footerLink}>Contacto</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Contacto</h3>
          <p>Carrer de la Glòria, 27, 07300 Inca, Illes Balears</p>
          <p>+34 660 87 50 27</p>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.columnTitle}>Social</h3>
          <a href="https://www.instagram.com/klandestino_bbs" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Klandestino BarBerShop - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;