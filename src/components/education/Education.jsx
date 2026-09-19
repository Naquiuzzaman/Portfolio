import React from "react";
import { education } from "../../data/education";

export const Education = () => {
  return (
    <section id="education" style={{ padding: "80px 0", borderTop: "1px solid rgba(148, 163, 184, 0.08)" }}>
      <div className="section-inner">
        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", marginBottom: "36px" }}>
          Education & Academic Background
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {education.map((edu, index) => (
            <div
              key={index}
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
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.35rem", color: "var(--text)" }}>{edu.institution}</h3>
                  <div style={{ color: "var(--accent)", fontSize: "1.05rem", fontWeight: "600", marginTop: "4px" }}>
                    {edu.degree}
                  </div>
                  <div style={{ color: "var(--muted)", fontSize: "0.9rem", marginTop: "4px" }}>
                    {edu.location} • {edu.currentYear}
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      background: "rgba(34, 197, 94, 0.15)",
                      color: "#22c55e",
                      padding: "6px 14px",
                      borderRadius: "999px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      display: "inline-block",
                    }}
                  >
                    CGPA: {edu.cgpa}
                  </span>
                  <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "6px" }}>
                    Graduation: {edu.duration}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "24px" }}>
                <h4 style={{ fontSize: "0.95rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Key Coursework
                </h4>
                <div className="tags">
                  {edu.coursework.map((course) => (
                    <span key={course}>{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
