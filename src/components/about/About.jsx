import React from "react";
import { personalInfo } from "../../data/personal";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <h2>About Me</h2>
        {personalInfo.bio.map((para, index) => (
          <p key={index}>{para}</p>
        ))}

        {personalInfo.quickStats && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            {personalInfo.quickStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--bg-elevated)",
                  padding: "16px 20px",
                  borderRadius: "8px",
                  border: "1px solid rgba(148, 163, 184, 0.12)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--text)", marginTop: "4px" }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
