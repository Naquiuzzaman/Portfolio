import React, { useState } from "react";
import helplocalImg from "../../assets/images/helplocal.webp";
import { ArrowUpRight, ChevronDown, ChevronUp, Layers, CheckCircle2, AlertCircle, Sparkles, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FeaturedProject = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="featured-project-card" id={`project-${project.id}`}>
      {/* Top Header Badge */}
      <div className="featured-badge-row">
        <div className="project-num-badge">
          <span className="num">{project.number}</span>
          <span className="divider">/</span>
          <span className="label">FLAGSHIP PROJECT</span>
        </div>
        <div className="project-live-indicator">
          <span className="live-dot" aria-hidden="true"></span>
          <span>{project.status}</span>
        </div>
      </div>

      {/* Main Grid: Info + Media */}
      <div className="featured-main-grid">
        <div className="featured-content">
          <div className="featured-category">{project.category}</div>
          <h3 className="featured-title">{project.title}</h3>
          <p className="featured-tagline">{project.tagline}</p>
          <p className="featured-desc">{project.shortDescription}</p>

          <div className="tags" style={{ margin: "20px 0 28px" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="featured-actions">
            {project.live && (
              <a
                href={project.live}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={16} />
              </a>
            )}

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls={`case-study-${project.id}`}
            >
              <Layers size={16} />
              <span>{expanded ? "Hide Case Study" : "View Architecture & Case Study"}</span>
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>

        <div className="featured-media">
          <div className="featured-image-frame">
            <img
              src={helplocalImg}
              alt={`${project.title} — AI community platform interface`}
              loading="lazy"
              decoding="async"
              width="1890"
              height="984"
            />
          </div>
        </div>
      </div>

      {/* Expandable Case Study Section */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            id={`case-study-${project.id}`}
            className="case-study-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="case-study-inner">
              {/* Problem vs Solution Grid */}
              <div className="case-study-grid">
                <div className="case-study-block problem-block">
                  <div className="block-eyebrow">
                    <AlertCircle size={15} />
                    <span>The Problem</span>
                  </div>
                  <p>{project.problem}</p>
                </div>

                <div className="case-study-block solution-block">
                  <div className="block-eyebrow">
                    <Sparkles size={15} />
                    <span>The Solution</span>
                  </div>
                  <p>{project.solution}</p>
                </div>
              </div>

              {/* Technical Architecture Visualization */}
              <div className="architecture-section">
                <div className="arch-header">
                  <Cpu size={18} color="var(--accent-hover)" />
                  <h4>Technical Architecture Flow</h4>
                </div>
                <div className="arch-pipeline">
                  {project.architecture.map((node, i) => (
                    <div key={node.step} className="arch-node-wrapper">
                      <div className="arch-node">
                        <div className="node-step">{node.step}</div>
                        <div className="node-name">{node.name}</div>
                        <div className="node-desc">{node.desc}</div>
                      </div>
                      {i < project.architecture.length - 1 && (
                        <div className="arch-arrow" aria-hidden="true">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features: Implemented vs Planned */}
              <div className="features-section">
                <div className="features-col">
                  <div className="features-heading implemented">
                    <CheckCircle2 size={16} />
                    <span>Implemented Functionality</span>
                  </div>
                  <ul className="features-list">
                    {project.features.implemented.map((f, idx) => (
                      <li key={idx}>
                        <span className="dot"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.features.planned && project.features.planned.length > 0 && (
                  <div className="features-col">
                    <div className="features-heading planned">
                      <Layers size={16} />
                      <span>Planned Enhancements</span>
                    </div>
                    <ul className="features-list planned-list">
                      {project.features.planned.map((f, idx) => (
                        <li key={idx}>
                          <span className="dot planned-dot"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Engineering Challenges & Takeaways */}
              <div className="takeaways-grid">
                <div className="takeaway-card">
                  <h5>Engineering Challenges</h5>
                  <ul>
                    {project.challenges.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="takeaway-card">
                  <h5>Technical Lessons</h5>
                  <ul>
                    {project.whatILearned.map((l, i) => (
                      <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default FeaturedProject;
