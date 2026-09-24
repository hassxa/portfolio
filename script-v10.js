const translations = {
  es: {
    meta: {
      title: 'Hassan Chafi Xavier · Data & Cloud',
      description: 'Portfolio profesional de Hassan Chafi Xavier, Data Engineer y Cloud Engineer, centrado en datos a gran escala, AWS, automatización y pipelines.'
    },
    nav: { projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      title: 'Data Engineer <span class="gradient-text">& Cloud Engineer</span>',
      description: 'Diseño y desarrollo soluciones de datos a gran escala y arquitecturas cloud en AWS, con foco en automatización, escalabilidad y pipelines mantenibles.',
      role: 'Data Engineer · Cloud Engineer'
    },
    buttons: { projects: 'Ver proyectos', contact: 'Contacto', cv: 'Descargar CV' },
    about: {
      badge: 'Enfoque',
      title: 'Datos a escala, cloud y automatización',
      intro: 'Combino ingeniería de datos y cloud para diseñar soluciones escalables, automatizadas y mantenibles, desde el procesamiento de datos hasta su despliegue en AWS.',
      dataTitle: 'Datos a escala',
      dataText: 'Procesamiento distribuido y pipelines pensados para mover, transformar y validar grandes volúmenes de datos de forma fiable.',
      cloudTitle: 'Arquitectura cloud',
      cloudText: 'Arquitecturas AWS ajustadas al caso de uso, con atención a escalabilidad, disponibilidad y simplicidad operativa.',
      automationTitle: 'Automatización',
      automationText: 'Flujos reproducibles que reducen tareas manuales y facilitan la operación y evolución de los sistemas.'
    },
    projects: {
      badge: 'Proyectos',
      title: 'Proyectos',
      subtitle: 'Proyectos personales donde aplico decisiones de arquitectura, datos y cloud a problemas concretos.',
      status: 'En producción',
      description: 'Web estática desplegada en AWS con origen privado en Amazon S3 y distribución mediante CloudFront.',
      architecture: 'Ver arquitectura',
      live: 'Visitar web',
      modalDescription: 'Route 53 resuelve el dominio, CloudFront entrega el contenido por HTTPS y accede mediante OAC a un bucket privado de S3. El certificado TLS se gestiona con AWS Certificate Manager.',
      futureStatus: 'En desarrollo',
      futureDescription: 'API contenerizada para subir, optimizar y almacenar imágenes en AWS. El proyecto está orientado a construir un despliegue completo con contenedores gestionados sobre ECS y Fargate.',
      futureArchitecture: 'Arquitectura prevista'
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
      role: 'Data Engineer · Cloud Engineer',
      rights: 'Todos los derechos reservados.',
      top: 'Volver arriba'
    }
  },
  en: {
    meta: {
      title: 'Hassan Chafi Xavier · Data & Cloud',
      description: 'Professional portfolio of Hassan Chafi Xavier, Data Engineer and Cloud Engineer, focused on large-scale data, AWS, automation and maintainable pipelines.'
    },
    nav: { projects: 'Projects', contact: 'Contact' },
    hero: {
      title: 'Data Engineer <span class="gradient-text">& Cloud Engineer</span>',
      description: 'I design and build large-scale data solutions and cloud architectures on AWS, with a focus on automation, scalability and maintainable pipelines.',
      role: 'Data Engineer · Cloud Engineer'
    },
    buttons: { projects: 'View projects', contact: 'Contact', cv: 'Download CV' },
    about: {
      badge: 'Focus',
      title: 'Large-scale data, cloud and automation',
      intro: 'I combine data engineering and cloud to design scalable, automated and maintainable solutions, from data processing through deployment on AWS.',
      dataTitle: 'Large-scale data',
      dataText: 'Distributed processing and pipelines designed to move, transform and validate high-volume data reliably.',
      cloudTitle: 'Cloud architecture',
      cloudText: 'AWS architectures shaped around the actual use case, with attention to scalability, availability and operational simplicity.',
      automationTitle: 'Automation',
      automationText: 'Reproducible workflows that reduce manual work and make systems easier to operate and evolve.'
    },
    projects: {
      badge: 'Projects',
      title: 'Projects',
      subtitle: 'Personal projects where I apply architecture, data and cloud decisions to concrete problems.',
      status: 'In production',
      description: 'Static website deployed on AWS with a private Amazon S3 origin and content delivery through CloudFront.',
      architecture: 'View architecture',
      live: 'Visit website',
      modalDescription: 'Route 53 resolves the domain, CloudFront serves the content over HTTPS and accesses a private S3 bucket through OAC. The TLS certificate is managed with AWS Certificate Manager.',
      futureStatus: 'In development',
      futureDescription: 'Containerized API for uploading, optimizing and storing images on AWS. The project is focused on building an end-to-end deployment with containers managed through ECS and Fargate.',
      futureArchitecture: 'Planned architecture'
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
      role: 'Data Engineer · Cloud Engineer',
      rights: 'All rights reserved.',
      top: 'Back to top'
    }
  },
  fr: {
    meta: {
      title: 'Hassan Chafi Xavier · Data & Cloud',
      description: 'Portfolio professionnel de Hassan Chafi Xavier, Data Engineer et Cloud Engineer, centré sur les données à grande échelle, AWS, l’automatisation et des pipelines maintenables.'
    },
    nav: { projects: 'Projets', contact: 'Contact' },
    hero: {
      title: 'Data Engineer <span class="gradient-text">& Cloud Engineer</span>',
      description: 'Je conçois et développe des solutions data à grande échelle et des architectures cloud sur AWS, en mettant l’accent sur l’automatisation, la scalabilité et des pipelines maintenables.',
      role: 'Data Engineer · Cloud Engineer'
    },
    buttons: { projects: 'Voir les projets', contact: 'Contact', cv: 'Télécharger le CV' },
    about: {
      badge: 'Approche',
      title: 'Données à grande échelle, cloud et automatisation',
      intro: 'Je combine data engineering et cloud pour concevoir des solutions évolutives, automatisées et maintenables, du traitement des données jusqu’au déploiement sur AWS.',
      dataTitle: 'Données à grande échelle',
      dataText: 'Traitement distribué et pipelines conçus pour déplacer, transformer et valider de grands volumes de données de manière fiable.',
      cloudTitle: 'Architecture cloud',
      cloudText: 'Architectures AWS adaptées au besoin réel, avec une attention portée à la scalabilité, à la disponibilité et à la simplicité opérationnelle.',
      automationTitle: 'Automatisation',
      automationText: 'Flux reproductibles qui réduisent les tâches manuelles et rendent les systèmes plus simples à exploiter et à faire évoluer.'
    },
    projects: {
      badge: 'Projets',
      title: 'Projets',
      subtitle: 'Des projets personnels où j’applique des choix d’architecture, de data et de cloud à des besoins concrets.',
      status: 'En production',
      description: 'Site statique déployé sur AWS avec une origine Amazon S3 privée et une distribution du contenu via CloudFront.',
      architecture: 'Voir l’architecture',
      live: 'Visiter le site',
      modalDescription: 'Route 53 assure la résolution du domaine, CloudFront distribue le contenu en HTTPS et accède via OAC à un bucket S3 privé. Le certificat TLS est géré avec AWS Certificate Manager.',
      futureStatus: 'En développement',
      futureDescription: 'API conteneurisée permettant de téléverser, optimiser et stocker des images sur AWS. Le projet vise à construire un déploiement complet avec des conteneurs gérés via ECS et Fargate.',
      futureArchitecture: 'Architecture prévue'
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
      role: 'Data Engineer · Cloud Engineer',
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

  const cvFiles = {
    es: { href: './assets/CV-Hassan-Chafi-Xavier-ES.pdf', name: 'CV-Hassan-Chafi-Xavier-ES.pdf' },
    en: { href: './assets/CV-Hassan-Chafi-Xavier-EN.pdf', name: 'CV-Hassan-Chafi-Xavier-EN.pdf' },
    fr: { href: './assets/CV-Hassan-Chafi-Xavier-FR.pdf', name: 'CV-Hassan-Chafi-Xavier-FR.pdf' }
  };
  const cvButton = document.getElementById('cvButton');
  if (cvButton && cvFiles[lang]) {
    cvButton.href = cvFiles[lang].href;
    cvButton.setAttribute('download', cvFiles[lang].name);
  }
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

  document.querySelectorAll('.project-card, .contact-card, .focus-card').forEach((element) => observer.observe(element));
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
