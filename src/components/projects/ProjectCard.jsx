import React, { useState } from "react";
import salahtimeImg from "../../assets/images/salahtime.webp";
import { ArrowUpRight, ChevronDown, ChevronUp, Lock, Terminal, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const imageMap = {
  "/src/assets/images/salahtime.webp": salahtimeImg,
};

export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const imgSrc = imageMap[project.image] || null;

  return (
    <article className="standard-project-card" id={`project-${project.id}`}>
      {/* Top Card Meta */}
      <div className="card-top-row">
        <div className="card-num-badge">
          <span className="num">{project.number}</span>
          <span className="category-label">{project.category}</span>
        </div>

        {/* Live or Status Badge */}
        {project.live ? (
          <span className="status-live-pill">
            <span className="live-dot" aria-hidden="true"></span>
            <span>Live</span>
          </span>
        ) : (
          <span className="status-private-pill">
            <Lock size={12} />
            <span>{project.status}</span>
          </span>
        )}
      </div>

      {/* Visual / Blueprint Section */}
      <div className="card-media-wrapper">
        {imgSrc ? (
          <div className="card-image-frame">
            <img
              src={imgSrc}
              alt={`${project.title} screenshot`}
              loading="lazy"
              decoding="async"
              width="1898"
              height="995"
            />
          </div>
        ) : (
          <div className="card-blueprint-frame">
            <Terminal size={24} color="var(--accent-hover)" />
            <div className="blueprint-title">{project.title}</div>
            <div className="blueprint-badge">{project.badge || "Full-Stack System"}</div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>
        <p className="card-desc">{project.shortDescription}</p>

        <div className="tags" style={{ margin: "16px 0 20px" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="card-actions">
          {project.live && (
            <a
              href={project.live}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={15} />
            </a>
          )}

          {!project.live && !project.github && (
            <span className="non-clickable-badge">
              {project.status || "Private Repository"}
            </span>
          )}

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`details-${project.id}`}
          >
            <span>{expanded ? "Less" : "Architecture"}</span>
            {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>

      {/* Expandable Architecture & Details Drawer */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`details-${project.id}`}
            className="card-details-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="details-inner">
              <div className="details-section">
                <div className="details-heading">Problem & Objective</div>
                <p className="details-text">{project.problem}</p>
              </div>

              <div className="details-section">
                <div className="details-heading">Solution & Implementation</div>
                <p className="details-text">{project.solution}</p>
              </div>

              {project.architecture && project.architecture.length > 0 && (
                <div className="details-section">
                  <div className="details-heading" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Cpu size={14} color="var(--accent-hover)" />
                    <span>Technical Workflow</span>
                  </div>
                  <div className="compact-pipeline">
                    {project.architecture.map((step) => (
                      <div key={step.step} className="compact-step">
                        <span className="step-num">{step.step}</span>
                        <div>
                          <strong>{step.name}:</strong> {step.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default ProjectCard;
