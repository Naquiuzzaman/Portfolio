import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";
import { socialLinks } from "../../data/socials";
import { SocialLinks } from "../common/SocialLinks";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Calendar
} from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <motion.div
          className="contact-card-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="contact-header">
            <div className="section-eyebrow">LET'S CONNECT</div>
            <h2 className="contact-title">Have a Project or Opportunity in Mind?</h2>
            <p className="contact-subtitle">
              I am open to software engineering internships, technical collaborations,
              and full-time engineering opportunities. Whether you have an open role,
              want to review project architecture, or need a dedicated developer, feel free
              to reach out directly.
            </p>
          </div>

          {/* Contact Direct Cards Grid */}
          <div className="contact-channels-grid">
            {/* Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box" aria-hidden="true">
                <Mail size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">EMAIL DIRECT</span>
                <a
                  href={personalInfo.emailHref}
                  className="channel-value"
                  aria-label="Email Md Naquiuzzaman"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                type="button"
                className="channel-copy-btn"
                onClick={handleCopyEmail}
                aria-label={copied ? "Email copied to clipboard" : "Copy email address"}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                <span className="copy-tooltip">{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box" aria-hidden="true">
                <Phone size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">DIRECT PHONE</span>
                <a
                  href={personalInfo.phoneHref}
                  className="channel-value"
                  aria-label="Call Md Naquiuzzaman at +91 7779879534"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location & Relocation Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box" aria-hidden="true">
                <MapPin size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">LOCATION & RELOCATION</span>
                <span className="channel-text">
                  {personalInfo.location} • Open to immediate relocation
                </span>
              </div>
            </div>

            {/* Timeline & Availability Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-box" aria-hidden="true">
                <Calendar size={22} />
              </div>
              <div className="channel-info">
                <span className="channel-label">AVAILABILITY</span>
                <span className="channel-text">
                  Available for Summer 2025/2026 Internships & Engineering Roles
                </span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="contact-actions-row">
            <a
              href={personalInfo.emailHref}
              className="btn btn-primary contact-cta-btn"
              aria-label="Send an email to Md Naquiuzzaman"
            >
              <Send size={17} />
              <span>Email Me</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={personalInfo.resumeUrl}
              className="btn btn-secondary contact-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Md Naquiuzzaman's Resume PDF"
            >
              <FileText size={17} />
              <span>Download Resume</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social Profiles Direct Links */}
          <div className="contact-socials-wrapper">
            <div className="contact-socials-label">FIND ME ON PROFESSIONAL NETWORKS</div>
            <SocialLinks variant="all" showLabels={true} className="contact-socials-list" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
