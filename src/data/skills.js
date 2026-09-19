/**
 * Verified Technical Skills Dataset — Portfolio V2
 * Structured into 5 clear engineering domains based exclusively on verified resume and codebase data.
 */

export const skillCategories = [
  {
    id: "languages",
    category: "Languages",
    icon: "code",
    description: "Core programming and scripting languages for algorithms and applications",
    skills: [
      { name: "Java", highlight: true, note: "OOP & DSA Coursework" },
      { name: "JavaScript", highlight: true, note: "Full-Stack Development", usedIn: "SalahTime • HelpLocal AI • Raw Material" },
      { name: "Python", highlight: false, note: "Scripting & ML Fundamentals" }
    ]
  },
  {
    id: "frontend",
    category: "Frontend",
    icon: "layout",
    description: "Building responsive, modern, and accessible user interfaces",
    skills: [
      { name: "React", highlight: true, note: "Component Architecture & Hooks", usedIn: "HelpLocal AI • Vandor • GDSC" },
      { name: "HTML5", highlight: false, note: "Semantic Structure" },
      { name: "CSS3", highlight: false, note: "Custom Design Systems & Flexbox/Grid" },
      { name: "Tailwind CSS", highlight: true, note: "Utility-First Styling", usedIn: "Vandor" }
    ]
  },
  {
    id: "backend",
    category: "Backend & APIs",
    icon: "server",
    description: "Server-side services, routing, and RESTful architectures",
    skills: [
      { name: "Node.js", highlight: true, note: "Runtime & Microservices", usedIn: "Vandor • GDSC • Raw Material" },
      { name: "Express.js", highlight: true, note: "RESTful API Endpoints", usedIn: "Vandor • GDSC" },
      { name: "RESTful APIs", highlight: true, note: "CRUD Architecture & Integration", usedIn: "GDSC • Vandor • Raw Material" }
    ]
  },
  {
    id: "database",
    category: "Database",
    icon: "database",
    description: "Data persistence, schema design, and document queries",
    skills: [
      { name: "MongoDB", highlight: true, note: "NoSQL Document Storage & Queries", usedIn: "Vandor" }
    ]
  },
  {
    id: "ai-tools",
    category: "AI & Developer Tools",
    icon: "sparkles",
    description: "AI model integrations, cloud platforms, and developer workflows",
    skills: [
      { name: "Gemini API", highlight: true, note: "Generative AI Integration", usedIn: "HelpLocal AI" },
      { name: "Firebase", highlight: true, note: "Cloud Firestore & Authentication", usedIn: "HelpLocal AI" },
      { name: "Git", highlight: true, note: "Version Control & Branch Workflows", usedIn: "GDSC • All Projects" },
      { name: "VS Code", highlight: false, note: "Primary IDE Environment" },
      { name: "Postman", highlight: false, note: "API Testing & Validation" }
    ]
  }
];

export const allSkillsList = [
  "JavaScript", "React", "Node.js", "Express.js", "MongoDB",
  "Java", "Python", "HTML5", "CSS3", "Tailwind CSS",
  "RESTful APIs", "Gemini API", "Firebase", "Git", "Postman", "VS Code"
];

export default skillCategories;
