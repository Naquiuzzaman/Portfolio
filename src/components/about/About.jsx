import React from "react";
import { personalInfo } from "../../data/personal";
import { education } from "../../data/education";
import { GraduationCap, Award, Calendar, MapPin, ArrowRight } from "lucide-react";

export const About = () => {
  const primaryEdu = education[0] || {};

  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-eyebrow">Background & Story</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Compact Education Card linking to #education */}
            <div className="education-preview-card">
              <div className="education-preview-badge">Academic Foundation</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: "600" }}>
                    {primaryEdu.institution}
                  </h3>
                  <div style={{ color: "var(--accent-hover)", fontSize: "0.92rem", marginTop: "2px" }}>
                    {primaryEdu.degree}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {primaryEdu.duration}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "#34d399", fontWeight: "600", marginTop: "2px" }}>
                    CGPA: {primaryEdu.cgpa}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "16px", display: "flex", justifyContent: "flex-end" }}>
                <a
                  href="#education"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <span>Explore Coursework & Education</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div>
            <div className="stats-grid">
              <div className="stat-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--accent-hover)" }}>
                  <GraduationCap size={18} />
                  <span className="stat-label" style={{ marginBottom: 0 }}>Degree</span>
                </div>
                <div className="stat-value">B.Tech CS</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Computer Science
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--accent-hover)" }}>
                  <MapPin size={18} />
                  <span className="stat-label" style={{ marginBottom: 0 }}>University</span>
                </div>
                <div className="stat-value">Jamia Hamdard</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  New Delhi, India
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--accent-hover)" }}>
                  <Calendar size={18} />
                  <span className="stat-label" style={{ marginBottom: 0 }}>Graduation</span>
                </div>
                <div className="stat-value">June 2027</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Expected
                </div>
              </div>

              <div className="stat-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "#34d399" }}>
                  <Award size={18} />
                  <span className="stat-label" style={{ marginBottom: 0 }}>Standing</span>
                </div>
                <div className="stat-value" style={{ color: "#34d399" }}>7.6 / 10</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                  Current CGPA
                </div>
              </div>
            </div>

            {/* Subtle personality highlight */}
            <div
              style={{
                marginTop: "20px",
                padding: "16px 20px",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px dashed var(--border)",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}
            >
              "Disciplined about code quality, driven by scalable architecture, and passionate about turning ideas into real-world software."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
