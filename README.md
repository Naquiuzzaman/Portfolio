# Md Naquiuzzaman — Developer Portfolio

A modern, high-performance, dark-mode developer portfolio engineered with **React 19**, **Vite**, and **Vanilla CSS**. Designed specifically to showcase technical projects, applied AI implementations, systems coursework, and verified development experience for technical recruiters and engineering teams.

---

## Technical Stack

- **Core Framework**: React 19 + Vite 8
- **Styling Architecture**: Vanilla CSS with custom design tokens, high-contrast dark theme, and fluid responsive layouts
- **Animation & Transitions**: Framer Motion 12 (orchestrated stagger transitions, accessible reduced-motion support)
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Deployment Platform**: Vercel Production

---

## Key Features

- **Hero & Personal Brand**: High-impact value proposition highlighting full-stack software development, applied AI, and real-world problem solving.
- **Projects & Technical Case Studies**:
  - **HelpLocal AI** *(Flagship)*: Full-stack AI community triage platform powered by Google Gemini API and Firebase Firestore.
  - **SalahTime Web App**: Zero-dependency, GPS-synchronized astronomical calculator utilizing native browser Geolocation APIs.
  - **Vandor Real Estate Platform**: Full-stack MERN platform with reactive filter engines and custom RESTful endpoints.
  - **Raw Material Management System**: Enterprise inventory ledger application for real-time stock control.
- **Skills → Project Association**: Connects declared technologies directly to verified project codebases.
- **Experience & Leadership**: Verified track record with the Google Developer Student Club (GDSC) Tech Team and hackathon achievements.
- **Academic Foundation**: Computer Science Engineering at Jamia Hamdard University (B.Tech., expected 2027, CGPA: 7.6 / 10).
- **Recruiter Conversion Flow**: 1-click verified resume download (`/resume.pdf`), 1-click clipboard email copy, and direct LinkedIn / GitHub channels.
- **SEO & Accessibility**: Semantic HTML5 hierarchy, OpenGraph metadata, valid `schema.org/Person` JSON-LD structured data, `:focus-visible` keyboard accessibility, and `prefers-reduced-motion` compliance.

---

## Project Structure

```text
├── public/
│   ├── favicon.svg          # Custom SVG favicon
│   ├── profile.webp         # Optimized WebP candidate headshot
│   └── resume.pdf           # Verified official resume PDF
├── src/
│   ├── assets/              # WebP visual assets & architecture diagrams
│   ├── components/
│   │   ├── about/           # Background, narrative & academic preview
│   │   ├── common/          # Reusable UI elements (SocialLinks, etc.)
│   │   ├── contact/         # Direct contact channels, clipboard action & links
│   │   ├── education/       # Degree details, coursework chips & standing
│   │   ├── experience/      # GDSC Tech Team impact metrics & hackathons
│   │   ├── hero/            # Brand presentation, live project card & CTAs
│   │   ├── layout/          # Sticky Navbar with mobile drawer & Footer
│   │   ├── projects/        # Flagship case study & secondary project cards
│   │   └── skills/          # 5-domain technical matrix with project linkages
│   ├── data/                # Single source of truth datasets (zero mock data)
│   ├── styles/
│   │   └── index.css        # Unified design system & responsive rules
│   ├── App.jsx              # Root component orchestrating page sections
│   └── main.jsx             # React DOM entrypoint
├── index.html               # Semantic HTML shell with metadata & JSON-LD
├── package.json             # Project dependencies & scripts
├── vite.config.js           # Vite build & development configuration
└── README.md                # Engineering documentation
```

---

## Local Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- `npm` (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:Naquiuzzaman/Portfolio.git
cd Portfolio
npm install
```

### Run Locally

Launch the local development server with hot module replacement:

```bash
npm run dev
```

By default, the application runs at `http://localhost:3000`.

### Production Build

Create an optimized, minified production build:

```bash
npm run build
```

The output artifacts are emitted to the `dist/` directory.

### Preview Production Build

Serve the local production bundle to verify performance and asset resolution:

```bash
npm run preview
```

---

## Security & Verification Standards

- **Zero Secrets**: No API keys, credentials, or personal tokens are committed to source control.
- **Zero Mock Content**: All metrics, achievements, academic standing, and projects reflect real, verified work.
- **Zero Broken Links**: All actions resolve to live applications, verified social profiles, or local anchor targets; unavailable repositories display clear status badges.

---

## License

This project is open source and available under the [MIT License](LICENSE).
