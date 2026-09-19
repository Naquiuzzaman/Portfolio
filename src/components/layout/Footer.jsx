import React from "react";
import { personalInfo } from "../../data/personal";
import { SocialLinks } from "../common/SocialLinks";
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h3>{personalInfo.name}</h3>
      <p className="footer-tagline">
        Designed with care, all rights reserved for {personalInfo.name}.
      </p>

      <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
        <SocialLinks variant="all" />
      </div>

      <p className="footer-phone" style={{ marginTop: "12px" }}>
        <Phone size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
        <a href={personalInfo.phoneHref} style={{ color: "inherit", textDecoration: "none" }}>
          {personalInfo.phone}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
