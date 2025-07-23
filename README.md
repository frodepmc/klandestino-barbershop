# Klandestino BarBerShop - Versión Demo

![Klandestino Logo](public/logo.jpg)

## 🚀 Demo para Cliente

Esta es una versión de demostración del sitio web de Klandestino BarBerShop, optimizada para GitHub Pages. Incluye todas las funcionalidades públicas sin dependencias de backend.

## ✨ Funcionalidades Incluidas

### Sitio Web Completo
- 🏠 **Página Principal** con credenciales Booksy y testimoniales
- 🖼️ **Galería** con videos de trabajos
- 💼 **Servicios** con precios reales
- 🎓 **Educación** - Klandestino Academy
- 📅 **Eventos** - Calendario de workshops
- 👤 **Biografía** - Sobre Alejandro Vargas
- 📞 **Contacto** - Información completa

### Características Técnicas
- ✅ **100% Responsive** - Mobile-first design
- ✅ **Optimizado para SEO** - Meta tags y estructura semántica
- ✅ **Formularios Demo** - Con simulación funcional
- ✅ **Navegación Completa** - Desktop y mobile
- ✅ **Videos Integrados** - Galería de trabajos

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js (v18 o superior)
- npm

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd GitHubVargas
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Build para producción:**
   ```bash
   npm run build
   ```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 📋 Deploy a GitHub Pages

### Configuración Automática

El proyecto está pre-configurado para GitHub Pages:

1. **next.config.mjs** configurado para exportación estática
2. **package.json** con scripts optimizados
3. **Imágenes** configuradas para modo unoptimized

### Pasos para Deploy

1. **Push a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages
   - Source: GitHub Actions
   - El build se genera automáticamente

3. **URL Final:**
   ```
   https://[usuario].github.io/[repositorio]/
   ```

## 🎨 Estructura del Proyecto

```
GitHubVargas/
├── src/app/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.tsx      # Navegación principal
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── BooksyCredentials.tsx  # Credenciales Booksy
│   │   └── BooksyTestimonials.tsx # Testimoniales
│   ├── about/alejandro/     # Biografía Alejandro
│   ├── education/          # Sección educativa
│   ├── events/            # Calendario eventos
│   ├── gallery/           # Galería de trabajos
│   ├── services/          # Servicios y precios
│   ├── contact/           # Información contacto
│   └── page.tsx           # Página principal
├── public/                # Archivos estáticos
│   ├── logo.jpg          # Logo principal
│   └── video*.mp4        # Videos de trabajos
└── README.md             # Este archivo
```

## 📊 Datos Integrados del OSINT

### Métricas Reales
- ⭐ **4.9/5 estrellas** en Booksy (1,057 reseñas)
- 📱 **16k seguidores** Instagram (@varguexx_)
- 🎵 **1,150 seguidores** TikTok (@varguexxbarber)
- 🏆 **Ganador FAST FADE MBB 2023**

### Colaboraciones Internacionales
- 🇦🇷 **Workshop Braian Altamirano** (Argentina)
- 🇺🇸 **Colaboración California** (The Luxx Barbershop)
- 🎙️ **Podcast El Sótano #15** (KLND)

## 🎯 Diferencias con Versión Completa

### ❌ No Incluido (Solo Demo)
- Portal de empleados
- Sistema de fichaje
- Base de datos Prisma
- API Routes backend
- Autenticación real

### ✅ Funcional para Demo
- Todas las páginas públicas
- Formularios con simulación
- Navegación completa
- Contenido dinámico
- Design responsive

## 📱 Responsive Design

- **Mobile**: < 768px - Menú hamburguesa
- **Tablet**: 768px - 1024px - Layout adaptado
- **Desktop**: > 1024px - Experiencia completa

## 🎨 Paleta de Colores

- **Primary**: `#FFD700` (Dorado)
- **Background**: `#1a1a1a` (Negro mate)
- **Text**: `#f5f5f5` (Blanco suave)
- **Secondary**: `#ccc` (Gris claro)

## 📞 Contacto Demo

Los formularios están configurados con alertas de demostración. En producción se integrarían con:
- EmailJS para envío de emails
- Formspree para manejo de formularios
- Netlify Forms para contacto

---

**🎉 Versión Demo - Klandestino BarBerShop 2025**