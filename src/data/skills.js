/**
 * Verified Technical Skills Dataset
 * Categorized for recruiter & engineering manager evaluation
 */

export const skillCategories = [
  {
    category: "Languages",
    description: "Core programming and markup languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Java", level: "Intermediate", highlight: true },
      { name: "Python", level: "Intermediate", highlight: false },
      { name: "HTML5", level: "Advanced", highlight: false },
      { name: "CSS3", level: "Advanced", highlight: false }
    ]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and fast user interfaces",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Framer Motion", level: "Intermediate", highlight: false },
      { name: "Responsive UI/UX", level: "Advanced", highlight: false },
      { name: "Component Architecture", level: "Advanced", highlight: false }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Server-side logic, microservices, and persistent data",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Advanced", highlight: true },
      { name: "MongoDB", level: "Intermediate", highlight: true },
      { name: "RESTful APIs", level: "Advanced", highlight: true },
      { name: "Firebase (Firestore/Auth)", level: "Intermediate", highlight: false }
    ]
  },
  {
    category: "AI & Cloud Integrations",
    description: "Generative AI implementations and modern cloud workflows",
    skills: [
      { name: "Gemini API", level: "Practical", highlight: true },
      { name: "Prompt Engineering", level: "Practical", highlight: false },
      { name: "Vercel Cloud Deployment", level: "Advanced", highlight: false },
      { name: "Microservices", level: "Intermediate", highlight: false }
    ]
  },
  {
    category: "Developer Tools & Practices",
    description: "Tooling for disciplined, collaborative engineering",
    skills: [
      { name: "Git & GitHub", level: "Advanced", highlight: true },
      { name: "Postman API Testing", level: "Advanced", highlight: true },
      { name: "VS Code", level: "Advanced", highlight: false },
      { name: "Data Structures & Algorithms", level: "Core Coursework", highlight: true }
    ]
  }
];

export const allSkillsList = [
  "JavaScript", "React", "Node.js", "Express", "MongoDB",
  "Java", "Python", "HTML5", "CSS3", "Tailwind CSS",
  "RESTful APIs", "Gemini API", "Firebase", "Git", "Postman"
];

export default skillCategories;
