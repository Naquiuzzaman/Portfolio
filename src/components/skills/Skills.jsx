import React from "react";
import { allSkillsList, skillCategories } from "../../data/skills";
import { Code2, Layout, Server, Database, Sparkles, Terminal } from "lucide-react";

const iconMap = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  sparkles: Sparkles,
};

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      {/* Top Quick-Glance Ticker Bar */}
      <div className="skills-strip-wrapper">
        <div className="skills" aria-label="Core Technologies Ticker">
          {allSkillsList.map((skill) => (
            <span key={skill}>
              <span className="ticker-dot" aria-hidden="true">•</span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="section-inner" style={{ paddingTop: "88px", paddingBottom: "72px" }}>
        {/* Section Heading */}
        <div className="section-header" style={{ maxWidth: "680px", marginBottom: "52px" }}>
          <div className="section-eyebrow">Technical Toolkit</div>
          <h2 className="section-title">Technologies I Build With</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", marginTop: "12px", lineHeight: "1.7" }}>
            The core tools, languages, and frameworks I use across academic coursework,
            full-stack development, applied AI experimentation, and practical software projects.
          </p>
        </div>

        {/* 5-Category Technical Matrix */}
        <div className="skills-matrix-grid">
          {skillCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Terminal;
            return (
              <div key={cat.id} className="skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon" aria-hidden="true">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{cat.category}</h3>
                    <p className="skill-cat-desc">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Chips Grid */}
                <div className="skill-chips-list">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`skill-chip ${skill.highlight ? "highlighted" : ""}`}
                    >
                      <div className="skill-chip-name">{skill.name}</div>
                      <div className="skill-chip-meta">
                        {skill.note && (
                          <div className="skill-chip-note">{skill.note}</div>
                        )}
                        {skill.usedIn && (
                          <div className="skill-chip-usedin" title={`Demonstrated in: ${skill.usedIn}`}>
                            <span className="usedin-label">Applied:</span> {skill.usedIn}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
