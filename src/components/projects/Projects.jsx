import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <h2 className="projects-title">Projects</h2>
        <div id="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
