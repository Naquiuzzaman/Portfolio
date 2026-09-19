import React from "react";
import { personalInfo } from "../../data/personal";
import { SocialLinks } from "../common/SocialLinks";
import profileWebp from "../../assets/images/profile.webp";

export const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Hello.<br />
            I'm <span>{personalInfo.name}</span><br />
            {personalInfo.title}
          </h1>
          <p>{personalInfo.roleHeadline}</p>
          <div className="hero-actions">
            <a className="btn btn-main" href="#contact">
              Got a project?
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="btn btn-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>

          <div style={{ marginTop: "24px" }}>
            <SocialLinks variant="primary" />
          </div>
        </div>

        <div className="hero-img">
          <div className="hero-stack" style={{ position: "relative" }}>
            <div className="hero-photo-row" style={{ position: "relative" }}>
              <div className="img-ring">
                <img
                  src={profileWebp}
                  alt={`${personalInfo.name} profile`}
                  loading="eager"
                />
              </div>
              <div className="chevron left" aria-hidden="true">&lt;</div>
              <div className="chevron right" aria-hidden="true">&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
