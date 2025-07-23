"use client";

import { useState } from 'react';
import styles from './Education.module.css';

// --- Icon Components ---
const GraduationIcon = () => (
  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const WorkshopIcon = () => (
  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const VideoIcon = () => (
  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const CertificateIcon = () => (
  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
  </svg>
);

const PlayIcon = () => (
  <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21"></polygon>
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles.calendarIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg className={styles.clockIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// --- Data ---
const courses = [
  {
    id: 1,
    title: "Curso Básico de Barbería",
    description: "Fundamentos de corte, técnicas de fade y manejo de herramientas profesionales",
    duration: "2 sesiones",
    level: "Principiante",
    instructor: "Alejandro Vargas",
    price: "Consultar",
    features: [
      "Técnicas básicas de corte",
      "Uso de máquinas y tijeras",
      "Principios del fade",
      "Atención al cliente"
    ]
  },
  {
    id: 2,
    title: "Técnicas Avanzadas de Color",
    description: "Decoloración, matización y técnicas de coloración moderna",
    duration: "1 día intensivo",
    level: "Intermedio/Avanzado",
    instructor: "Alejandro Vargas",
    price: "Consultar",
    features: [
      "Teoría del color",
      "Decoloración segura",
      "Matizadores",
      "Tonos platino y ceniza"
    ]
  },
  {
    id: 3,
    title: "Masterclass de Fades",
    description: "Dominando el arte del degradado perfecto en todas sus variantes",
    duration: "4 horas",
    level: "Intermedio",
    instructor: "Alejandro Vargas",
    price: "Consultar",
    features: [
      "Low, mid y high fades",
      "Skin fade perfecto",
      "Transiciones suaves",
      "Trucos profesionales"
    ]
  }
];

const pastWorkshops = [
  {
    id: 1,
    title: "Workshop Braian Altamirano",
    description: "Técnicas argentinas de barbería con el reconocido barbero Braian Altamirano",
    date: "14-15 Junio 2025",
    country: "Argentina",
    attendees: "25 participantes",
    image: "/workshop-braian.jpg" // placeholder
  },
  {
    id: 2,
    title: "Colaboración California",
    description: "Intercambio técnico en The Luxx Barbershop con @a1barber760",
    date: "Mayo 2025",
    country: "Estados Unidos",
    attendees: "Colaboración privada",
    image: "/workshop-california.jpg" // placeholder
  }
];

const tutorialVideos = [
  {
    id: 1,
    title: "Fade Paso a Paso",
    description: "Tutorial completo de fade con técnicas profesionales",
    duration: "3:45",
    views: "12.5K",
    platform: "Instagram",
    hashtags: ["#MallorcaConFlow", "#FadeTutorial"]
  },
  {
    id: 2,
    title: "Decoloración Segura",
    description: "Cómo conseguir el platino perfecto sin dañar el cabello",
    duration: "2:30",
    views: "8.2K", 
    platform: "TikTok",
    hashtags: ["#BarberTutorial", "#Platinum"]
  },
  {
    id: 3,
    title: "Diseño de Barba",
    description: "Perfilado y diseño profesional de barba",
    duration: "4:12",
    views: "15.3K",
    platform: "Instagram",
    hashtags: ["#BeardDesign", "#BarberSkills"]
  }
];

// --- Components ---
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Formulario enviado. Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formRow}>
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un curso</option>
          {courses.map(course => (
            <option key={course.id} value={course.title}>{course.title}</option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        placeholder="Mensaje adicional (opcional)"
        value={formData.message}
        onChange={handleChange}
        rows={4}
      />
      <button type="submit" className="btn-primary">
        Solicitar Información
      </button>
    </form>
  );
};

const EducationPage = () => {
  return (
    <div className={styles.educationPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>Klandestino Academy</h1>
          <p className={styles.pageSubtitle}>Hub Educativo de Barbería en Mallorca</p>
          <p className={styles.heroDescription}>
            Aprende de la mano de Alejandro Vargas y conviértete en un maestro de la barbería moderna. 
            Cursos presenciales, workshops internacionales y contenido digital de primera calidad.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>16K+</span>
              <span className={styles.statLabel}>Seguidores</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Videos Educativos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Alumnos Formados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>¿Qué Ofrecemos?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <GraduationIcon />
            <h3>Cursos Presenciales</h3>
            <p>Formación completa en técnicas de barbería con práctica directa y certificación</p>
          </div>
          <div className={styles.featureCard}>
            <WorkshopIcon />
            <h3>Workshops Internationales</h3>
            <p>Seminarios con barberos reconocidos mundialmente y técnicas exclusivas</p>
          </div>
          <div className={styles.featureCard}>
            <VideoIcon />
            <h3>Contenido Digital</h3>
            <p>Tutoriales paso a paso en Instagram y TikTok con técnicas profesionales</p>
          </div>
          <div className={styles.featureCard}>
            <CertificateIcon />
            <h3>Certificación</h3>
            <p>Diplomas oficiales que avalan tu formación en técnicas avanzadas</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.courses}>
        <h2 className={styles.sectionTitle}>Cursos Disponibles</h2>
        <div className={styles.coursesGrid}>
          {courses.map(course => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseHeader}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <span className={styles.courseLevel}>{course.level}</span>
              </div>
              <p className={styles.courseDescription}>{course.description}</p>
              <div className={styles.courseDetails}>
                <div className={styles.courseDetail}>
                  <ClockIcon />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.courseDetail}>
                  <LocationIcon />
                  <span>Klandestino BarBerShop</span>
                </div>
                <div className={styles.courseDetail}>
                  <GraduationIcon />
                  <span>{course.instructor}</span>
                </div>
              </div>
              <div className={styles.courseFeatures}>
                <h4>Incluye:</h4>
                <ul>
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.courseFooter}>
                <span className={styles.coursePrice}>{course.price}</span>
                <button className="btn-primary">Más Información</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Workshops */}
      <section className={styles.pastWorkshops}>
        <h2 className={styles.sectionTitle}>Workshops Realizados</h2>
        <div className={styles.workshopsGrid}>
          {pastWorkshops.map(workshop => (
            <div key={workshop.id} className={styles.workshopCard}>
              <div className={styles.workshopImage}>
                <div className={styles.placeholderImage}>
                  <PlayIcon />
                </div>
                <div className={styles.workshopOverlay}>
                  <span className={styles.workshopCountry}>{workshop.country}</span>
                </div>
              </div>
              <div className={styles.workshopContent}>
                <h3 className={styles.workshopTitle}>{workshop.title}</h3>
                <p className={styles.workshopDescription}>{workshop.description}</p>
                <div className={styles.workshopMeta}>
                  <div className={styles.workshopDetail}>
                    <CalendarIcon />
                    <span>{workshop.date}</span>
                  </div>
                  <div className={styles.workshopDetail}>
                    <WorkshopIcon />
                    <span>{workshop.attendees}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutorial Videos */}
      <section className={styles.tutorials}>
        <h2 className={styles.sectionTitle}>Tutoriales Gratuitos</h2>
        <p className={styles.sectionSubtitle}>Aprende técnicas básicas con nuestros videos paso a paso</p>
        <div className={styles.tutorialsGrid}>
          {tutorialVideos.map(video => (
            <div key={video.id} className={styles.tutorialCard}>
              <div className={styles.tutorialVideo}>
                <div className={styles.videoPlaceholder}>
                  <PlayIcon />
                </div>
                <div className={styles.videoDuration}>{video.duration}</div>
              </div>
              <div className={styles.tutorialContent}>
                <h3 className={styles.tutorialTitle}>{video.title}</h3>
                <p className={styles.tutorialDescription}>{video.description}</p>
                <div className={styles.tutorialMeta}>
                  <span className={styles.videoViews}>{video.views} visualizaciones</span>
                  <span className={styles.videoPlatform}>{video.platform}</span>
                </div>
                <div className={styles.tutorialTags}>
                  {video.hashtags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.tutorialsFooter}>
          <p>¿Quieres ver más contenido?</p>
          <div className={styles.socialButtons}>
            <a href="https://www.instagram.com/klandestino_bbs" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ver en Instagram
            </a>
            <a href="https://www.tiktok.com/@varguexxbarber" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Ver en TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>¿Interesado en Aprender?</h2>
        <p className={styles.sectionSubtitle}>
          Completa el formulario y te contactaremos con información detallada sobre nuestros cursos
        </p>
        <ContactForm />
        <div className={styles.contactInfo}>
          <p>O contáctanos directamente:</p>
          <div className={styles.contactMethods}>
            <a href="https://www.instagram.com/varguexx_" target="_blank" rel="noopener noreferrer">
              Instagram: @varguexx_
            </a>
            <a href="tel:+34660875027">
              Teléfono: +34 660 87 50 27
            </a>
            <span>
              Ubicación: Klandestino BarBerShop, Inca
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;