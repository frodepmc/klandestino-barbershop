import styles from './Services.module.css';
import TwemojiText from '../components/TwemojiText'; // Import the new component

// --- Icon Components ---
const PopularIcon = () => (
  <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const CutsIcon = () => (
  <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="7" r="3" /><circle cx="6" cy="17" r="3" /><line x1="8.6" y1="8.6" x2="19" y2="19" /><line x1="8.6" y1="15.4" x2="19" y2="5" />
  </svg>
);
const ColorIcon = () => (
  <svg className={styles.categoryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" /><path d="M12 22V12" />
  </svg>
);

// --- Service Data ---
const popularServices = [
  { name: "CORTE DE PELO 💇🏻‍♂️", price: "15,00 €", description: "Un corte clásico o moderno, adaptado a tu estilo. Precisión y técnica para un resultado impecable." },
  { name: "CORTE KLANDESTINO 🥷 (SOLOVARGAS)", price: "20,00 €", description: "El corte de autor by Vargas. Un estilo único y personal que define nuestra marca." },
  { name: "CORTE +BARBA 💳", price: "20,00 €", description: "La combinación perfecta. Un corte a medida y un arreglo de barba para un look completo y definido." },
];

const hairCuts = [
    { name: "CORTE Y CEJAS", price: "17,00 €", description: "Define tu mirada. Un corte de pelo preciso complementado con un diseño de cejas profesional." },
    { name: "CORTE KLANDESTINO +BARBA Y CEJAS🥷( SOLO VARGAS)", price: "25,00 €", description: "La experiencia premium definitiva. Corte de autor, diseño de barba y perfilado de cejas." },
];

const colors = [
    { name: "RAPADO DECOLORADO☀️", price: "35,00 €+", description: "Un look atrevido y fresco. Decoloración uniforme para un rapado con carácter." },
    { name: "MECHAS CON GORRO BASICAS RUBIAS🤹🏻‍♀️", price: "30,00 €+", description: "Las de toda la vida. Toques de luz y reflejos rubios para iluminar tu estilo." },
    { name: "COLOR PLATA / GRIS / RUBIO CENIZA 🧊🧊🧊👦🏼👦🏼", price: "60,00 €+", description: "Transformación total. Decoloración y matización para conseguir tonos fríos y platinados." },
    { name: "MECHAS PLATINO 😏", price: "45,00 €+", description: "Reflejos platino para un look moderno y sofisticado. Aporta luminosidad y contraste." },
];

// --- Components ---
const ServiceCard = ({ name, price, description }: { name: string, price: string, description: string }) => (
  <a 
    href="https://booksy.com/es-es/15627_klandestinobbs_barberia_68772_inca" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={styles.serviceLink}
  >
    <div className={styles.serviceCard}>
      <div className={styles.cardHeader}>
        <h2><TwemojiText>{name}</TwemojiText></h2>
        <span className={styles.price}>{price}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  </a>
);

const ServicesPage = () => {
  const booksyUrl = "https://booksy.com/es-es/15627_klandestinobbs_barberia_68772_inca";
  
  return (
    <div className={styles.servicesPage}>
      <h1 className={styles.pageTitle}>Nuestros Servicios</h1>
      <p className={styles.pageSubtitle}>Calidad y estilo en cada detalle. Elige tu próximo look.</p>
      
      <h2 className={styles.categoryTitle}><PopularIcon /> Servicios Populares</h2>
      <div className={styles.servicesGrid}>
        {popularServices.map((service, index) => (
          <ServiceCard key={`popular-${index}`} {...service} />
        ))}
      </div>

      <h2 className={styles.categoryTitle}><CutsIcon /> Cortes de Cabello</h2>
      <div className={styles.servicesGrid}>
        {hairCuts.map((service, index) => (
          <ServiceCard key={`cuts-${index}`} {...service} />
        ))}
      </div>

      <h2 className={styles.categoryTitle}><ColorIcon /> Colores y Decoloración</h2>
      <div className={styles.servicesGrid}>
        {colors.map((service, index) => (
          <ServiceCard key={`colors-${index}`} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

