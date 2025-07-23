import styles from './Gallery.module.css';

const VideoPlaceholder = ({ title, featured = false }: { title: string; featured?: boolean }) => (
  <div className={`${styles.videoPlaceholder} ${featured ? styles.featuredPlaceholder : ''}`}>
    <div className={styles.playIcon}>▶</div>
    <p>{title}</p>
    {featured && <div className={styles.highlightBadge}>★ JC REYES</div>}
  </div>
);

const GalleryPage = () => {
  const videoTitles = [
    "Colaboración JC Reyes",
    "Corte Fade Moderno", 
    "Afeitado Clásico",
    "Diseño Artístico",
    "Transformación Total",
    "Estilo Urbano",
    "Precisión Máxima",
    "Arte Capilar"
  ];

  return (
    <div className={styles.galleryPage}>
      <h1 className={styles.pageTitle}>Nuestra Galería</h1>
      <p className={styles.pageDescription}>
        Aquí es donde el metal se encuentra con el pelo. Echa un vistazo a nuestros últimos cortes y diseños.
      </p>
      <div className={styles.galleryGrid}>
        {/* Featured Video */}
        <div className={styles.featuredItem}>
          <VideoPlaceholder title={videoTitles[0]} featured={true} />
        </div>

        {/* Other Videos */}
        {videoTitles.slice(1).map((title, index) => (
          <div key={index} className={styles.galleryItem}>
            <VideoPlaceholder title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;