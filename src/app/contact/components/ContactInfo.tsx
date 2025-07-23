import React from 'react';
import styles from '../Contact.module.css';
import { Schedule } from './Schedule';

// --- SVG Icons ---
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const ContactInfo: React.FC = () => (
  <div className={styles.infoCard}>
    <h2 className={styles.cardTitle}>Nuestra Guarida</h2>
    
    <div className={styles.infoItem}>
      <LocationIcon />
      <p>
        Carrer de la Glòria, 27<br/>
        07300 Inca, Illes Balears
      </p>
    </div>
    
    <div className={styles.infoItem}>
      <PhoneIcon />
      <p>+34 660 87 50 27</p>
    </div>

    <Schedule />
    
    <a
      href="https://klandestinobbs.booksy.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaButton}
    >
      Reserva tu Cita
    </a>
  </div>
);