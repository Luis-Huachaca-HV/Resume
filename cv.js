const translations = {
  en: {
    title: "Luis Huachaca Vargas — Curriculum Vitae",
    print: "Print / Save PDF",
    photoAlt: "Portrait of Luis Huachaca Vargas",
    kicker: "Curriculum Vitae",
    role: "Software Engineer · Financial Systems & Operations",
    location: "Arequipa, Peru",
    summary:
      "Software engineer for a wealth-management platform used by advisors who manage real client money — portfolios, structured products, onboarding and mobile. I start from the business problem, not the ticket: a figure that would mislead a client does not go to production. Computer Science (UCSP) with cloud-systems research at ESTIA in France.",
    experience: "Experience",
    "nr.title": "Software Engineer",
    "nr.org": "NewRoad · Wealth platform",
    "nr.when": "Dec 2025 — Present",
    "nr.b1":
      "Built the production wealth platform advisors use with clients: accounts, positions, Time-Weighted Return, P&L in the firm’s currency, and daily ETL from IBKR and Pershing into PostgreSQL/TimescaleDB.",
    "nr.b2":
      "Investment products: model-portfolio rebalancing, factsheets (live NAV and labelled backtests), and structured notes with coupon and autocall tracking.",
    "nr.b3":
      "Front office on the same system: CRM, KYC/NAF onboarding links, referrals and commissions, plus the advisor React UI.",
    "nr.b4":
      "Client channel: Flutter iOS/Android app, operational email, and session 2FA (FastAPI, Redis, Docker).",
    "sf.title": "Co-founder",
    "sf.org": "SunkuFarma · two pharmacies · Arequipa",
    "sf.when": "2024 — Present",
    "sf.b1":
      "Built the store software: inventory, SUNAT electronic invoicing, and the records used for tax close — so the shops do not depend on an outside vendor for daily operations.",
    "sf.b2":
      "Also ran the operation: stock, staff, tax filings and the public e-commerce site, alongside two partners.",
    "estia.title": "Cloud Systems Researcher",
    "estia.org": "ESTIA Institute of Technology · Bidart, France",
    "estia.when": "Aug 2023 — Jan 2025",
    "estia.b1":
      "Kubernetes usually places a pod where CPU and RAM fit. I added energy: <strong>EnergyScore</strong>, a scheduler plugin that prefers the node where the workload uses fewer joules (CPU, RAM, network, disk).",
    "estia.b2":
      "Reduced total cluster energy by <strong>22.45%</strong> versus the default scheduler on TeaStore, DeathStarBench and muBench, measured with PowerAPI, Scaphandre and RAPL.",
    "gipe.title": "Research Collaborator",
    "gipe.org": "DAAD GIPE · UNDP Accelerator Labs · Germany / remote",
    "gipe.b1":
      "Took on-site Wi-Fi measurements and built a coverage map so a vulnerable school could choose an internet provider (GIPE 2022).",
    "gipe.b2":
      "With UNDP Accelerator Labs (Peru, Namibia, Indonesia, Germany), analysed field problems and wrote software-requirement proposals for their programmes — four-university GIPE 2023 team.",
    "arb.title": "UX/UI Designer",
    "arb.org":
      "Arboriza 21 · donation website for a reforestation NGO (21 million trees by 2030)",
    "dunkin.title": "Customer Service",
    "dunkin.org": "Dunkin' · Boston, Massachusetts, USA · on-site",
    "dunkin.when": "Dec 2022 — Mar 2023",
    "dunkin.b1":
      "Worked in a high-volume store: trained new team members and owned daily cash counting and closing.",
    "dunkin.b2":
      "Served customers and worked with people from many nationalities, languages and backgrounds.",
    projects: "Selected projects",
    "wa.title": "WhatsApp finance",
    "wa.b1":
      "Multi-user money control over WhatsApp: expenses, income and loans. An LLM turns chat into structured records (Kapso, Cloud Run, Supabase, React dashboard).",
    education: "Education",
    "edu.bs": "B.Sc. Computer Science",
    "edu.ucsp": "Arequipa, Peru · 2020 — 2025",
    "edu.thesis":
      "Thesis: energy-aware scheduling for microservice clusters, using measured joules per request rather than leftover CPU/RAM.",
    "edu.estia": "Cloud Computing research stay",
    "edu.estiaWhen": "Bidart, France · 2024",
    "edu.amw": "AMW Data Management workshop",
    "edu.chile": "University of Chile",
    skills: "Technical skills",
    "sk.lang": "Languages",
    "sk.cloud": "Cloud & systems",
    "sk.energy": "Energy & data",
    spoken: "Languages",
    "sp.es": "Spanish — native",
    "sp.en": "English — advanced",
    "sp.fr": "French — advanced",
    "sp.de": "German — basic",
    also: "Also",
    alsoText:
      "Taught programming; university accreditation staff; TechSuyo 2023 AI hackathon (NTT DATA); CS conferences.",
  },
  es: {
    title: "Luis Huachaca Vargas — Currículum Vitae",
    print: "Imprimir / Guardar PDF",
    photoAlt: "Retrato de Luis Huachaca Vargas",
    kicker: "Currículum Vitae",
    role: "Ingeniero de software · Sistemas financieros y operaciones",
    location: "Arequipa, Perú",
    summary:
      "Ingeniero de software en una plataforma de gestión patrimonial usada por asesores que administran dinero real de clientes: portafolios, productos estructurados, onboarding y móvil. Empiezo por el problema de negocio, no por el ticket: un número que engañaría a un cliente no sale a producción. Ciencia de la Computación (UCSP) e investigación en sistemas cloud en ESTIA, Francia.",
    experience: "Experiencia",
    "nr.title": "Ingeniero de software",
    "nr.org": "NewRoad · Plataforma de wealth",
    "nr.when": "dic. 2025 — Actualidad",
    "nr.b1":
      "Construí la plataforma de wealth en producción que los asesores usan con clientes: cuentas, posiciones, Time-Weighted Return, P&L en la moneda de la firma, y ETL diario de IBKR y Pershing hacia PostgreSQL/TimescaleDB.",
    "nr.b2":
      "Productos de inversión: rebalanceo de portafolios modelo, factsheets (NAV en vivo y backtests etiquetados) y notas estructuradas con seguimiento de cupones y autocall.",
    "nr.b3":
      "Front office en el mismo sistema: CRM, enlaces de onboarding KYC/NAF, referidos y comisiones, más la UI React para asesores.",
    "nr.b4":
      "Canal cliente: app Flutter iOS/Android, correo operativo y 2FA de sesión (FastAPI, Redis, Docker).",
    "sf.title": "Cofundador",
    "sf.org": "SunkuFarma · dos farmacias · Arequipa",
    "sf.when": "2024 — Actualidad",
    "sf.b1":
      "Desarrollé el software de tienda: inventario, facturación electrónica SUNAT y los registros del cierre tributario, para que las tiendas no dependan de un proveedor externo en el día a día.",
    "sf.b2":
      "También operé el negocio: stock, personal, declaraciones de impuestos y el e-commerce público, junto a dos socios.",
    "estia.title": "Investigador de sistemas cloud",
    "estia.org": "ESTIA Institute of Technology · Bidart, Francia",
    "estia.when": "ago. 2023 — ene. 2025",
    "estia.b1":
      "Kubernetes suele colocar un pod donde cabe CPU y RAM. Yo sumé energía: <strong>EnergyScore</strong>, un plugin de scheduler que prefiere el nodo donde la carga usa menos joules (CPU, RAM, red, disco).",
    "estia.b2":
      "Reduje la energía total del cluster un <strong>22.45%</strong> frente al scheduler por defecto en TeaStore, DeathStarBench y muBench, medido con PowerAPI, Scaphandre y RAPL.",
    "gipe.title": "Colaborador de investigación",
    "gipe.org": "DAAD GIPE · UNDP Accelerator Labs · Alemania / remoto",
    "gipe.b1":
      "Tomé mediciones Wi-Fi en campo y armé un mapa de cobertura para que una escuela vulnerable eligiera proveedor de internet (GIPE 2022).",
    "gipe.b2":
      "Con UNDP Accelerator Labs (Perú, Namibia, Indonesia, Alemania) analicé problemas de campo y escribí propuestas de requerimientos de software para sus programas — equipo GIPE 2023 de cuatro universidades.",
    "arb.title": "Diseñador UX/UI",
    "arb.org":
      "Arboriza 21 · sitio de donaciones para una ONG de reforestación (21 millones de árboles al 2030)",
    "dunkin.title": "Atención al cliente",
    "dunkin.org": "Dunkin' · Boston, Massachusetts, EE. UU. · presencial",
    "dunkin.when": "dic. 2022 — mar. 2023",
    "dunkin.b1":
      "Trabajé en una tienda de alto volumen: formé a nuevos compañeros y fui responsable del conteo y cierre de caja diario.",
    "dunkin.b2":
      "Atendí clientes y trabajé con personas de distintas nacionalidades, idiomas y formas de pensar.",
    projects: "Proyectos",
    "wa.title": "Finanzas por WhatsApp",
    "wa.b1":
      "Control de dinero multi-usuario por WhatsApp: gastos, ingresos y préstamos. Un LLM convierte el chat en registros estructurados (Kapso, Cloud Run, Supabase, panel React).",
    education: "Educación",
    "edu.bs": "Bachillerato en Ciencia de la Computación",
    "edu.ucsp": "Arequipa, Perú · 2020 — 2025",
    "edu.thesis":
      "Tesis: scheduling consciente de energía en clusters de microservicios, usando joules por request medidos en lugar de CPU/RAM libre.",
    "edu.estia": "Estancia de investigación en Cloud Computing",
    "edu.estiaWhen": "Bidart, Francia · 2024",
    "edu.amw": "Taller AMW de gestión de datos",
    "edu.chile": "Universidad de Chile",
    skills: "Competencias técnicas",
    "sk.lang": "Lenguajes",
    "sk.cloud": "Cloud y sistemas",
    "sk.energy": "Energía y datos",
    spoken: "Idiomas",
    "sp.es": "Español — nativo",
    "sp.en": "Inglés — avanzado",
    "sp.fr": "Francés — avanzado",
    "sp.de": "Alemán — básico",
    also: "También",
    alsoText:
      "Enseñé programación; staff de acreditación universitaria; hackathon de IA TechSuyo 2023 (NTT DATA); congresos de CS.",
  },
};

const STORAGE_KEY = "cv-lang";

function applyLang(lang) {
  const pack = translations[lang] || translations.en;
  document.documentElement.lang = lang;
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
