/**
 * Verified Social Media & Contact Links
 * Display Strategy:
 * - Primary: GitHub, LinkedIn, Email (Hero, Navigation, Contact, Footer)
 * - Secondary: X/Twitter, Instagram (Footer & Secondary Socials only)
 */

export const socialLinks = {
  primary: [
    {
      name: "GitHub",
      url: "https://github.com/Naquiuzzaman",
      handle: "Naquiuzzaman",
      icon: "github",
      isExternal: true,
      ariaLabel: "View Naquiuzzaman's GitHub Profile"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-naquiuz-zaman-44967a294",
      handle: "md-naquiuz-zaman",
      icon: "linkedin",
      isExternal: true,
      ariaLabel: "Connect with Md Naquiuzzaman on LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:naquiuzzaman01@gmail.com",
      handle: "naquiuzzaman01@gmail.com",
      icon: "mail",
      isExternal: false,
      ariaLabel: "Send an email to naquiuzzaman01@gmail.com"
    }
  ],
  secondary: [
    {
      name: "X (Twitter)",
      url: "https://x.com/MarhabaTabish",
      handle: "@MarhabaTabish",
      icon: "twitter",
      isExternal: true,
      ariaLabel: "Follow on X/Twitter"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i_am_marhaba007",
      handle: "@i_am_marhaba007",
      icon: "instagram",
      isExternal: true,
      ariaLabel: "View Instagram Profile"
    }
  ],
  contactDirect: {
    email: "naquiuzzaman01@gmail.com",
    emailHref: "mailto:naquiuzzaman01@gmail.com",
    phone: "+91 7779879534",
    phoneHref: "tel:+917779879534"
  }
};

export default socialLinks;
