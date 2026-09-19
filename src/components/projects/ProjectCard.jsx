import React from "react";
import helplocalImg from "../../assets/images/helplocal.webp";
import salahtimeImg from "../../assets/images/salahtime.webp";
import tictactoeImg from "../../assets/images/tictactoe.webp";

const imageMap = {
  "/src/assets/images/helplocal.webp": helplocalImg,
  "/src/assets/images/salahtime.webp": salahtimeImg,
  "/src/assets/images/tictactoe.webp": tictactoeImg,
};

export const ProjectCard = ({ project }) => {
  const imgSrc = imageMap[project.image] || project.image;

  return (
    <article className="project">
      <div className="project-image">
        <div className="project-image-inner">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                background: "var(--bg-elevated)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "24px",
                border: "1px solid rgba(148, 163, 184, 0.15)",
                borderRadius: "12px",
              }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: "600", color: "var(--accent)" }}>
                {project.category || "Full-Stack Project"}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "8px" }}>
                {project.status || "In Development"}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p>{project.desc}</p>

        {/* Action Buttons: Strict NULL handling */}
        <div className="buttons">
          {project.github && (
            <a
              className="btn btn-main"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          )}

          {project.live && (
            <a
              className="btn btn-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project ↗
            </a>
          )}

          {!project.github && !project.live && (
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                background: "rgba(148, 163, 184, 0.1)",
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid rgba(148, 163, 184, 0.2)",
              }}
            >
              {project.status || "Private Repository"}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
