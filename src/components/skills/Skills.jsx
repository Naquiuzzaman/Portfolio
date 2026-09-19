import React from "react";
import { allSkillsList, skillCategories } from "../../data/skills";

export const Skills = () => {
  return (
    <section id="skills">
      {/* Horizontal skills ticker bar */}
      <div className="skills-strip-wrapper">
        <div className="skills" aria-label="Key Technologies">
          {allSkillsList.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Categorized skills matrix */}
      <div className="section-inner" style={{ paddingTop: "80px", paddingBottom: "48px" }}>
        <div className="section-header" style={{ textAlign: "center" }}>
          <div className="section-eyebrow">Technical Competencies</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              style={{
                background: "var(--surface-elevated)",
                padding: "24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "var(--text-primary)" }}>
                {cat.category}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "16px" }}>
                {cat.description}
              </p>
              <div className="tags">
                {cat.skills.map((item) => (
                  <span
                    key={item.name}
                    style={{
                      border: item.highlight ? "1px solid var(--border-accent)" : "1px solid var(--border)",
                      color: item.highlight ? "var(--text-primary)" : "var(--text-secondary)",
                      background: item.highlight ? "var(--accent-subtle)" : "var(--surface-card)",
                    }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
