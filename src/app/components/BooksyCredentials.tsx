import styles from './BooksyCredentials.module.css';

const StarIcon = () => (
  <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ReviewIcon = () => (
  <svg className={styles.reviewIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const BooksyCredentials = () => {
  return (
    <div className={styles.credentialsBar}>
      <div className={styles.credential}>
        <StarIcon />
        <div className={styles.credentialContent}>
          <span className={styles.rating}>4.9★</span>
          <span className={styles.label}>Valoración</span>
        </div>
      </div>
      
      <div className={styles.credential}>
        <ReviewIcon />
        <div className={styles.credentialContent}>
          <span className={styles.count}>1,057</span>
          <span className={styles.label}>Reseñas</span>
        </div>
      </div>
      
      <div className={styles.credential}>
        <div className={styles.percentageCircle}>
          <span className={styles.percentage}>95%</span>
        </div>
        <div className={styles.credentialContent}>
          <span className={styles.excellence}>Excelencia</span>
          <span className={styles.label}>5 Estrellas</span>
        </div>
      </div>
    </div>
  );
};

export default BooksyCredentials;