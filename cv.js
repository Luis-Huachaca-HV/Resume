const translations = {
  en: {
    title: "Luis Fredy Huachaca Vargas — Curriculum Vitae",
    print: "Print / Save PDF",
    photoAlt: "Portrait of Luis Fredy Huachaca Vargas",
    kicker: "Curriculum Vitae",
    role: "Co-founder & CTO, Moontecx · Cloud infrastructure & fintech",
    location: "Arequipa, Peru",
    summary:
      "Co-founder and CTO of Moontecx and computer science bachelor at UCSP, Peru. I took Wealth Navigator to production at Newroad for a firm managing over US$20M — 12 advisors, 180+ clients, 96% of deployments without incidents — and at ESTIA (France, on-site) built EnergyScore, saving up to 30% energy versus the default Kubernetes scheduler (~6% consistently). I connect that infrastructure work with strategy and commercial development.",
    experience: "Experience",
    "mx.title": "Co-founder & CTO",
    "mx.org": "Moontecx",
    "mx.when": "Oct 2026 — Present",
    "mx.ctx": "Technology startup · Arequipa, Peru",
    "mx.b1":
      "Closed one deal for ~US$5.8K and raised investment at a ~US$87K valuation.",
    "nr.title": "Junior software engineer & data analyst",
    "nr.org": "Newroad Global Investing",
    "nr.when": "Dec 2025 — Oct 2026",
    "nr.ctx": "Wealth-management firm, over US$20M under management · Peru",
    "nr.b1":
      "Put Wealth Navigator into production on a Hetzner VPS (admin access only via Tailscale, Cloudflare Tunnel) using blue/green deploys: 96% of deployments without incidents. 12 advisors serve 180+ clients.",
    "nr.b2":
      "Cut a daily manual process from 2 hours to 5 minutes with ETL into client reporting, and checked data quality before the figures were used with clients.",
    "nr.b3":
      "Built logchecker, a Slack bot on the Hetzner Ubuntu host (~15 containers: Wealth Navigator blue/green backend, scheduler, export worker, Caddy, Cloudflare Tunnel, IBKR gateway, Postgres, Redis). It alerts on each new SSH or Tailscale login by key owner, diffs containers, timers, listening ports and outbound connections against a baseline, and posts a CPU chart every 30 minutes. One day showed about 6 blue/green deploys.",
    "sf.title": "Co-founder",
    "sf.org": "SunkuFarma S.A.C.",
    "sf.when": "Jan 2024 — Present",
    "sf.ctx": "Pharmacy, two stores · Arequipa",
    "sf.b1":
      "Built the software both stores use day to day — inventory, SUNAT electronic invoicing and tax-close records — so operations do not depend on an outside vendor.",
    "sf.b2":
      "With two partners, the pharmacies bring in ~US$2,000 a month and employ 5 people; I also ran stock, tax filings and the public shop.",
    "estia.title": "Cloud systems researcher",
    "estia.org": "ESTIA Institute of Technology",
    "estia.when": "Aug 2023 — Jan 2025",
    "estia.ctx": "Engineering school · on-site in Bidart, France · green computing",
    "estia.b1":
      "Built <strong>EnergyScore</strong>, a Kubernetes scheduler plugin that places each pod on the lower-joule node (CPU, RAM, network and disk, via EcoFloc) instead of the default scheduler.",
    "estia.b2":
      "Versus the default scheduler, EnergyScore cut energy by up to 30% in the best cases and by about 6% in the consistent runs (TeaStore, µBench, DeathStarBench).",
    "gipe.title": "GIPE project",
    "gipe.org": "DAAD · UNDP Accelerator Labs",
    "gipe.when": "Jan 2023 — Dec 2023",
    "gipe.ctx": "Universities in Germany, Namibia, Indonesia and Peru",
    "gipe.b1":
      "On a 7-person team, delivered an internet-quality report for a municipality and proposed improvements to the UNDP web-page flow.",
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
      "Finalist among 20 teams at TechSuyo 2023 (Google Developer Group and Silicon Valley tech group). Side projects, about 10 users each: SAM, with Manuel Cáceres, and a WhatsApp finance bot.",
  },
  es: {
    title: "Luis Fredy Huachaca Vargas — Currículum Vitae",
    print: "Imprimir / Guardar PDF",
    photoAlt: "Retrato de Luis Fredy Huachaca Vargas",
    kicker: "Currículum Vitae",
    role: "Cofundador y CTO, Moontecx · Infraestructura cloud y fintech",
    location: "Arequipa, Perú",
    summary:
      "Cofundador y CTO de Moontecx e ingeniero informático (UCSP). En Newroad puse Wealth Navigator en producción para una firma con más de US$20M: 12 asesores, más de 180 clientes y 96% de despliegues sin incidencias. En ESTIA (Francia, presencial), EnergyScore ahorró hasta un 30% frente al scheduler de Kubernetes (~6% consistente). Uno ese trabajo de infraestructura con la estrategia y el desarrollo comercial.",
    experience: "Experiencia",
    "mx.title": "Cofundador y CTO",
    "mx.org": "Moontecx",
    "mx.when": "oct. 2026 — Actualidad",
    "mx.ctx": "Start-up tecnológica · Arequipa, Perú",
    "mx.b1":
      "Cerré un negocio de ~US$5.8K y levanté inversión a una valuación de ~US$87K.",
    "nr.title": "Ingeniero de software junior y analista de datos",
    "nr.org": "Newroad Global Investing",
    "nr.when": "dic. 2025 — oct. 2026",
    "nr.ctx": "Sociedad de gestión de patrimonio, más de US$20M bajo administración · Perú",
    "nr.b1":
      "Puse Wealth Navigator en producción en un VPS de Hetzner (administración solo por Tailscale, Cloudflare Tunnel) con despliegues blue/green: 96% de despliegues sin incidencias. 12 asesores atienden a más de 180 clientes.",
    "nr.b2":
      "Reduje un proceso manual diario de 2 horas a 5 minutos con ETL hacia el reporting de clientes, y revisé la calidad del dato antes de usarlo con ellos.",
    "nr.b3":
      "Construí logchecker, un bot de Slack en el servidor Ubuntu de Hetzner (~15 contenedores: backend blue/green de Wealth Navigator, scheduler, worker de export, Caddy, Cloudflare Tunnel, gateway de IBKR, Postgres, Redis). Avisa de cada acceso nuevo por SSH o Tailscale según el dueño de la llave, compara contenedores, timers, puertos en escucha y conexiones salientes contra una línea base, y publica un gráfico de CPU cada 30 minutos. Un día mostró unos 6 despliegues blue/green.",
    "sf.title": "Cofundador",
    "sf.org": "SunkuFarma S.A.C.",
    "sf.when": "ene. 2024 — Actualidad",
    "sf.ctx": "Botica, dos locales · Arequipa",
    "sf.b1":
      "Construí el software que las dos tiendas usan a diario — inventario, facturación electrónica SUNAT y registros del cierre tributario — para no depender de un proveedor externo.",
    "sf.b2":
      "Con dos socios, las boticas generan ~US$2,000 al mes y emplean a 5 personas; también llevé el stock, los impuestos y la tienda pública.",
    "estia.title": "Investigador de sistemas cloud",
    "estia.org": "ESTIA Institute of Technology",
    "estia.when": "ago. 2023 — ene. 2025",
    "estia.ctx": "Escuela de ingeniería · presencial en Bidart, Francia · informática verde",
    "estia.b1":
      "Construí <strong>EnergyScore</strong>, un plugin de scheduler de Kubernetes que coloca cada pod en el nodo de menos joules (CPU, RAM, red y disco, con EcoFloc) en lugar del scheduler por defecto.",
    "estia.b2":
      "Frente al scheduler por defecto, EnergyScore redujo la energía hasta un 30% en los mejores casos y cerca de un 6% en las corridas consistentes (TeaStore, µBench, DeathStarBench).",
    "gipe.title": "Proyecto GIPE",
    "gipe.org": "DAAD · UNDP Accelerator Labs",
    "gipe.when": "ene. 2023 — dic. 2023",
    "gipe.ctx": "Universidades de Alemania, Namibia, Indonesia y Perú",
    "gipe.b1":
      "En un equipo de 7 personas, entregué un informe de calidad de internet para una municipalidad y propuse mejoras al flujo de la página web del PNUD.",
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
      "Finalista entre 20 equipos en TechSuyo 2023 (Google Developer Group y Silicon Valley tech group). Proyectos aparte, unos 10 usuarios cada uno: SAM, con Manuel Cáceres, y un bot de finanzas por WhatsApp.",
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
