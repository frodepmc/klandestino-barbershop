import React from 'react';
import styles from '../Contact.module.css';

export const ContactMap: React.FC = () => (
  <div className={styles.mapContainer}>
    <iframe
      title="Mapa de Klandestino BarBerShop"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.186624779789!2d2.9102018!3d39.7220095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297c55881d8cef9%3A0x5b02de3b14c6acfb!2sKlandestinoBBS!5e1!3m2!1ses!2ses!4v1753237333828!5m2!1ses!2ses"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);
