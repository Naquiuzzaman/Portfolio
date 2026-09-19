/**
 * Verified Projects Dataset
 * Strict URL Rule:
 * - Unavailable links MUST be null (never # or guessed links)
 * - Render logic only renders buttons if URL is non-null
 */

export const projects = [
  {
    id: "helplocal-ai",
    title: "HelpLocal AI",
    category: "AI & Full-Stack",
    featured: true,
    tagline: "AI-Powered Local Business Discovery Platform",
    desc: "A full-stack web application designed to connect local businesses with customers, featuring intelligent search and recommendations powered by the Gemini API, backed by Firebase cloud infrastructure.",
    longDesc: "HelpLocal empowers local commerce by bridging the discovery gap between community merchants and prospective customers. It integrates Google's Gemini API for dynamic natural language recommendations and uses Firebase for scalable database management and authentication.",
    image: "/src/assets/images/helplocal.webp",
    imageFallback: "image project2.png",
    tags: ["React", "JavaScript", "Gemini API", "Firebase", "CSS3", "Vercel"],
    highlights: [
      "Integrated Google's Gemini API for conversational local business recommendations",
      "Architected real-time Firebase backend for verified merchant profiles and customer reviews",
      "Designed an intuitive, responsive user interface deployed on Vercel"
    ],
    github: null,
    live: "https://help-hub-brown.vercel.app/",
    status: "Production Live"
  },
  {
    id: "salah-time",
    title: "SalahTime Web App",
    category: "Web Utility",
    featured: false,
    tagline: "Location-Aware Accurate Prayer Schedules",
    desc: "A clean, responsive web application that calculates and displays accurate prayer times based on real-time browser geolocation, built with native web technologies.",
    longDesc: "SalahTime provides users with immediate, accurate prayer timings dynamically synchronized with their geographic coordinates. Built with a focus on fast load times, zero bloat, and elegant dark-mode design.",
    image: "/src/assets/images/salahtime.webp",
    imageFallback: "image project1.jpeg",
    tags: ["JavaScript", "HTML5", "CSS3", "Geolocation API", "Vercel"],
    highlights: [
      "Dynamic prayer calculation based on browser GPS geolocation",
      "Clean, distraction-free visual presentation with dark aesthetic",
      "Zero external runtime dependencies for instant load performance"
    ],
    github: null,
    live: "https://salah-time-iota.vercel.app/",
    status: "Production Live"
  },
  {
    id: "vandor-platform",
    title: "Vandor — Real Estate Portal",
    category: "Full-Stack",
    featured: true,
    tagline: "House Sell & Rent Platform",
    desc: "A full-stack real estate marketplace with advanced property search, multi-criteria filtering, and secure direct inquiry messaging.",
    longDesc: "Developed as a comprehensive property transaction platform allowing users to browse listings, filter by price and amenities, and initiate direct inquiries with sellers. Features state management via React hooks and custom RESTful endpoints.",
    image: null,
    imageFallback: null,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST API"],
    highlights: [
      "Built full-stack portal with multi-parameter filter engine (location, budget, type)",
      "Leveraged React hooks for smooth state management and live UI updates",
      "Designed secure inquiry workflows and REST API microservices"
    ],
    github: null,
    live: null,
    status: "Private Codebase"
  },
  {
    id: "raw-material-system",
    title: "Raw Material Management System",
    category: "Enterprise Utility",
    featured: false,
    tagline: "Real-Time Stock & Inventory Tracking",
    desc: "An inventory and supply-chain management application enabling real-time stock monitoring, replenishment alerts, and automated ledger updates.",
    longDesc: "Engineered to eliminate stock discrepancies in raw material tracking. Features dynamic inventory dashboards backed by custom RESTful endpoints for real-time CRUD operations.",
    image: null,
    imageFallback: null,
    tags: ["JavaScript", "HTML5", "CSS3", "RESTful API", "Node.js"],
    highlights: [
      "Designed inventory tracking engine with real-time stock status monitors",
      "Created RESTful APIs to automate incoming and outgoing supply ledgers",
      "Ensured data consistency across inventory transactions"
    ],
    github: null,
    live: null,
    status: "Academic / Enterprise Project"
  }
];

export default projects;
