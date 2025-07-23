"use client";

import { useState } from 'react';
import styles from './Events.module.css';

// --- Icon Components ---
const CalendarIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const WorldIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const StarIcon = () => (
  <svg className={styles.eventIcon} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const NotificationIcon = () => (
  <svg className={styles.notificationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

// --- Event Types ---
type EventStatus = 'upcoming' | 'completed' | 'cancelled';
type EventType = 'workshop' | 'course' | 'masterclass' | 'festival';

interface Event {
  id: number;
  title: string;
  description: string;
  type: EventType;
  status: EventStatus;
  date: string;
  time?: string;
  duration: string;
  location: string;
  instructor: string;
  maxAttendees?: number;
  currentAttendees?: number;
  price?: string;
  country?: string;
  featured?: boolean;
  image?: string;
  highlights?: string[];
}

// --- Event Data ---
const events: Event[] = [
  {
    id: 1,
    title: "Klandestino Barber Fest 2025",
    description: "El primer festival de barbería de Mallorca. Batallas de corte, masterclasses con invitados internacionales, y feria de marcas profesionales.",
    type: "festival",
    status: "upcoming",
    date: "15-16 Noviembre 2025",
    time: "09:00 - 18:00",
    duration: "2 días",
    location: "Centro de Congresos, Palma",
    instructor: "Alejandro Vargas + Invitados",
    maxAttendees: 200,
    currentAttendees: 45,
    price: "150€ (2 días)",
    featured: true,
    highlights: [
      "Batallas de corte en vivo",
      "Masterclasses exclusivas",
      "Networking internacional",
      "Feria de marcas"
    ]
  },
  {
    id: 2,
    title: "Masterclass Avanzada de Color",
    description: "Técnicas profesionales de decoloración y matización con los últimos productos del mercado.",
    type: "masterclass",
    status: "upcoming",
    date: "12 Octubre 2025",
    time: "10:00 - 17:00",
    duration: "7 horas",
    location: "Klandestino BarBerShop",
    instructor: "Alejandro Vargas",
    maxAttendees: 8,
    currentAttendees: 3,
    price: "180€",
    highlights: [
      "Teoría del color profesional",
      "Decoloración segura",
      "Técnicas de matización",
      "Certificado oficial"
    ]
  },
  {
    id: 3,
    title: "Curso Básico Intensivo",
    description: "Aprende los fundamentos de la barbería moderna en un fin de semana completo.",
    type: "course",
    status: "upcoming",
    date: "28-29 Septiembre 2025",
    time: "09:00 - 16:00",
    duration: "2 días",
    location: "Klandestino BarBerShop",
    instructor: "Alejandro Vargas",
    maxAttendees: 10,
    currentAttendees: 7,
    price: "250€",
    highlights: [
      "Técnicas básicas de corte",
      "Manejo de herramientas",
      "Principios del fade",
      "Práctica supervisada"
    ]
  },
  {
    id: 4,
    title: "Workshop Braian Altamirano",
    description: "Técnicas argentinas de barbería con el reconocido barbero Braian Altamirano de Buenos Aires.",
    type: "workshop",
    status: "completed",
    date: "14-15 Junio 2025",
    duration: "2 días",
    location: "Klandestino BarBerShop", 
    instructor: "Braian Altamirano (Argentina)",
    maxAttendees: 25,
    currentAttendees: 25,
    country: "Argentina",
    highlights: [
      "Técnicas sudamericanas",
      "Fades únicos",
      "Networking internacional",
      "Certificado de participación"
    ]
  },
  {
    id: 5,
    title: "Colaboración Internacional - California",
    description: "Intercambio técnico en The Luxx Barbershop con barberos de California.",
    type: "workshop",
    status: "completed",
    date: "Mayo 2025",
    duration: "1 semana",
    location: "The Luxx Barbershop, California",
    instructor: "@a1barber760",
    country: "Estados Unidos",
    highlights: [
      "Técnicas americanas",
      "Networking internacional",
      "Intercambio cultural",
      "Nuevas tendencias"
    ]
  }
];

// --- Components ---
const EventRegistrationForm = ({ eventId, onClose }: { eventId: number, onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

  const event = events.find(e => e.id === eventId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', { eventId, ...formData });
    alert('Inscripción enviada. Te contactaremos para confirmar tu plaza.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Inscripción: {event?.title}</h3>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formRow}>
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Nivel de experiencia *</option>
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
              <option value="profesional">Profesional</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Comentarios adicionales (opcional)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
          />
          <div className={styles.formFooter}>
            <p className={styles.eventPrice}>Precio: {event?.price || 'Consultar'}</p>
            <button type="submit" className="btn-primary">
              Inscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const NotificationSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Notification signup:', email);
    alert('¡Suscrito! Te notificaremos sobre nuevos eventos.');
    setEmail('');
  };

  return (
    <div className={styles.notificationSignup}>
      <div className={styles.notificationContent}>
        <NotificationIcon />
        <div>
          <h3>No te pierdas ningún evento</h3>
          <p>Recibe notificaciones sobre próximos workshops y masterclasses</p>
        </div>
      </div>
      <form className={styles.notificationForm} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">
          Suscribirse
        </button>
      </form>
    </div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | EventStatus>('all');

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const completedEvents = events.filter(event => event.status === 'completed');
  const featuredEvent = events.find(event => event.featured);

  const filteredEvents = filter === 'all' ? events : events.filter(event => event.status === filter);

  const getEventTypeLabel = (type: EventType) => {
    const labels = {
      workshop: 'Workshop',
      course: 'Curso',
      masterclass: 'Masterclass',
      festival: 'Festival'
    };
    return labels[type];
  };

  const getStatusColor = (status: EventStatus) => {
    const colors = {
      upcoming: styles.statusUpcoming,
      completed: styles.statusCompleted,
      cancelled: styles.statusCancelled
    };
    return colors[status];
  };

  return (
    <div className={styles.eventsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.pageTitle}>Eventos Klandestino</h1>
          <p className={styles.pageSubtitle}>Workshops, Cursos y Experiencias Únicas</p>
          <p className={styles.heroDescription}>
            Únete a la comunidad de barberos más activa de Mallorca. Eventos presenciales, 
            workshops internacionales y oportunidades únicas de networking.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{upcomingEvents.length}</span>
              <span className={styles.statLabel}>Próximos Eventos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{completedEvents.length}</span>
              <span className={styles.statLabel}>Eventos Realizados</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Participantes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className={styles.featuredEvent}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredBadge}>
              <StarIcon />
              <span>Evento Destacado</span>
            </div>
            <h2 className={styles.featuredTitle}>{featuredEvent.title}</h2>
            <p className={styles.featuredDescription}>{featuredEvent.description}</p>
            <div className={styles.featuredDetails}>
              <div className={styles.featuredDetail}>
                <CalendarIcon />
                <span>{featuredEvent.date}</span>
              </div>
              <div className={styles.featuredDetail}>
                <LocationIcon />
                <span>{featuredEvent.location}</span>
              </div>
              <div className={styles.featuredDetail}>
                <UsersIcon />
                <span>{featuredEvent.currentAttendees}/{featuredEvent.maxAttendees} inscritos</span>
              </div>
            </div>
            {featuredEvent.highlights && (
              <div className={styles.featuredHighlights}>
                <h4>Incluye:</h4>
                <ul>
                  {featuredEvent.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.featuredFooter}>
              <span className={styles.featuredPrice}>{featuredEvent.price}</span>
              <button 
                className="btn-primary"
                onClick={() => setSelectedEvent(featuredEvent.id)}
              >
                Inscribirse Ahora
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Notification Signup */}
      <NotificationSignup />

      {/* Events Filter */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Todos los Eventos</h2>
          <div className={styles.filterButtons}>
            <button 
              className={filter === 'all' ? styles.filterActive : styles.filterButton}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button 
              className={filter === 'upcoming' ? styles.filterActive : styles.filterButton}
              onClick={() => setFilter('upcoming')}
            >
              Próximos
            </button>
            <button 
              className={filter === 'completed' ? styles.filterActive : styles.filterButton}
              onClick={() => setFilter('completed')}
            >
              Realizados
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map(event => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventHeader}>
                <div className={styles.eventType}>
                  {getEventTypeLabel(event.type)}
                </div>
                <div className={`${styles.eventStatus} ${getStatusColor(event.status)}`}>
                  {event.status === 'upcoming' ? 'Próximo' : 
                   event.status === 'completed' ? 'Realizado' : 'Cancelado'}
                </div>
              </div>
              
              <div className={styles.eventImage}>
                <div className={styles.placeholderImage}>
                  {event.country && (
                    <div className={styles.countryBadge}>{event.country}</div>
                  )}
                </div>
              </div>

              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
                
                <div className={styles.eventDetails}>
                  <div className={styles.eventDetail}>
                    <CalendarIcon />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className={styles.eventDetail}>
                      <ClockIcon />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className={styles.eventDetail}>
                    <LocationIcon />
                    <span>{event.location}</span>
                  </div>
                  <div className={styles.eventDetail}>
                    <UsersIcon />
                    <span>{event.instructor}</span>
                  </div>
                </div>

                {event.maxAttendees && (
                  <div className={styles.attendeesBar}>
                    <div className={styles.attendeesProgress}>
                      <div 
                        className={styles.attendeesProgressFill}
                        style={{ 
                          width: `${((event.currentAttendees || 0) / event.maxAttendees) * 100}%` 
                        }}
                      />
                    </div>
                    <span className={styles.attendeesText}>
                      {event.currentAttendees}/{event.maxAttendees} plazas
                    </span>
                  </div>
                )}

                {event.highlights && (
                  <div className={styles.eventHighlights}>
                    <div className={styles.highlightTags}>
                      {event.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className={styles.highlightTag}>
                          {highlight}
                        </span>
                      ))}
                      {event.highlights.length > 2 && (
                        <span className={styles.highlightTag}>
                          +{event.highlights.length - 2} más
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className={styles.eventFooter}>
                  {event.price && (
                    <span className={styles.eventPrice}>{event.price}</span>
                  )}
                  {event.status === 'upcoming' ? (
                    <button 
                      className="btn-primary"
                      onClick={() => setSelectedEvent(event.id)}
                    >
                      Inscribirse
                    </button>
                  ) : (
                    <button className={styles.completedButton} disabled>
                      {event.status === 'completed' ? 'Finalizado' : 'Cancelado'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>¿Tienes alguna pregunta?</h2>
        <p>Contacta con nosotros para más información sobre nuestros eventos</p>
        <div className={styles.ctaButtons}>
          <a 
            href="https://www.instagram.com/varguexx_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Instagram
          </a>
          <a 
            href="tel:+34660875027"
            className={`btn-primary ${styles.secondaryButton}`}
          >
            Llamar
          </a>
          <a 
            href="/contact"
            className={`btn-primary ${styles.secondaryButton}`}
          >
            Contacto
          </a>
        </div>
      </section>

      {/* Registration Modal */}
      {selectedEvent && (
        <EventRegistrationForm 
          eventId={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default EventsPage;