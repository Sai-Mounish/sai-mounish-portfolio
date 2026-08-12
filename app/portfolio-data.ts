export const achievements = [
  { value: "5.5+", label: "Years of experience" },
  { value: "30%", label: "Faster application performance" },
  { value: "40%", label: "Less change-detection overhead" },
  { value: "30%", label: "Faster SQL response times" },
];

export const skillGroups = [
  { title: "Frontend Architecture", description: "Designing modular, maintainable interfaces for complex enterprise workflows.", items: ["Angular 18/19/20", "TypeScript", "JavaScript ES6+", "RxJS", "Signals", "Reusable Components", "Lazy Loading", "Angular Material", "SASS"] },
  { title: "Backend & Integration", description: "Building reliable service layers and clear contracts between frontend and backend systems.", items: ["Java 17+", "Spring Boot", "Microservices", "REST APIs", "API Design", "API Versioning", "WebSocket"] },
  { title: "Data & Analytics", description: "Improving data access while turning operational and financial data into usable insights.", items: ["PostgreSQL", "SQL Server", "MySQL", "Query Optimization", "Indexing", "Caching", "Highcharts", "BI Reporting"] },
  { title: "Delivery & Leadership", description: "Raising engineering quality through delivery ownership, mentoring and shared standards.", items: ["Git", "Jenkins", "CI/CD", "Agile/Scrum", "Sprint Planning", "Mentoring", "Code Reviews", "Retrospectives", "Performance Tuning"] },
];

export const experience = [
  {
    company: "IntouchCX", role: "Senior Full Stack Developer", period: "Oct 2025 — Present", location: "Hyderabad, India",
    summary: "Modernizing enterprise applications across the frontend and backend while protecting established business workflows.",
    points: [
      "Migrated enterprise applications from Angular 15 to Angular 20, modernizing deprecated patterns and improving performance by approximately 20–30%.",
      "Reviewed deprecated implementations and replaced them with current Angular patterns through an optimized, incremental upgrade approach.",
      "Enhanced frontend and backend code with modern Angular, Java and Spring capabilities to improve scalability, reliability and application performance.",
      "Refactored end-to-end workflows to improve UI responsiveness, backend efficiency and integration between frontend modules and REST-based services.",
      "Contributed reusable application patterns and cleaner full-stack architecture while preserving business-critical functionality throughout migration.",
    ],
    highlights: ["Angular 15 → 20", "20–30% performance gain", "Full-stack modernization"],
  },
  {
    company: "Nekkanti Systems", role: "Senior Frontend Developer · Full Stack Java Developer · Frontend Team Lead", period: "Nov 2021 — Sep 2025", location: "Hyderabad, India",
    summary: "Led frontend delivery and contributed across services, APIs and databases for enterprise finance and reporting products.",
    points: [
      "Designed scalable Angular applications using reusable components, custom directives, lazy loading, RxJS and Signals.",
      "Upgraded a large-scale application from Angular 11 to Angular 19 and improved overall performance by approximately 30%.",
      "Replaced deprecated implementations with current Angular standards and modernized module-level functionality, rendering and loading workflows.",
      "Built Spring Boot microservices and REST APIs integrated with PostgreSQL and SQL Server for enterprise reporting and financial workflows.",
      "Developed KPI widgets, charts, grids, filters and drilldowns supporting ALACARTE and Hierarchical reporting patterns.",
      "Collaborated with frontend and backend teams on API contracts, versioning, data integration and end-to-end feature delivery.",
      "Led sprint planning, reviews and retrospectives while mentoring developers on Angular standards and performance tuning.",
      "Improved SQL response times by 30% through indexing and caching strategies.",
    ],
    highlights: ["Angular 11 → 19", "30% faster application", "Frontend team leadership", "30% faster SQL"],
  },
  {
    company: "FalconX Technologies", role: "Junior Engineer — Frontend & Backend Development", period: "Nov 2020 — Nov 2021", location: "Hyderabad, India",
    summary: "Built a strong full-stack foundation by contributing across interfaces, services, integrations and data-driven dashboards.",
    points: [
      "Contributed to Angular and Spring Boot applications with REST API and SQL database integration.",
      "Supported dashboard modules and data visualization tools used for finance and operations reporting.",
      "Worked across frontend, backend and database layers to troubleshoot defects and deliver application enhancements.",
    ],
    highlights: ["Angular & Spring Boot", "REST integration", "Finance dashboards"],
  },
];

export const projects = [
  { title: "E-Commerce Merchant App", category: "Commerce", metric: "−40% overhead", description: "A modular, real-time merchant experience designed for high-volume financial operations.", details: ["Built a responsive Angular 19 interface with dark and light modes.", "Used Angular Signals for reactive state management, reducing change-detection overhead by 40%.", "Implemented WebSocket-powered updates, financial dashboards, GST filing and transaction analytics.", "Integrated Spring Boot APIs and optimized SQL access for high-volume financial data."], stack: ["Angular 19", "Signals", "WebSocket", "Spring Boot", "PostgreSQL"] },
  { title: "Cash & Collections Tool", category: "Fintech", metric: "Live KPIs", description: "An operational workspace for monitoring and managing receivables and reconciliation workflows.", details: ["Developed dashboards for invoices, payments, overdue amounts and reconciliation.", "Created reusable KPI widgets, charts, grids and workflow-focused filters.", "Improved responsiveness through lazy-loaded modules and RxJS-based data refresh.", "Collaborated on API contracts and invoice reconciliation logic."], stack: ["Angular", "Highcharts", "RxJS", "Spring Boot", "SQL Server"] },
  { title: "BI Reports Platform", category: "Analytics", metric: "Self-service", description: "A flexible self-service reporting platform that helps users explore and export business data.", details: ["Built custom reports with reusable charts, grids, filters and export options.", "Supported ALACARTE reporting for configurable, user-selected insights.", "Implemented Hierarchical dashboard patterns for structured drilldown analysis.", "Integrated Angular interfaces with Spring Boot REST services and PostgreSQL."], stack: ["Angular", "Spring Boot", "REST APIs", "PostgreSQL"] },
  { title: "GL Byte", category: "Finance automation", metric: "Real-time", description: "A finance automation platform combining guided workflows with real-time operational visibility.", details: ["Delivered KPI widgets, grids, analytical charts and multi-step form wizards.", "Used RxJS observables to support responsive, real-time workflow dashboards.", "Worked with backend teams on API contracts, versioning and integration.", "Supported PostgreSQL and SQL Server data across finance workflows."], stack: ["Angular", "RxJS", "Spring Boot", "PostgreSQL", "SQL Server"] },
];

export const leadership = [
  { title: "Technical direction", text: "Established reusable Angular patterns, coding standards and performance-focused implementation practices across frontend delivery." },
  { title: "Agile ownership", text: "Led sprint planning, reviews and retrospectives while coordinating feature delivery across frontend and backend teams." },
  { title: "Developer growth", text: "Mentored junior developers on Angular architecture, maintainable code, debugging and performance tuning." },
  { title: "Cross-team alignment", text: "Worked with engineering teams on API contracts, versioning, data integration and end-to-end delivery decisions." },
];

export const recognition = [
  { year: "Q1", company: "IntouchCX", title: "Top Performer of the Quarter", detail: "Recognized as Top Performer for Q1 for strong delivery and contribution to enterprise modernization work." },
  { year: "2×", company: "IntouchCX", title: "Best Employee of the Month", detail: "Received the monthly best employee recognition twice for consistent performance and delivery impact." },
  { year: "2024", company: "Nekkanti Systems", title: "Best Employee of the Year", detail: "Recognized for outstanding annual performance, technical contribution and dependable team leadership." },
];
