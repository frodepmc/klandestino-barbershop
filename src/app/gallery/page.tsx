import styles from './Gallery.module.css';

const GalleryPage = () => {
  // Video de JC REYES (video7.mp4) es el destacado
  const featuredVideo = "/video7.mp4";
  const otherVideos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
    "/video5.mp4",
    "/video6.mp4",
    "/video8.mp4",
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
          <video src={featuredVideo} autoPlay loop muted controls className={styles.featuredVideo}></video>
          <div className={styles.highlightBadge}>★ JC REYES</div>
        </div>

        {/* Other Videos */}
        {otherVideos.map((videoSrc, index) => (
          <video key={index} src={videoSrc} controls className={styles.galleryItem}></video>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

