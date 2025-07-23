import styles from './Contact.module.css';
import { ContactInfo } from './components/ContactInfo';
import { ContactMap } from './components/ContactMap';

const ContactPage = () => (
  <div className={styles.contactPage}>
    <div className={styles.backgroundOverlay}></div>
    <div className={styles.contactContainer}>
      <h1 className={styles.mainTitle}>Pide tu cita</h1>
      <div className={styles.contentWrapper}>
        <ContactInfo />
        <ContactMap />
      </div>
    </div>
  </div>
);

export default ContactPage;