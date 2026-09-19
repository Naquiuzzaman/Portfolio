import React from "react";
import { experiences, hackathons } from "../../data/experience";

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: "80px 0", borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
      <div className="section-inner">
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "36px" }}>
          Experience & Leadership
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: "var(--bg-elevated)",
                padding: "28px",
                borderRadius: "12px",
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--text)" }}>{exp.role}</h3>
                  <div style={{ color: "var(--accent)", fontWeight: "600", marginTop: "4px" }}>
                    {exp.organization}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    background: "rgba(148, 163, 184, 0.08)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              <ul style={{ paddingLeft: "20px", color: "var(--muted)", lineHeight: "1.8", marginTop: "16px" }}>
                {exp.contributions.map((item, i) => (
                  <li key={i} style={{ marginBottom: "8px" }}>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="tags" style={{ marginTop: "16px" }}>
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathons showcase */}
        {hackathons && hackathons.length > 0 && (
          <div style={{ marginTop: "48px" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "16px", color: "var(--text)" }}>
              Hackathons & Competitions
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {hackathons.map((h, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-elevated)",
                    padding: "16px 20px",
                    borderRadius: "8px",
                    border: "1px solid rgba(148, 163, 184, 0.12)",
                    flex: "1 1 260px",
                  }}
                >
                  <div style={{ fontWeight: "600", color: "var(--text)" }}>{h.name}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "4px" }}>
                    {h.focus}
                  </div>
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
