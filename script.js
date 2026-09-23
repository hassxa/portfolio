const translations = {
  es: {
    meta: {
      title: 'Hassan Chafi Xavier · Data Engineering & Cloud',
      description: 'Portfolio profesional de Hassan Chafi Xavier centrado en Data Engineering, Cloud y AWS.'
    },
    nav: { projects: 'Proyectos', contact: 'Contacto', cv: 'CV' },
    hero: {
      title: 'Ingeniería de datos <span class="gradient-text">& cloud</span>',
      description: 'Trabajo en ingeniería de datos con Python, PySpark y SQL, y en el diseño de soluciones cloud sobre AWS orientadas a procesamiento, automatización y escalabilidad.',
      role: 'Data Engineer · Cloud Engineering'
    },
    buttons: { projects: 'Ver proyectos', contact: 'Contacto', cv: 'Descargar CV' },
    about: {
      badge: 'Perfil',
      title: 'Data & Cloud',
      summary: 'Ingeniería de datos y cloud aplicada a soluciones robustas, automatizables y mantenibles.'
    },
    projects: {
      badge: 'Proyectos',
      title: 'Proyectos',
      subtitle: 'Arquitecturas y soluciones que desarrollo como proyectos personales.',
      status: 'En producción',
      description: 'Web estática desplegada en AWS con origen privado en Amazon S3 y distribución mediante CloudFront.',
      architecture: 'Ver arquitectura',
      live: 'Visitar web',
      modalDescription: 'Route 53 resuelve el dominio, CloudFront entrega el contenido por HTTPS y accede mediante OAC a un bucket privado de S3. El certificado TLS se gestiona con AWS Certificate Manager.'
    },
    contact: {
      badge: 'Contacto',
      title: 'Contacto',
      subtitle: 'Puedes encontrarme por email, LinkedIn o GitHub.',
      emailAction: 'Enviar email',
      linkedinText: 'Perfil profesional',
      linkedinAction: 'Ver perfil',
      githubAction: 'Ver GitHub'
    },
    footer: {
      role: 'Data Engineer · Cloud Engineering',
      rights: 'Todos los derechos reservados.',
      top: 'Volver arriba'
    }
  },
  en: {
    meta: {
      title: 'Hassan Chafi Xavier · Data Engineering & Cloud',
      description: 'Professional portfolio of Hassan Chafi Xavier focused on Data Engineering, Cloud and AWS.'
    },
    nav: { projects: 'Projects', contact: 'Contact', cv: 'CV' },
    hero: {
      title: 'Data Engineering <span class="gradient-text">& Cloud</span>',
      description: 'I work on data engineering with Python, PySpark and SQL, and on cloud solutions built on AWS with a focus on processing, automation and scalability.',
      role: 'Data Engineer · Cloud Engineering'
    },
    buttons: { projects: 'View projects', contact: 'Contact', cv: 'Download CV' },
    about: {
      badge: 'Profile',
      title: 'Data & Cloud',
      summary: 'Data engineering and cloud applied to robust, automatable and maintainable solutions.'
    },
    projects: {
      badge: 'Projects',
      title: 'Projects',
      subtitle: 'Architectures and solutions I build as personal projects.',
      status: 'In production',
      description: 'Static website deployed on AWS with a private Amazon S3 origin and content delivery through CloudFront.',
      architecture: 'View architecture',
      live: 'Visit website',
      modalDescription: 'Route 53 resolves the domain, CloudFront serves the content over HTTPS and accesses a private S3 bucket through OAC. The TLS certificate is managed with AWS Certificate Manager.'
    },
    contact: {
      badge: 'Contact',
      title: 'Contact',
      subtitle: 'You can reach me by email, LinkedIn or GitHub.',
      emailAction: 'Send email',
      linkedinText: 'Professional profile',
      linkedinAction: 'View profile',
      githubAction: 'View GitHub'
    },
    footer: {
      role: 'Data Engineer · Cloud Engineering',
      rights: 'All rights reserved.',
      top: 'Back to top'
    }
  },
  fr: {
    meta: {
      title: 'Hassan Chafi Xavier · Data Engineering & Cloud',
      description: 'Portfolio professionnel de Hassan Chafi Xavier centré sur le Data Engineering, le Cloud et AWS.'
    },
    nav: { projects: 'Projets', contact: 'Contact', cv: 'CV' },
    hero: {
      title: 'Data Engineering <span class="gradient-text">& Cloud</span>',
      description: 'Je travaille sur des projets de data engineering avec Python, PySpark et SQL, ainsi que sur des solutions cloud AWS orientées traitement, automatisation et scalabilité.',
      role: 'Data Engineer · Cloud Engineering'
    },
    buttons: { projects: 'Voir les projets', contact: 'Contact', cv: 'Télécharger le CV' },
    about: {
      badge: 'Profil',
      title: 'Data & Cloud',
      summary: 'Data engineering et cloud appliqués à des solutions robustes, automatisables et maintenables.'
    },
    projects: {
      badge: 'Projets',
      title: 'Projets',
      subtitle: 'Architectures et solutions que je développe dans le cadre de projets personnels.',
      status: 'En production',
      description: 'Site statique déployé sur AWS avec une origine Amazon S3 privée et une distribution du contenu via CloudFront.',
      architecture: 'Voir l’architecture',
      live: 'Visiter le site',
      modalDescription: 'Route 53 assure la résolution du domaine, CloudFront distribue le contenu en HTTPS et accède via OAC à un bucket S3 privé. Le certificat TLS est géré avec AWS Certificate Manager.'
    },
    contact: {
      badge: 'Contact',
      title: 'Contact',
      subtitle: 'Vous pouvez me contacter par e-mail, LinkedIn ou GitHub.',
      emailAction: 'Envoyer un e-mail',
      linkedinText: 'Profil professionnel',
      linkedinAction: 'Voir le profil',
      githubAction: 'Voir GitHub'
    },
    footer: {
      role: 'Data Engineer · Cloud Engineering',
      rights: 'Tous droits réservés.',
      top: 'Retour en haut'
    }
  }
};

let currentLanguage = 'es';

function getTranslation(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], translations[currentLanguage]);
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  document.documentElement.lang = lang;

  try {
    localStorage.setItem('portfolioLanguage', lang);
  } catch (_) {}

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getTranslation(element.dataset.i18nHtml);
    if (typeof value === 'string') element.innerHTML = value;
  });

  document.title = translations[lang].meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', translations[lang].meta.description);

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initializeParticles() {
  const container = document.getElementById('particles');
  if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 36; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = [
      'position:absolute',
      `width:${Math.random() * 3 + 2}px`,
      `height:${Math.random() * 3 + 2}px`,
      `background:rgba(255,255,255,${Math.random() * 0.24 + 0.08})`,
      'border-radius:50%',
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `animation:float ${Math.random() * 10 + 6}s ease-in-out infinite`,
      `animation-delay:${Math.random() * 5}s`
    ].join(';');
    fragment.appendChild(particle);
  }

  container.appendChild(fragment);
}

function initializeAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.project-card, .contact-card, .profile-summary-row').forEach((element) => observer.observe(element));
}

function initializeArchitectureModal() {
  const modal = document.getElementById('architectureModal');
  const openButton = document.getElementById('openArchitecture');
  const closeButton = modal?.querySelector('.architecture-close');

  if (!modal || !openButton || !closeButton) return;

  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  };

  const close = () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocused?.focus?.();
  };

  openButton.addEventListener('click', open);
  closeButton.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') close();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let savedLanguage = 'es';
  try {
    savedLanguage = localStorage.getItem('portfolioLanguage') || 'es';
  } catch (_) {}

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  setLanguage(translations[savedLanguage] ? savedLanguage : 'es');
  initializeParticles();
  initializeAnimations();
  initializeArchitectureModal();
});
