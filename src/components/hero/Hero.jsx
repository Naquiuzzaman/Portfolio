import React from "react";
import { personalInfo } from "../../data/personal";
import { SocialLinks } from "../common/SocialLinks";
import profileWebp from "../../assets/images/profile.webp";
import { ArrowDown, ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
  },
};

const floatingCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
  },
};

export const Hero = () => {
  return (
    <section className="hero-section" id="top">
      <div className="section-inner">
        <div className="hero-grid">
          {/* Left Column: Personal Brand Identity */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Status Pill */}
            <motion.div variants={itemVariants}>
              <div className="availability-pill">
                <span className="availability-dot" aria-hidden="true"></span>
                <span>{personalInfo.availability}</span>
              </div>
            </motion.div>

            {/* Greeting & Headline */}
            <motion.div variants={itemVariants} className="hero-eyebrow">
              Hi, I'm
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-name">
              <span>{personalInfo.name}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-title">
              {personalInfo.roleHeadline}
            </motion.div>

            <motion.p variants={itemVariants} className="hero-desc">
              I build intelligent web applications and robust backend services that
              turn real-world problems into scalable, user-centric digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                <span>Download Resume</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Primary Social Media Shortcuts */}
            <motion.div variants={itemVariants}>
              <SocialLinks variant="primary" />
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Presentation & Floating Project Card */}
          <div className="hero-visual">
            <motion.div
              className="profile-card-wrapper"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile Image Frame */}
              <div className="profile-image-frame">
                <img
                  src={profileWebp}
                  alt={`${personalInfo.name} — Full-Stack Developer headshot`}
                  loading="eager"
                  decoding="async"
                  width="764"
                  height="906"
                />
              </div>

              {/* Floating Real-World Project Card */}
              <motion.a
                href="https://help-hub-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-floating-card"
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                aria-label="View HelpLocal AI live project"
              >
                <div className="eyebrow">
                  <Sparkles size={12} style={{ display: "inline", marginRight: "4px" }} />
                  Currently Building
                </div>
                <div className="project-name">
                  <span>HelpLocal AI</span>
                  <ArrowUpRight size={14} color="var(--accent-hover)" />
                </div>
                <div className="project-summary">
                  AI-powered local business discovery platform
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
