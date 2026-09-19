import React, { useState } from "react";
import { personalInfo } from "../../data/personal";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Contacts</p>
          <h2>
            Have a project?<br />
            Let's talk!
          </h2>
          <div style={{ marginBottom: "24px" }}>
            <a className="btn btn-main" href={personalInfo.emailHref}>
              Email me
            </a>
          </div>

          {/* Quick contact information list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "24px", color: "var(--muted)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Mail size={18} color="var(--accent)" />
              <a href={personalInfo.emailHref} style={{ color: "inherit", textDecoration: "none" }}>
                {personalInfo.email}
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Phone size={18} color="var(--accent)" />
              <a href={personalInfo.phoneHref} style={{ color: "inherit", textDecoration: "none" }}>
                {personalInfo.phone}
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <MapPin size={18} color="var(--accent)" />
              <span>{personalInfo.location} ({personalInfo.relocation})</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: "var(--bg-elevated)",
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                textAlign: "center",
              }}
            >
              <CheckCircle size={40} color="#22c55e" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: "1.25rem", color: "var(--text)", marginBottom: "8px" }}>
                Message Received
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
                Thank you, {formData.name || "there"}! You can also email directly at{" "}
                <a href={personalInfo.emailHref} style={{ color: "var(--accent)" }}>
                  {personalInfo.email}
                </a>.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="btn btn-main" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
