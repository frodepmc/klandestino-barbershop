import styles from './AlejandroPage.module.css';

// --- Icon Components ---
const InstagramIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const PodcastIcon = () => (
  <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6"></path>
    <path d="m15.14 8.86-4.28 4.28"></path>
    <path d="m8.86 8.86 4.28 4.28"></path>
  </svg>
);

const AwardIcon = () => (
  <svg className={styles.awardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const EducationIcon = () => (
  <svg className={styles.educationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const GlobalIcon = () => (
  <svg className={styles.globalIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const achievements = [
  {
    icon: <AwardIcon />,
    title: "Fundador de Klandestino BarBerShop",
    description: "Creador y propietario de la barbería más reconocida de Inca, Mallorca"
  },
  {
    icon: <EducationIcon />,
    title: "Educador Certificado",
    description: "Imparte cursos de barbería y workshops con técnicas avanzadas"
  },
  {
    icon: <GlobalIcon />,
    title: "Colaborador Internacional",
    description: "Networking con barberos de California y Argentina"
  },
  {
    icon: <PodcastIcon />,
    title: "Invitado en El Sótano Podcast",
    description: "Episodio #15 - KLND, compartiendo su trayectoria emprendedora"
  }
];

const expertise = [
  "Fades de Precisión",
  "Técnicas de Color Avanzadas", 
  "Decoloración y Matización",
  "Formación y Educación",
  "Networking Internacional",
  "Desarrollo de Marca Personal"
];

const socialStats = [
  { platform: "Instagram Personal", handle: "@varguexx_", followers: "16,000" },
  { platform: "TikTok", handle: "@varguexxbarber", followers: "1,150" },
  { platform: "Instagram Klandestino", handle: "@klandestino_bbs", followers: "8,100" }
];

const AlejandroPage = () => {
  return (
    <div className={styles.alejandroPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.pageTitle}>Alejandro Vargas</h1>
            <p className={styles.pageSubtitle}>Fundador & Educador</p>
            <p className={styles.heroDescription}>
              Más que un barbero, Alejandro es un artista, educador y visionario que ha transformado 
              Klandestino BarBerShop en el hub de referencia de la barbería moderna en Mallorca.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/varguexx_" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <InstagramIcon />
                <span>@varguexx_</span>
              </a>
              <a href="https://www.tiktok.com/@varguexxbarber" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <TikTokIcon />
                <span>@varguexxbarber</span>
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <div className={styles.placeholderImage}>
                <p>Foto Profesional de Alejandro Vargas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.socialProof}>
        <h2 className={styles.sectionTitle}>Influencia Digital</h2>
        <div className={styles.socialStats}>
          {socialStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.followers}</span>
              <span className={styles.statLabel}>Seguidores</span>
              <span className={styles.statPlatform}>{stat.platform}</span>
              <span className={styles.statHandle}>{stat.handle}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievements}>
        <h2 className={styles.sectionTitle}>Logros y Reconocimientos</h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementCard}>
              {achievement.icon}
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementDescription}>{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className={styles.expertise}>
        <h2 className={styles.sectionTitle}>Especialidades</h2>
        <div className={styles.expertiseGrid}>
          {expertise.map((skill, index) => (
            <div key={index} className={styles.expertiseItem}>
              <span className={styles.expertiseText}>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Educational Content */}
      <section className={styles.educational}>
        <h2 className={styles.sectionTitle}>Contenido Educativo</h2>
        <div className={styles.educationalContent}>
          <div className={styles.contentCard}>
            <h3>Reels "Paso a Paso"</h3>
            <p>Técnicas detalladas de degradado y coloración en Instagram y TikTok</p>
            <div className={styles.contentTags}>
              <span className={styles.tag}>#MallorcaConFlow</span>
              <span className={styles.tag}>#BarberTutorial</span>
            </div>
          </div>
          <div className={styles.contentCard}>
            <h3>Cursos Presenciales</h3>
            <p>Formación estructurada en técnicas avanzadas de barbería</p>
            <div className={styles.contentTags}>
              <span className={styles.tag}>2 Inicios de Curso</span>
              <span className={styles.tag}>Certificación</span>
            </div>
          </div>
          <div className={styles.contentCard}>
            <h3>Workshops Internacionales</h3>
            <p>Eventos con barberos reconocidos mundialmente</p>
            <div className={styles.contentTags}>
              <span className={styles.tag}>Braian Altamirano</span>
              <span className={styles.tag}>Argentina</span>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className={styles.futureVision}>
        <h2 className={styles.sectionTitle}>Visión de Futuro</h2>
        <div className={styles.visionContent}>
          <div className={styles.visionCard}>
            <h3>Klandestino 2.0</h3>
            <p>
              En el podcast "El Sótano", Alejandro adelantó los planes para una segunda sede, 
              expandiendo la marca Klandestino hacia nuevos horizontes en Mallorca.
            </p>
          </div>
          <div className={styles.visionCard}>
            <h3>Hub Educativo</h3>
            <p>
              Convertir Klandestino en el centro de referencia para la formación en barbería 
              en las Islas Baleares, con un enfoque internacional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>¿Quieres aprender de Alejandro?</h2>
        <p>Mantente conectado para conocer los próximos cursos y workshops</p>
        <div className={styles.ctaButtons}>
          <a 
            href="https://www.instagram.com/varguexx_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Síguelo en Instagram
          </a>
          <a 
            href="/education" 
            className={`btn-primary ${styles.secondaryButton}`}
          >
            Ver Cursos
          </a>
        </div>
      </section>
    </div>
  );
};

export default AlejandroPage;