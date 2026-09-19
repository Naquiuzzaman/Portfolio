import React from "react";
import { allSkillsList, skillCategories } from "../../data/skills";

export const Skills = () => {
  return (
    <section id="skills">
      {/* Existing horizontal skills bar */}
      <div className="skills" aria-label="Key Technologies">
        {allSkillsList.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      {/* Categorized skills matrix */}
      <div className="section-inner" style={{ paddingTop: "64px", paddingBottom: "32px" }}>
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "32px", textAlign: "center" }}>
          Technical Expertise
        </h2>
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
                background: "var(--bg-elevated)",
                padding: "24px",
                borderRadius: "10px",
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", color: "var(--text)" }}>
                {cat.category}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "16px" }}>
                {cat.description}
              </p>
              <div className="tags">
                {cat.skills.map((item) => (
                  <span
                    key={item.name}
                    style={{
                      border: item.highlight ? "1px solid rgba(255, 107, 74, 0.4)" : "none",
                      color: item.highlight ? "var(--text)" : "var(--muted)",
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
