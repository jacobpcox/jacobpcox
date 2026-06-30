// Shared project data — identical across all design variants.
window.PORTFOLIO = {
  stats: { since: '2020-03-09', projects: '30+', languages: '8', frameworks: '6' },
  langs: [
    ['C#', '#6c63ff'], ['F#', '#3b82f6'], ['TypeScript', '#f59e0b'], ['Python', '#22c55e'],
    ['C++', '#ec4899'], ['JavaScript', '#06b6d4'], ['VB.NET', '#ef4444'], ['SQL', '#a855f7'],
  ],
  filters: [
    ['all', 'All'], ['api', 'APIs'], ['web', 'Web Apps'], ['desktop', 'Desktop'],
    ['library', 'Libraries'], ['personal', 'Personal'], ['experiment', 'Experiments'],
  ],
  sections: [
    { id: 'api', title: 'APIs & Backend', items: [
      { t: 'Accounting Report Generator', type: 'Work', d: 'REST API that generates and serves accounting reports including checkbook and financial documents. Deployed via Azure Pipelines to IIS.', tags: ['F#', 'ASP.NET Core 8', 'QuestPDF', 'SQL Server'] },
      { t: 'Automation Report Service', type: 'Work', d: 'REST API for generating automation-related reports with live-reload support during development.', tags: ['C#', 'ASP.NET Core 8', 'Azure Pipelines'] },
      { t: 'CNC Machine Operations API', type: 'Work', d: 'Central REST API for CNC machine operations covering cabinets, logistics, materials, orders, networking, and router integrations.', tags: ['C#', 'ASP.NET Core 8', 'EF Core', 'SQL Server'] },
      { t: 'Real-Time Manufacturing Backend', type: 'Work', d: 'Backend serving mill scheduling, order management, and real-time manufacturing data with Active Directory authentication.', tags: ['C#', 'ASP.NET Core 8', 'Dapper', 'SignalR', 'ADFS'] },
      { t: 'Employee Data GraphQL Service', type: 'Work', d: 'GraphQL API serving employee data with role-based authorization for confidential fields like wages and benefits.', tags: ['C#', 'Hot Chocolate', 'EF Core', 'JWT'] },
      { t: 'Trust Fund Distribution API', type: 'Work', d: 'REST API for managing trust fund account splits and distribution paths. Serves as a reference implementation for F# + SQL type providers.', tags: ['F#', 'ASP.NET Core', 'SQL Type Providers'] },
    ]},
    { id: 'web', title: 'Web Applications', items: [
      { t: 'Manufacturing Floor Dashboard', type: 'Work', d: 'Blazor WASM frontend for CNC operations featuring logistics, mill scheduling, order tracking, and router management with real-time updates.', tags: ['C#', 'Blazor WASM', '.NET 8', 'Tailwind CSS 4', 'DaisyUI', 'SignalR'] },
      { t: 'Check Writing & Accounting App', type: 'Work', d: 'Full-featured accounting app handling check writing, reports, and tools with an Electron desktop wrapper for Windows distribution.', tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'AG Grid', 'Electron'] },
      { t: 'Financial Management Portal', type: 'Work', d: 'SvelteKit web frontend unifying checkbook, trust distribution, and report generation services into a single portal. Deployed to IIS.', tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'OpenAPI'] },
      { t: 'Office Space Booking System', type: 'Work', d: 'Blazor WASM app for managing office space reservations with views for spaces, reservations, and user management.', tags: ['C#', 'Blazor WASM', '.NET 8', 'SQL Server'] },
    ]},
    { id: 'desktop', title: 'Desktop Applications', items: [
      { t: 'Desktop Accounting Suite', type: 'Work', d: 'Desktop accounting application with dependency injection, layered architecture, and built-in report viewer.', tags: ['C#', 'WPF', '.NET Framework 4.8', 'RDLC'] },
      { t: 'Payroll Processing App', type: 'Work', d: 'Desktop payroll application featuring F# domain logic, C# persistence layer, and WPF UI with full test coverage.', tags: ['C#', 'F#', 'WPF', 'Autofac', 'MSTest'] },
      { t: 'Employee & Wage Manager', type: 'Work', d: 'Windows Forms app for managing employee records, wages, and third-party service integrations with a lightweight data access layer.', tags: ['VB.NET', 'WinForms', 'Dapper', 'SQL Server'] },
      { t: 'Shipping & Logistics Tracker', type: 'Work', d: 'Desktop logistics management application with layered architecture, dependency injection, and inter-module messaging.', tags: ['C#', 'WPF', 'Autofac', 'SQL Server'] },
      { t: 'Machine Report Viewer', type: 'Work', d: 'Legacy WPF application for viewing CNC machine reports, predating the newer API/web architecture.', tags: ['C#', 'WPF', '.NET Framework'] },
    ]},
    { id: 'library', title: 'Shared Libraries', items: [
      { t: 'API Middleware & Auth Toolkit', type: 'NuGet', d: 'Shared library providing middleware for logging, CORS, and correlation IDs, plus authentication handlers and F# railway-oriented error handling.', tags: ['F#', 'ASP.NET Core 8', 'NuGet'] },
      { t: 'PDF Report Component Library', type: 'NuGet', d: 'Reusable PDF report components including barcodes, fonts, and layouts shared across multiple accounting and reporting services.', tags: ['C#', '.NET 8', 'QuestPDF'] },
      { t: 'Active Directory Integration', type: 'NuGet', d: 'Active Directory integration library providing user and group lookup services for enterprise applications.', tags: ['C#', '.NET 8', 'LDAP'] },
      { t: 'CNC Data Access Layer', type: 'Library', d: 'Four-layer library (Domain, Models, Persistence, SQL) providing the data foundation for the CNC API ecosystem.', tags: ['C#', '.NET', 'SQL Server'] },
    ]},
    { id: 'personal', title: 'Personal Projects', items: [
      { t: 'Slack Bot with Slash Commands', type: 'Personal', d: 'Full-featured Slack bot with slash commands for jokes, histograms, drink menus, and message stats. Includes Docker deployment and MongoDB persistence.', tags: ['Python', 'Slack Bolt', 'MongoDB', 'Docker'] },
      { t: 'AI-Powered Slack Impersonator', type: 'Personal', d: 'Slack bot that reads messages and auto-responds using a locally hosted LLM, mimicking a specific communication style via a custom style guide.', tags: ['C++', 'Slack API', 'Ollama', 'Local LLM'] },
      { t: 'Auto Teams Call Decliner', type: 'Personal', d: 'Python script that automatically declines incoming Microsoft Teams calls from a configurable list of users using Windows UI automation.', tags: ['Python', 'pywinauto', 'Desktop Automation'] },
      { t: 'Real-Time Chat & Drawing App', type: 'Personal', d: 'Real-time chat and collaborative drawing app using Blazor WASM for the client and SignalR for live messaging and drawing sync.', tags: ['C#', 'Blazor WASM', 'ASP.NET Core', 'SignalR'] },
      { t: 'Gaming Legacy Timer Website', type: 'Personal', d: 'Dark gaming-themed website that tracks and visualizes gaming history and milestones across multiple platforms.', tags: ['HTML', 'CSS', 'JavaScript'] },
      { t: 'Remote Audio Control Server', type: 'Personal', d: 'Remote volume control system with a hidden background server listening on TCP port 8888, controlling Windows audio via Core Audio API.', tags: ['C++', 'Win32', 'Winsock2', 'Core Audio'] },
    ]},
    { id: 'experiment', title: 'Experiments & Tools', items: [
      { t: 'CNC Software API Bridge', type: 'Experiment', d: 'VBA macro that bridges CNC routing software to external systems by monitoring a command file and executing machine instructions programmatically.', tags: ['VBA', 'AlphaCAM', 'File-based IPC'] },
      { t: 'Component Library Starter Kits', type: 'Experiment', d: 'Starter templates exploring different UI component library integrations with Blazor WASM and utility-first CSS.', tags: ['C#', 'Blazor WASM', 'Tailwind CSS', 'Blazorise', 'Flowbite'] },
      { t: 'Database Migration Scripts', type: 'Work', d: 'Three organized SQL script repositories managing schema migrations across Dev/QC and Production environments.', tags: ['SQL Server', 'Migrations'] },
      { t: 'Desktop Prank Collection', type: 'Fun', d: 'Collection of C++ and C# pranks including bouncing console windows, randomized visibility, and an infinite Edge browser launcher.', tags: ['C++', 'C#', 'Win32 API'] },
    ]},
  ],
};

// ── Résumé-specific data ──────────────────────────────────────────────
// Bracketed values are placeholders — replace with your real info.
window.PORTFOLIO.profile = {
  title: 'Full-Stack Developer',
  location: '',
  blurb: 'I design and ship production software end-to-end — F# and C# back-ends, Blazor and SvelteKit front-ends, and the data and deployment plumbing in between. Most of my work powers a real manufacturing operation; the rest is curiosity that got out of hand.',
  email: 'contact@jacobpcox.com',
  linkedin: 'https://www.linkedin.com/in/jacobpcox',
  github: 'https://github.com/jacobpcox',
  resume: 'JacobCox_Resume.pdf',   // downloadable resume
};

// Experience grouped by company; each company holds a progression of roles.
window.PORTFOLIO.experience = [
  {
    org: 'WW WoodProducts',
    meta: 'Mar 2020 — Present · 6 yrs 4 mos',
    roles: [
      {
        role: 'Software Engineer Team Lead', period: 'Nov 2024 — Present',
        summary: 'Manage team software development using agile methodologies to build software for plant operations and CNC interactions. Serve as architect and lead of company-wide automation projects.',
        tags: ['C#', 'F#', 'SvelteKit', 'SQL Server', 'Azure Pipelines'],
        projects: ['CNC Machine Operations API', 'Real-Time Manufacturing Backend', 'Manufacturing Floor Dashboard'],
      },
      {
        role: 'Senior Software Engineer', period: 'Nov 2022 — Nov 2024',
        summary: 'Mentored team members and built software managing sales and accounting that together take in millions of dollars in annual revenue, plus payroll processing for over 1,600 employees.',
        tags: ['C#', 'F#', 'SvelteKit', 'SQL Server'],
        projects: ['Accounting Report Generator', 'Financial Management Portal', 'Check Writing & Accounting App', 'Payroll Processing App'],
      },
      {
        role: 'Full Stack Software Engineer', period: 'Mar 2020 — Nov 2022',
        summary: 'Designed, developed, tested, and deployed finance software as a team member on large-scale solutions — sales, payroll, and accounting systems.',
        tags: ['VB.NET', '.NET Framework', 'Vue', 'WPF', 'SQL Server'],
        projects: ['Desktop Accounting Suite', 'Employee & Wage Manager', 'Machine Report Viewer'],
      },
    ],
  },
  {
    org: 'Bootheel Asphalt',
    meta: 'Sikeston, MO · May 2011 — Mar 2020 · 8 yrs 11 mos',
    roles: [
      {
        role: 'IT Support Technician', period: 'Jan 2017 — Mar 2020',
        summary: 'Provided IT support and systems troubleshooting alongside operations responsibilities.',
        tags: [], projects: [],
      },
      {
        role: 'Operations Lead', period: 'May 2011 — Mar 2020',
        summary: 'Led day-to-day plant operations and crew coordination.',
        tags: [], projects: [],
      },
    ],
  },
];

window.PORTFOLIO.skillGroups = [
  { label: 'Languages', icon: 'code', items: ['C#', 'F#', 'TypeScript', 'Python', 'C++', 'JavaScript', 'VB.NET'] },
  { label: 'Frameworks & UI', icon: 'layers', items: ['ASP.NET Core 8', 'Blazor WASM', 'SvelteKit', 'Tailwind CSS', 'DaisyUI', 'Electron', 'SignalR', 'Hot Chocolate (GraphQL)', 'QuestPDF'] },
  { label: 'Data', icon: 'db', items: ['SQL', 'EF Core', 'Dapper', 'SQL Server', 'MongoDB', 'SQL Type Providers'] },
  { label: 'Infra & Auth', icon: 'server', items: ['ADFS', 'JWT', 'LDAP', 'Azure Pipelines', 'Docker', 'IIS'] },
];

// Titles must match items above; these get the large "case study" treatment.
window.PORTFOLIO.featured = [
  'Real-Time Manufacturing Backend',
  'Manufacturing Floor Dashboard',
  'AI-Powered Slack Impersonator',
  'API Middleware & Auth Toolkit',
];

window.PORTFOLIO.education = [
  {
    degree: 'M.S. — Cybersecurity',
    school: 'Southeast Missouri State University',
    period: '2020 — May 2022',
    detail: '',
  },
  {
    degree: 'B.S. — Cybersecurity',
    school: 'Southeast Missouri State University',
    period: '2015 — 2020',
    detail: '',
  },
];

// Optional richer detail shown when a project card is clicked.
// `long` = fuller write-up; `repo`/`demo` = links (omit to hide a button).
// Add entries for any project; the four below feed the featured detail views.
window.PORTFOLIO.details = {
  'Real-Time Manufacturing Backend': {
    long: 'The central back-end behind the manufacturing floor. It serves mill scheduling, order management, and live production data to the operations dashboard over SignalR, with Active Directory authentication gating access by role. Built on ASP.NET Core 8 with Dapper for fast, explicit data access against SQL Server.',
  },
  'Manufacturing Floor Dashboard': {
    long: 'The operator-facing front-end for CNC operations — a Blazor WebAssembly SPA covering logistics, mill scheduling, order tracking, and router management. Updates are pushed live from the back-end over SignalR so the floor always sees current state. Styled with Tailwind CSS 4 and DaisyUI.',
  },
  'AI-Powered Slack Impersonator': {
    long: 'A Slack bot that reads channel messages and auto-responds in a specific person’s voice using a locally hosted LLM through Ollama — no data leaves the machine. A custom style guide steers tone and phrasing. Written in C++ against the Slack API.',
  },
  'API Middleware & Auth Toolkit': {
    long: 'A shared NuGet package that standardizes cross-cutting concerns across the API fleet: logging, CORS, and correlation-ID middleware, authentication handlers, and F# railway-oriented error handling so failures flow predictably through the request pipeline instead of throwing.',
  },
};
