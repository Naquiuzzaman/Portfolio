/**
 * Verified Projects Dataset — Portfolio V2
 * Strict URL Enforcement:
 * - Unavailable links MUST be null (never #, never guessed URLs)
 * - Render logic conditionally renders action buttons only when URL is non-null
 */

export const projects = [
  {
    id: "helplocal-ai",
    number: "01",
    title: "HelpLocal AI",
    category: "AI & Full-Stack Platform",
    featured: true,
    tagline: "AI-Powered Community Assistance & Local Discovery Platform",
    shortDescription: "A full-stack web application designed to connect local communities with intelligent problem reporting, automated triage powered by the Gemini API, and real-time cloud data persistence via Firebase.",
    description: "HelpLocal AI addresses the fragmentation of local assistance and community support. By combining modern React interfaces with Google's Gemini API and Firebase, it provides an organized hub where community members can report local issues and receive intelligent, structured guidance.",
    image: "/src/assets/images/helplocal.webp",
    github: null,
    live: "https://help-hub-brown.vercel.app/",
    status: "LIVE",
    badge: "Flagship Project",
    tags: ["React", "Firebase", "Gemini API", "JavaScript", "CSS3", "Vercel"],
    
    // Case Study Information
    problem: "Local community inquiries, public service requests, and neighborhood assistance needs are frequently scattered across unstructured social media groups, unmoderated message boards, and outdated directories without any automated triage or intelligent guidance.",
    solution: "HelpLocal AI creates a centralized, accessible digital portal where community members can submit structured requests. The platform leverages Google's Gemini API to analyze issue context, categorize problem severity, and deliver instant, actionable guidance while synchronizing records via Firebase.",
    
    features: {
      implemented: [
        "Community Issue Reporting: Clean, responsive submission interface for local service inquiries",
        "AI-Assisted Context Analysis: Powered by Google Gemini API for automated inquiry evaluation and guidance",
        "Cloud Data Persistence: Firebase database synchronization for persistent, real-time record management",
        "Cross-Device Accessibility: Optimized for fast mobile and desktop usage with clean dark aesthetics"
      ],
      planned: [
        "Geospatial radius matching to connect citizens with nearest verified local helpers",
        "SMS and WhatsApp notification webhooks for urgent community alerts",
        "Community resolution tracking and verification workflow"
      ]
    },

    architecture: [
      { step: "01", name: "User Client", desc: "Citizen submits local inquiry via responsive React interface" },
      { step: "02", name: "Application Logic", desc: "Client-side validation and structured payload normalization" },
      { step: "03", name: "AI Intelligence Layer", desc: "Gemini API evaluates issue details and generates recommendations" },
      { step: "04", name: "Cloud Persistence", desc: "Firebase Firestore synchronizes verified inquiry records" },
      { step: "05", name: "Community Workflow", desc: "Real-time updates delivered to the community dashboard" }
    ],

    challenges: [
      "Handling Generative AI response latencies with optimistic client-side UI states and progress indicators",
      "Structuring non-relational Firestore document schemas to support efficient status filtering",
      "Ensuring high-contrast, accessible typography across varying mobile screen viewports"
    ],

    whatILearned: [
      "Integrating Google's Gemini API with structured prompt workflows in interactive web applications",
      "Managing asynchronous cloud database states and authentication flows using Firebase",
      "Designing user-centric digital products where immediate clarity and usability are mission-critical"
    ]
  },
  {
    id: "salah-time",
    number: "02",
    title: "SalahTime Web App",
    category: "Location-Aware Web Utility",
    featured: true,
    tagline: "GPS-Synchronized Astronomical Prayer Calculator",
    shortDescription: "A lightweight, location-aware web utility that dynamically calculates accurate prayer timings using real-time browser GPS coordinates with zero runtime dependencies.",
    description: "SalahTime delivers instant, precise prayer calculations directly synchronized with the user's geographic location. Engineered with native web technologies to achieve sub-second load times and high visual contrast in low-light environments.",
    image: "/src/assets/images/salahtime.webp",
    github: null,
    live: "https://salah-time-iota.vercel.app/",
    status: "LIVE",
    badge: "Featured Utility",
    tags: ["JavaScript", "HTML5", "CSS3", "Geolocation API", "Vercel"],

    problem: "Many existing prayer schedule websites are burdened by heavy ad scripts, slow page load times, and rigid manual city selection that fails when users travel.",
    solution: "SalahTime solves this with an instant, privacy-conscious utility that uses the browser's native Geolocation API to calculate astronomical timings directly with zero bloat.",

    features: {
      implemented: [
        "Dynamic GPS Coordinate Calculation: Calculates precise schedule based on browser geolocation",
        "Instant Load Performance: Engineered with native web technologies with zero external bundle overhead",
        "Distraction-Free Dark Mode: Clean, high-contrast interface designed for rapid daily checks",
        "Responsive Grid Layout: Fluidly adapts from narrow smartphones to ultra-wide displays"
      ],
      planned: []
    },

    architecture: [
      { step: "01", name: "Client Request", desc: "Browser invokes native Geolocation API with user permission" },
      { step: "02", name: "Calculation Engine", desc: "Astronomical solar calculation algorithms determine timings" },
      { step: "03", name: "DOM Presentation", desc: "Pure JavaScript updates interface with sub-second rendering" }
    ],

    challenges: [
      "Gracefully handling geolocation permission denials with fallback defaults",
      "Ensuring accurate astronomical calculations across diverse geographic latitudes"
    ],

    whatILearned: [
      "Leveraging browser native APIs (Geolocation) without introducing third-party library dependencies",
      "Designing focused, single-purpose web utilities that prioritize speed and utility over complexity"
    ]
  },
  {
    id: "vandor-platform",
    number: "03",
    title: "Vandor — Real Estate Platform",
    category: "Full-Stack MERN Application",
    featured: false,
    tagline: "House Sell & Rent Marketplace Platform",
    shortDescription: "A full-stack real estate marketplace platform featuring multi-criteria property search, dynamic filter engines, and secure direct inquiry messaging.",
    description: "Developed to streamline property discovery and transactions, Vandor allows buyers and renters to browse listings, filter by specific amenities and budget brackets, and initiate direct communication with property owners.",
    image: null,
    github: null,
    live: null,
    status: "PRIVATE CODEBASE",
    badge: "MERN Stack Project",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],

    problem: "Traditional property search experiences suffer from sluggish filtering, disconnected inquiry mechanisms, and cluttered listing presentations.",
    solution: "Vandor delivers a responsive full-stack platform featuring reactive React hook state management, Tailwind styling, and dedicated Express/Node REST endpoints backed by MongoDB.",

    features: {
      implemented: [
        "Advanced Multi-Filter Search: Instant filtering by price brackets, property type, and locations",
        "State Management: Leveraged React hooks for smooth state synchronization across filter panels",
        "RESTful Microservices: Modular Node.js and Express backend handling listing queries and inquiries",
        "Database Modeling: Document schemas in MongoDB optimized for fast property queries"
      ],
      planned: []
    },

    architecture: [
      { step: "01", name: "React Frontend", desc: "Interactive property catalog styled with Tailwind CSS" },
      { step: "02", name: "Express REST API", desc: "Authenticated endpoints for property listings and inquiries" },
      { step: "03", name: "MongoDB Database", desc: "Structured document store with indexed query filters" }
    ],

    challenges: [
      "Managing complex multi-parameter filter queries efficiently on the backend",
      "Optimizing image rendering and layout stability for diverse listing card sizes"
    ],

    whatILearned: [
      "Architecting end-to-end full-stack applications with the MERN stack",
      "Writing clean, modular RESTful APIs and designing MongoDB document schemas"
    ]
  },
  {
    id: "raw-material-system",
    number: "04",
    title: "Raw Material Management System",
    category: "Enterprise Utility",
    featured: false,
    tagline: "Real-Time Stock & Inventory Tracking Application",
    shortDescription: "An inventory and supply-chain management application enabling real-time stock monitoring, replenishment alerts, and automated transaction ledgers.",
    description: "Engineered to eliminate stock discrepancies and manual accounting bottlenecks in raw material inventory, featuring dynamic dashboards backed by custom RESTful APIs.",
    image: null,
    github: null,
    live: null,
    status: "ACADEMIC PROJECT",
    badge: "Technical Project",
    tags: ["JavaScript", "HTML5", "CSS3", "RESTful API", "Node.js"],

    problem: "Manual spreadsheet tracking of industrial raw materials frequently leads to stockouts, inventory discrepancies, and delayed replenishment orders.",
    solution: "A web-based management system providing real-time stock balances, dynamic ledger updates via custom REST APIs, and instant status monitors.",

    features: {
      implemented: [
        "Real-Time Stock Tracking: Dynamic stock level monitors with visual shortage indicators",
        "RESTful API Integration: Custom endpoints for recording inward deliveries and outward issues",
        "Automated Ledger Logging: Transaction records updated automatically upon stock movements",
        "Clean Tabular Reporting: Clear, accessible data tables for rapid inventory inspection"
      ],
      planned: []
    },

    architecture: [
      { step: "01", name: "Dashboard UI", desc: "Responsive inventory management interface" },
      { step: "02", name: "RESTful Service", desc: "Node.js API endpoints handling CRUD inventory operations" },
      { step: "03", name: "Transaction Ledger", desc: "Consistent data persistence verifying stock movements" }
    ],

    challenges: [
      "Preventing inventory race conditions during rapid consecutive stock updates",
      "Designing an uncluttered data presentation for complex multi-attribute inventory items"
    ],

    whatILearned: [
      "Designing robust CRUD workflows and implementing REST API best practices",
      "Building practical enterprise-style utilities focused on operational accuracy"
    ]
  }
];

export default projects;
