const translations = {
  en: {
    title: "Luis Fredy Huachaca Vargas — Curriculum Vitae",
    print: "Print / Save PDF",
    photoAlt: "Portrait of Luis Fredy Huachaca Vargas",
    kicker: "Curriculum Vitae",
    role: "Co-founder & CTO, Moontecx · Cloud infrastructure & fintech",
    location: "Arequipa, Peru",
    summary:
      "Co-founder and CTO of Moontecx and computer scientist (UCSP). I design and operate cloud infrastructure for fintech: at Newroad Global Investing I put Wealth Navigator into production on a Hetzner VPS — Tailscale, Cloudflare Tunnel and blue/green deploys — <span class=\"ph\">[X advisors / Y clients]</span>, and at ESTIA, on-site in France, I built EnergyScore, a Kubernetes scheduler measured on TeaStore, µBench and DeathStarBench <span class=\"ph\">[X% less energy than the default scheduler]</span>. I want a management master's in France to connect that infrastructure work with strategy and commercial development.",
    experience: "Experience",
    "mx.title": "Co-founder & CTO",
    "mx.org": "Moontecx",
    "mx.when": "Oct 2026 — Present",
    "mx.ctx": "Technology startup · Arequipa, Peru",
    "mx.b1":
      "Set the product and cloud stack for <span class=\"ph\">[product]</span> and stood up its infrastructure; shipped <span class=\"ph\">[MVP / release]</span> in <span class=\"ph\">[n months]</span>, now at <span class=\"ph\">[n clients / users]</span>.",
    "mx.b2":
      "Defined the profile and interviewed candidates for B2B business-development roles; <span class=\"ph\">[n hires; result: n meetings / first clients]</span>.",
    "nr.title": "Junior software engineer & data analyst",
    "nr.org": "Newroad Global Investing",
    "nr.when": "Dec 2025 — Oct 2026",
    "nr.ctx": "Wealth-management firm (markets and fintech) · Peru",
    "nr.b1":
      "Put Wealth Navigator into production on a Hetzner VPS: Tailscale-only admin access, Cloudflare Tunnel, and blue/green deploys. <span class=\"ph\">[n deploys without downtime; X €/month; n users or advisors]</span>",
    "nr.b2":
      "Automated trading-operations work and checked data quality before client use, including ETL into client reporting. <span class=\"ph\">[n flows: sources → destination; from X days to Y hours]</span>",
    "nr.b3":
      "Helped organize an investing networking event with Inviu in Arequipa — <span class=\"ph\">[n attendees, n speakers]</span>.",
    "sf.title": "Co-founder",
    "sf.org": "SunkuFarma S.A.C.",
    "sf.when": "Jan 2024 — Present",
    "sf.ctx": "Pharmacy startup, two stores · Arequipa",
    "sf.b1":
      "Built the software both stores use day to day — inventory, SUNAT electronic invoicing and the records for tax close — so operations do not depend on an outside vendor. <span class=\"ph\">[n receipts / month]</span>",
    "sf.b2":
      "With two partners, also ran stock, staff, tax filings and the public shop. <span class=\"ph\">[n people on the shop floor]</span>",
    "estia.title": "Cloud systems researcher",
    "estia.org": "ESTIA Institute of Technology",
    "estia.when": "Aug 2023 — Jan 2025",
    "estia.ctx": "Engineering school · on-site in Bidart, France · green computing",
    "estia.b1":
      "Built <strong>EnergyScore</strong>, a Kubernetes scheduler plugin that places each pod on the lower-joule node (CPU, RAM, network and disk, via EcoFloc) instead of the default scheduler.",
    "estia.b2":
      "On TeaStore, energy sat in the web UI and persistence (storage on the image service); on µBench, RAM outweighed CPU (PowerAPI, Scaphandre). <span class=\"ph\">[X% vs the default scheduler under load Y]</span>",
    "gipe.title": "GIPE project",
    "gipe.org": "DAAD · UNDP Accelerator Labs",
    "gipe.when": "Jan 2023 — Dec 2023",
    "gipe.ctx": "Universities in Germany, Namibia, Indonesia and Peru",
    "gipe.b1":
      "With students from four universities, wrote software-requirement proposals for UNDP Accelerator Labs programmes and presented them to the vice-rector of UCSP. <span class=\"ph\">[deliverable; n people on the team]</span>",
    projects: "Selected projects",
    "sam.title": "SAM — Savings Asset Manager",
    "sam.org": "Co-built with Manuel Cáceres",
    "sam.b1":
      "Budgeting and investing app for developers, connected to the brokers Wallbit and IBKR. <span class=\"ph\">[status: beta / production; n users]</span>",
    "wa.title": "WhatsApp finance",
    "wa.b1":
      "Multi-user expenses, income and loans over WhatsApp: an LLM (OpenRouter) turns chat into records (Kapso, Cloud Run, Supabase, React dashboard). <span class=\"ph\">[n users]</span>",
    education: "Education",
    "edu.bs": "B.Sc. Computer Science",
    "edu.ucsp": "Arequipa, Peru · 2020 — 2025",
    "edu.degree": "5-year degree, 219 credits.",
    "edu.courses":
      "Courses: tech-venture creation I (17.8/20) and II, Leadership (15.6/20), public speaking.",
    "edu.thesis":
      "Thesis: energy-aware scheduling for microservice clusters, using measured joules per request rather than free CPU/RAM.",
    "edu.estia": "Exchange · Computer Engineering",
    "edu.estiaWhen": "On-site · Bidart, France · Aug — Dec 2024",
    "edu.amw": "AMW Data Management workshop",
    "edu.chile": "University of Chile",
    "edu.amwWhen": "Santiago · May — Jun 2023",
    skills: "Technical skills",
    "sk.cloud": "Cloud & infra",
    "sk.data": "Data & energy",
    "sk.dev": "Development",
    "sk.biz": "Business",
    "sk.bizDd": "Markets and trading, financial data",
    "sk.sec": "Security",
    "sk.secDd": "Cybersecurity (in progress)",
    spoken: "Languages",
    "sp.es": "Spanish — native",
    "sp.en": "English — C1",
    "sp.fr": "French — B2 (DELF B2, November 2026 session)",
    "sp.de": "German — A2",
    also: "Also",
    alsoText:
      "Finalist, TechSuyo 2023 AI hackathon (GPT-4), organized by Google Developer Group and Silicon Valley tech group <span class=\"ph\">[of X teams]</span>.",
  },
  es: {
    title: "Luis Fredy Huachaca Vargas — Currículum Vitae",
    print: "Imprimir / Guardar PDF",
    photoAlt: "Retrato de Luis Fredy Huachaca Vargas",
    kicker: "Currículum Vitae",
    role: "Cofundador y CTO, Moontecx · Infraestructura cloud y fintech",
    location: "Arequipa, Perú",
    summary:
      "Cofundador y CTO de Moontecx e ingeniero informático (UCSP). Diseño y opero infraestructura cloud para fintech: en Newroad Global Investing puse Wealth Navigator en producción sobre un VPS de Hetzner — Tailscale, Cloudflare Tunnel y despliegues blue/green — <span class=\"ph\">[X asesores / Y clientes]</span>, y en ESTIA, presencial en Francia, construí EnergyScore, un scheduler de Kubernetes medido en TeaStore, µBench y DeathStarBench <span class=\"ph\">[X% menos energía que el scheduler por defecto]</span>. Busco un máster de management en Francia para unir ese trabajo de infraestructura con la estrategia y el desarrollo comercial.",
    experience: "Experiencia",
    "mx.title": "Cofundador y CTO",
    "mx.org": "Moontecx",
    "mx.when": "oct. 2026 — Actualidad",
    "mx.ctx": "Start-up tecnológica · Arequipa, Perú",
    "mx.b1":
      "Definí el producto y el stack cloud de <span class=\"ph\">[producto]</span> y monté su infraestructura; lancé <span class=\"ph\">[MVP / versión]</span> en <span class=\"ph\">[n meses]</span>, hoy con <span class=\"ph\">[n clientes / usuarios]</span>.",
    "mx.b2":
      "Definí el perfil y entrevisté candidatos de desarrollo comercial B2B; <span class=\"ph\">[n contrataciones; resultado: n reuniones / primeros clientes]</span>.",
    "nr.title": "Ingeniero de software junior y analista de datos",
    "nr.org": "Newroad Global Investing",
    "nr.when": "dic. 2025 — oct. 2026",
    "nr.ctx": "Sociedad de gestión de patrimonio (mercados y fintech) · Perú",
    "nr.b1":
      "Puse Wealth Navigator en producción en un VPS de Hetzner: administración solo por Tailscale, Cloudflare Tunnel y despliegues blue/green. <span class=\"ph\">[n despliegues sin corte; X €/mes; n usuarios o asesores]</span>",
    "nr.b2":
      "Automaticé el trabajo de la operación de trading y revisé la calidad del dato antes de usarlo con clientes, incluido el ETL al reporting. <span class=\"ph\">[n flujos: fuentes → destino; de X días a Y horas]</span>",
    "nr.b3":
      "Ayudé a organizar un evento de networking sobre inversión con Inviu en Arequipa — <span class=\"ph\">[n asistentes, n ponentes]</span>.",
    "sf.title": "Cofundador",
    "sf.org": "SunkuFarma S.A.C.",
    "sf.when": "ene. 2024 — Actualidad",
    "sf.ctx": "Start-up de farmacias, dos locales · Arequipa",
    "sf.b1":
      "Construí el software que las dos tiendas usan a diario — inventario, facturación electrónica SUNAT y los registros del cierre tributario — para no depender de un proveedor externo. <span class=\"ph\">[n comprobantes / mes]</span>",
    "sf.b2":
      "Con dos socios, también llevé el stock, el personal, las declaraciones de impuestos y la tienda pública. <span class=\"ph\">[n personas en tienda]</span>",
    "estia.title": "Investigador de sistemas cloud",
    "estia.org": "ESTIA Institute of Technology",
    "estia.when": "ago. 2023 — ene. 2025",
    "estia.ctx": "Escuela de ingeniería · presencial en Bidart, Francia · informática verde",
    "estia.b1":
      "Construí <strong>EnergyScore</strong>, un plugin de scheduler de Kubernetes que coloca cada pod en el nodo de menos joules (CPU, RAM, red y disco, con EcoFloc) en lugar del scheduler por defecto.",
    "estia.b2":
      "En TeaStore la energía se concentró en la web UI y en persistencia (almacenamiento en el servicio de imágenes); en µBench, la RAM pesó más que la CPU (PowerAPI, Scaphandre). <span class=\"ph\">[X% frente al scheduler por defecto bajo carga Y]</span>",
    "gipe.title": "Proyecto GIPE",
    "gipe.org": "DAAD · UNDP Accelerator Labs",
    "gipe.when": "ene. 2023 — dic. 2023",
    "gipe.ctx": "Universidades de Alemania, Namibia, Indonesia y Perú",
    "gipe.b1":
      "Con estudiantes de cuatro universidades, escribí propuestas de requerimientos de software para programas de UNDP Accelerator Labs y las presenté al vicerrector de la UCSP. <span class=\"ph\">[entregable; n integrantes]</span>",
    projects: "Proyectos",
    "sam.title": "SAM — Savings Asset Manager",
    "sam.org": "Co-creado con Manuel Cáceres",
    "sam.b1":
      "Aplicación para que desarrolladores presupuesten e inviertan, conectada a los brókers Wallbit e IBKR. <span class=\"ph\">[estado: beta / producción; n usuarios]</span>",
    "wa.title": "Finanzas por WhatsApp",
    "wa.b1":
      "Gastos, ingresos y préstamos multi-usuario por WhatsApp: un LLM (OpenRouter) convierte el chat en registros (Kapso, Cloud Run, Supabase, panel React). <span class=\"ph\">[n usuarios]</span>",
    education: "Educación",
    "edu.bs": "Bachiller en Ciencia de la Computación",
    "edu.ucsp": "Arequipa, Perú · 2020 — 2025",
    "edu.degree": "Grado de 5 años, 219 créditos.",
    "edu.courses":
      "Cursos: Formación de empresas tecnológicas I (17,8/20) y II, Liderazgo (15,6/20), Oratoria.",
    "edu.thesis":
      "Tesis: scheduling consciente de la energía en clusters de microservicios, con joules por request medidos en lugar de CPU/RAM libre.",
    "edu.estia": "Intercambio · Ingeniería informática",
    "edu.estiaWhen": "Presencial · Bidart, Francia · ago. — dic. 2024",
    "edu.amw": "Taller AMW de gestión de datos",
    "edu.chile": "Universidad de Chile",
    "edu.amwWhen": "Santiago · may. — jun. 2023",
    skills: "Competencias técnicas",
    "sk.cloud": "Cloud e infra",
    "sk.data": "Datos y energía",
    "sk.dev": "Desarrollo",
    "sk.biz": "Negocio",
    "sk.bizDd": "Mercados y trading, datos financieros",
    "sk.sec": "Seguridad",
    "sk.secDd": "Ciberseguridad (en curso)",
    spoken: "Idiomas",
    "sp.es": "Español — nativo",
    "sp.en": "Inglés — C1",
    "sp.fr": "Francés — B2 (DELF B2, sesión de noviembre de 2026)",
    "sp.de": "Alemán — A2",
    also: "También",
    alsoText:
      "Finalista del hackathon de IA TechSuyo 2023 (GPT-4), organizado por Google Developer Group y Silicon Valley tech group <span class=\"ph\">[de X equipos]</span>.",
  },
};

const STORAGE_KEY = "cv-lang";

function applyLang(lang) {
  const pack = translations[lang] || translations.en;
  document.documentElement.lang = lang === "es" ? "es" : "en";
  document.title = pack.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = pack[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = pack[el.dataset.i18nHtml];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = pack[el.dataset.i18nAlt];
    if (value != null) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore private mode */
  }
}

function currentLang() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  if (fromQuery === "es" || fromQuery === "en") return fromQuery;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return document.documentElement.lang === "es" ? "es" : "en";
}

document.querySelectorAll("[data-set-lang]").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.setLang));
});

document.querySelector("[data-print]")?.addEventListener("click", () => {
  applyLang(currentLang());
  window.print();
});

window.addEventListener("beforeprint", () => applyLang(currentLang()));

applyLang(currentLang());
