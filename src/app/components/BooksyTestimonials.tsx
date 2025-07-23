import styles from './BooksyTestimonials.module.css';

const QuoteIcon = () => (
  <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
  </svg>
);

const BooksyLogo = () => (
  <svg className={styles.booksyLogo} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

interface Testimonial {
  id: number;
  text: string;
  author: string;
  rating: number;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "El mejor fade de Mallorca, sin discusión. Llevaba años buscando un sitio así. Artesanos de verdad.",
    author: "Marcos G.",
    rating: 5,
    date: "Julio 2025"
  },
  {
    id: 2, 
    text: "Llegué con una idea vaga y salí con el mejor look que he tenido nunca. Entienden lo que quieres incluso antes que tú.",
    author: "Alex R.",
    rating: 5,
    date: "Junio 2025"
  },
  {
    id: 3,
    text: "El ambiente, la música, el trato... es toda una experiencia. Y el corte, impecable. 100% recomendable.",
    author: "Javi P.",
    rating: 5,
    date: "Mayo 2025"
  },
  {
    id: 4,
    text: "Alejandro es un crack. Técnica perfecta y siempre te da consejos para mantener el corte. Volveré seguro.",
    author: "David M.",
    rating: 5,
    date: "Abril 2025"
  },
  {
    id: 5,
    text: "Mejor barbería de Inca. Calidad-precio inmejorable. El local está genial y el trato es súper cercano.",
    author: "Pablo S.",
    rating: 5,
    date: "Marzo 2025"
  },
  {
    id: 6,
    text: "Profesionalidad máxima. Fui para un evento importante y el resultado fue espectacular. Gracias!",
    author: "Carlos F.",
    rating: 5,
    date: "Febrero 2025"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className={styles.starRating}>
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const BooksyTestimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Reseñas Verificadas</h2>
        <div className={styles.booksyBrand}>
          <BooksyLogo />
          <span>Booksy</span>
        </div>
      </div>
      
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <QuoteIcon />
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <div className={styles.testimonialFooter}>
              <StarRating rating={testimonial.rating} />
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonial.author}</span>
                <span className={styles.testimonialDate}>{testimonial.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.viewMoreSection}>
        <p className={styles.totalReviews}>Más de 1,057 reseñas verificadas</p>
        <a 
          href="https://booksy.com/es-es/15627_klandestinobbs_barberia_68772_inca" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`btn-primary ${styles.viewMoreButton}`}
        >
          Ver todas en Booksy
        </a>
      </div>
    </section>
  );
};

export default BooksyTestimonials;