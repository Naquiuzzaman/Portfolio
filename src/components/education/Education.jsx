import React from "react";
import { education } from "../../data/education";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-inner">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: "680px", marginBottom: "52px" }}>
          <div className="section-eyebrow">Academic Foundation</div>
          <h2 className="section-title">Education & Core Coursework</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", marginTop: "12px", lineHeight: "1.7" }}>
            Formal computer science engineering curriculum focused on systems, algorithm design,
            relational databases, and intelligent software applications.
          </p>
        </div>

        {/* Education Degree Showcase Cards */}
        <div className="education-cards-wrapper">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-card-top">
                <div className="edu-institution-group">
                  <div className="edu-icon-box" aria-hidden="true">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="edu-institution-title">{edu.institution}</h3>
                    <div className="edu-degree-subtitle">{edu.degree}</div>
                    <div className="edu-location-line">
                      <MapPin size={13} style={{ marginRight: "4px" }} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="edu-metrics-group">
                  <div className="edu-cgpa-pill">
                    <Award size={15} style={{ marginRight: "6px" }} />
                    <span>CGPA: {edu.cgpa}</span>
                  </div>
                  <div className="edu-duration-line">
                    <Calendar size={13} style={{ marginRight: "5px" }} />
                    <span>Graduation: {edu.duration}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="edu-coursework-container">
                <div className="coursework-header">
                  <BookOpen size={16} color="var(--accent-hover)" />
                  <h4 className="coursework-title">Key Computer Science Coursework</h4>
                </div>

                <div className="coursework-chips-grid">
                  {edu.coursework.map((course) => (
                    <div key={course} className="coursework-chip">
                      <span className="course-dot"></span>
                      <span>{course}</span>
                    </div>
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
