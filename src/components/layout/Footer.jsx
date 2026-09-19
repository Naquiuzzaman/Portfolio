import React from "react";
import { personalInfo } from "../../data/personal";
import { SocialLinks } from "../common/SocialLinks";
import { ArrowUp } from "lucide-react";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="section-inner footer-inner">
        {/* Main Footer Content */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#top" className="footer-logo" aria-label="Go to top">
              <span className="footer-name">{personalInfo.name}</span>
              <span className="nav-logo-badge">dev</span>
            </a>
            <div className="footer-role">{personalInfo.roleHeadline}</div>
            <p className="footer-bio">
              Building practical web experiences with modern full-stack technologies
              and applied AI. Focused on engineering discipline, scalable architectures, and clean code.
            </p>
          </div>

          <div className="footer-nav-col">
            <div className="footer-col-heading">NAVIGATION</div>
            <ul className="footer-nav-links">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-connect-col">
            <div className="footer-col-heading">CONNECT</div>
            <div className="footer-socials-wrapper">
              <SocialLinks variant="all" showLabels={true} itemClassName="footer-social-pill" />
            </div>
            <a href="#top" className="footer-back-to-top" aria-label="Scroll back to top">
              <ArrowUp size={15} />
              <span>Back to top</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech Details */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="footer-tech-stack">
            <span>Built with React + Vite</span>
            <span className="footer-sep">•</span>
            <span>Jamia Hamdard University</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
