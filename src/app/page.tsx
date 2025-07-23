import Link from 'next/link';
import styles from './Home.module.css';
import Image from 'next/image';
import BooksyCredentials from './components/BooksyCredentials';
import BooksyTestimonials from './components/BooksyTestimonials';

// --- SVG Icons ---
const ScissorsIcon = () => (
  <svg className={styles.serviceIcon} width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="6" cy="7" r="3" />
    <circle cx="6" cy="17" r="3" />
    <line x1="8.6" y1="8.6" x2="19" y2="19" />
    <line x1="8.6" y1="15.4" x2="19" y2="5" />
  </svg>
);

const RazorIcon = () => (
  <svg className={styles.serviceIcon} width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8.462 4.462l10.076 10.076a2.25 2.25 0 0 1 0 3.182l-3.182 3.182a2.25 2.25 0 0 1 -3.182 0l-10.076 -10.076a2.25 2.25 0 0 1 0 -3.182l3.182 -3.182a2.25 2.25 0 0 1 3.182 0z" />
    <path d="M6 8l-2.209 -2.209a2.25 2.25 0 0 1 0 -3.182l3.182 -3.182a2.25 2.25 0 0 1 3.182 0l2.209 2.209" />
  </svg>
);

const StyleIcon = () => (
  <svg className={styles.serviceIcon} width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 18v-2a4 4 0 0 0 -4 -4h-1" />
    <path d="M16 16l-4 -4" />
    <path d="M12 12l-4 -4" />
    <path d="M12 12l-4 4" />
    <path d="M12 12l4 4" />
    <path d="M4 18v-2a4 4 0 0 1 4 -4h1" />
  </svg>
);

const TrophyIcon = () => (
  <svg className={styles.trophyIcon} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <line x1="7" y1="4" x2="17" y2="4" />
    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
    <circle cx="5" cy="9" r="2" />
    <circle cx="19" cy="9" r="2" />
  </svg>
);


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/video1.mp4" type="video/mp4" />
          Tu navegador no soporta vídeos HTML5.
        </video>
        <div className={styles.videoOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>KLANDESSTINO</h1>
          <p className={styles.subtitle}>Creamos el mejor estilo para ti.</p>
          <div className={styles.awards}>
            <div className={styles.awardItem}>
              <TrophyIcon />
              <span className={styles.awardText}>FAST FADE MBB 2023</span>
            </div>
            <div className={styles.awardItem}>
              <TrophyIcon />
              <span className={styles.awardText}>Corte y barba linea barber 2023</span>
            </div>
          </div>
          <a 
            href="https://klandestinobbs.booksy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn-primary ${styles.ctaButton}`}
          >
            Pide tu Cita en Booksy
          </a>
        </div>
      </section>

      {/* Booksy Credentials */}
      <BooksyCredentials />

      {/* Manifesto Section */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoImage}>
          <video src="/video8.mp4" muted className={styles.manifestoVideo}></video>
        </div>
        <div className={styles.manifestoContent}>
          <h2 className={styles.sectionTitle}>Manifiesto Klandestino</h2>
          <p>Esto no es solo una barbería. Es un refugio para los que entienden que el estilo es una declaración. Rompemos las reglas, no por rebeldía, sino porque tu identidad no cabe en un molde. Cada corte es una pieza de arte. Cada cliente, un lienzo. Bienvenidos al underground del estilismo.</p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className={styles.featuredServices}>
        <h2 className={styles.sectionTitle}>Servicios Estrella</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <ScissorsIcon />
            <h3>Corte de Precisión</h3>
            <p>Ingeniería capilar. Un corte diseñado para tu rostro, tu estilo y tu día a día. Técnica y arte en cada pasada.</p>
          </div>
          <div className={styles.serviceCard}>
            <RazorIcon />
            <h3>Afeitado Ritual</h3>
            <p>El arte perdido del afeitado con navaja. Toallas calientes, espuma densa y un apurado que redefine la suavidad.</p>
          </div>
          <div className={styles.serviceCard}>
            <StyleIcon />
            <h3>Diseño y Color</h3>
            <p>Desde un cambio sutil hasta una declaración de intenciones. Damos vida a tus ideas con las técnicas más avanzadas.</p>
          </div>
        </div>
      </section>

      {/* Booksy Testimonials */}
      <BooksyTestimonials />

      {/* Featured JC Reyes Video */}
      <section className={styles.featuredJCReyes}>
        <h2 className={styles.sectionTitle}>Klandestino x JC Reyes</h2>
        <div className={styles.featuredJCReyesWrapper}>
          <video src="/video7.mp4" controls className={styles.featuredJCReyesVideo}></video>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <h2 className={styles.galleryTitle}>Últimos Trabajos</h2>
        <div className={styles.galleryGrid}>
          <video src="/video2.mp4" autoPlay loop muted className={styles.galleryItem}></video>
          <video src="/video3.mp4" autoPlay loop muted className={styles.galleryItem}></video>
          <video src="/video4.mp4" autoPlay loop muted className={styles.galleryItem}></video>
          <video src="/video5.mp4" autoPlay loop muted className={styles.galleryItem}></video>
          <video src="/video6.mp4" autoPlay loop muted className={styles.galleryItem}></video>
          <video src="/video8.mp4" autoPlay loop muted className={styles.galleryItem}></video>
        </div>
      </section>
    </div>
  );
}