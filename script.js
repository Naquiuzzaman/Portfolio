const projects = [
  {
    title: "Salah Times Web App",
    img: "image project1.jpeg",
    desc: "A web application that provides accurate prayer times based on the user's location, built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/Naquiuz-Zaman",
    live: "#",
  },
  {
    title: "HelpLocal",
    img: "image project2.png",
    desc: "A web application that connects local businesses with customers, built using HTML, CSS, JavaScript, and integrated with the Gemini API and Firebase for backend services.",
    tags: ["HTML", "CSS", "JS", "GEMINI-API", "FIREBASE"],
    github: "https://github.com/Naquiuz-Zaman",
    live: "#",
  },
  {
    title: "Tic Tac Toe Game",
    img: "image project3.png",
    desc: "JavaScript based tic tac toe game with a clean UI and interactive gameplay.",
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/Naquiuz-Zaman",
    live: "#",
  },
];
function safeSrc(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}
const container = document.getElementById("projects-container");

const fragment = document.createDocumentFragment();

projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project";

  const gh = project.github || "#";
  const live = project.live || "#";

  article.innerHTML = `
    <div class="project-image">
      <div class="project-image-inner">
        <img 
          src="${safeSrc(project.img)}" 
          alt="${project.title}" 
          loading="lazy" 
          decoding="async"
        >
      </div>
    </div>

    <div class="project-content">
      <h3>${project.title}</h3>

      <div class="tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>

      <p>${project.desc}</p>

      <div class="buttons">
        <a class="btn btn-main" href="${gh}" target="_blank" rel="noopener noreferrer">
          View Github
        </a>
        <a class="btn btn-link" href="${live}" target="_blank" rel="noopener noreferrer">
          View Project ↗
        </a>
      </div>
    </div>
  `;

  fragment.appendChild(article);
});

container.appendChild(fragment);