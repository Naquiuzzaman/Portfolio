import React, { useState, useEffect } from "react";
import { personalInfo } from "../../data/personal";
import { SocialLinks } from "../common/SocialLinks";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = ["top", "about", "skills", "projects", "experience", "education", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock on mobile drawer open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#top" className="nav-logo" aria-label="Go to top">
          <span>{personalInfo.name}</span>
          <span className="nav-logo-badge">dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-desktop-links">
            {navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-resume"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume PDF"
          >
            <FileText size={15} />
            <span>Resume</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.aside
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              aria-label="Mobile Navigation Drawer"
            >
              <div className="mobile-drawer-header">
                <span className="nav-logo">
                  <span>{personalInfo.name}</span>
                  <span className="nav-logo-badge">dev</span>
                </span>
                <button
                  type="button"
                  className="mobile-menu-toggle"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{ display: "inline-flex" }}
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="mobile-drawer-links">
                {navItems.map((item) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = activeSection === targetId;
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className={`mobile-drawer-link ${isActive ? "active" : ""}`}
                        onClick={handleNavClick}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "20px" }}>
                <a
                  href={personalInfo.resumeUrl}
                  className="btn btn-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                  <ArrowUpRight size={15} />
                </a>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Connect
                  </div>
                  <SocialLinks variant="primary" />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
