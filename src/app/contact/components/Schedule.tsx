import React from 'react';
import styles from '../Contact.module.css';

// --- SVG Icon ---
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const schedule = [
  { day: 'Lunes', hours: '10:30 – 13:30 / 15:00 – 20:00' },
  { day: 'Martes a Viernes', hours: '10:00 – 13:30 / 15:00 – 20:00' },
  { day: 'Sábado', hours: '10:00 – 15:00' },
  { day: 'Domingo', hours: 'Cerrado' },
];

export const Schedule: React.FC = () => (
  <div className={styles.scheduleContainer}>
    <div className={styles.infoItem}>
      <ClockIcon />
      <h3 className={styles.scheduleTitle}>Horario</h3>
    </div>
    <ul className={styles.scheduleList}>
      {schedule.map(({ day, hours }) => (
        <li key={day} className={styles.scheduleItem}>
          <span className={styles.scheduleDay}>{day}</span>
          <span className={styles.scheduleHours}>{hours}</span>
        </li>
      ))}
    </ul>
  </div>
);