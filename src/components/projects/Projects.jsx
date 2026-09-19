import React from "react";
import { projects } from "../../data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Flagship project (HelpLocal AI)
  const flagship = projects.find((p) => p.id === "helplocal-ai");
  
  // Secondary featured and technical projects (excluding Tic Tac Toe)
  const otherProjects = projects.filter((p) => p.id !== "helplocal-ai" && p.id !== "tic-tac-toe");

  return (
    <section id="projects" className="projects-showcase-section">
      <div className="section-inner">
        {/* Section Intro */}
        <div className="section-header" style={{ maxWidth: "680px", marginBottom: "56px" }}>
          <div className="section-eyebrow">Selected Work</div>
          <h2 className="section-title">
            Engineering Solutions for Real-World Problems
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginTop: "12px", lineHeight: "1.7" }}>
            Projects I've built to solve practical challenges, exploring modern full-stack
            architectures, responsive interfaces, and applied AI integrations.
          </p>
        </div>

        {/* 1. Flagship Project Showcase (HelpLocal AI) */}
        {flagship && (
          <div style={{ marginBottom: "64px" }}>
            <FeaturedProject project={flagship} />
          </div>
        )}

        {/* 2. Secondary Projects Grid (SalahTime, Vandor, Raw Material System) */}
        <div className="secondary-projects-header" style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Additional Engineering Projects
          </h3>
          <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "4px" }}>
            Utilities, MERN applications, and enterprise inventory management tools.
          </p>
        </div>

        <div className="projects-secondary-grid">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
