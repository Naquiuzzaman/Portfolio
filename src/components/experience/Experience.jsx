import React from "react";
import { experiences, hackathons } from "../../data/experience";
import { Users, Trophy, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: "680px", marginBottom: "52px" }}>
          <div className="section-eyebrow">Experience & Leadership</div>
          <h2 className="section-title">Where I Have Applied My Skills</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", marginTop: "12px", lineHeight: "1.7" }}>
            Engineering solutions, building community web tools, and collaborating with developers
            to create measurable real-world impact.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="experience-cards-wrapper">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="exp-card-header">
                <div className="exp-role-group">
                  <div className="exp-icon-box" aria-hidden="true">
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-org-name">{exp.organization}</div>
                  </div>
                </div>

                <div className="exp-meta-group">
                  <div className="exp-period-pill">
                    <Calendar size={13} style={{ marginRight: "5px" }} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="exp-location">
                    <MapPin size={13} style={{ marginRight: "4px" }} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Impact Contributions */}
              <div className="exp-contributions">
                <h4 className="contributions-eyebrow">Key Contributions & Measurable Impact</h4>
                <ul className="contributions-list">
                  {exp.contributions.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="item-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="exp-tech-footer">
                <span className="tech-label">Applied Technologies:</span>
                <div className="tags">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons & Competitions Row */}
        {hackathons && hackathons.length > 0 && (
          <div className="hackathons-container">
            <div className="hackathons-header">
              <Trophy size={18} color="var(--accent-hover)" />
              <h3 className="hackathons-title">Hackathons & Engineering Competitions</h3>
            </div>

            <div className="hackathons-grid">
              {hackathons.map((h, i) => (
                <div key={i} className="hackathon-card">
                  <div className="hackathon-badge">Competition</div>
                  <h4 className="hackathon-name">{h.name}</h4>
                  <div className="hackathon-role">{h.role}</div>
                  <p className="hackathon-focus">{h.focus}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
