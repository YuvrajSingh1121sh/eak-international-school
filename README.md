# EAK International School Website Redesign

> **Tagline:** “Where Curiosity Becomes Excellence”  
> **Brand Palette:** Forest Green (`#173F35`), Warm Ivory (`#F7F5EF`), Muted Gold (`#C5A568`), Charcoal (`#252A27`)  
> **Typography:** Playfair Display (Serif Headings) & Plus Jakarta Sans (Sans-serif Body)  
> **Curriculum:** Cambridge Assessment International Education (IGCSE & A-Levels) & IB Candidate  

---

## 🏫 Project Overview
This repository contains the complete frontend website redesign for the fictional **EAK International School**, an 18-acre K–12 world school founded in 1998 on Royal Palm Boulevard. The application is built with modern, production-grade frontend practices emphasizing visual hierarchy, responsive layout, fluid interactivity, and accessibility standards.

---

## 🚀 Technology Stack
- **Framework:** React 19 + Vite 8
- **Language:** JavaScript & JSX
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom theme tokens
- **Routing:** React Router DOM v7 (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`)
- **Icons:** Lucide React
- **Linter:** Oxlint (0 errors, 0 warnings)
- **Data Model:** Structured centralized fictional repository (`src/data/schoolData.js`)

---

## 📑 Completed Pages & Features

### 1. Home Page (`/`)
- Hero section with high-resolution photography, tagline, and prominent dual CTAs
- **Trust Metrics Bar:** 28+ Years of Heritage, 1:10 Ratio, 100% University Placement, 38+ Nationalities
- **Why Choose Us:** 6 distinctive institutional strengths with custom iconography
- **About Preview:** Legacy snippet with the 3 pillars (Intellectual Depth, Moral Compass, Global Leadership)
- **Academic Stages Overview:** Primary, Middle, Secondary, and Senior Secondary cards
- **Facilities Showcase:** Visual previews with technical specifications and modal triggers
- **Academic & Athletic Achievements:** 94.8% IGCSE distinction, National STEM championship, $4.2M scholarships
- **Principal's Message & Portrait:** Dr. Elizabeth Vance, D.Phil (Oxford) welcoming letter
- **Latest News & Notices:** Live circular cards with category badges and modal memo viewer
- **Upcoming Events:** Calendar date blocks, times, venues, and add-to-calendar simulation
- **Community Testimonials:** Interactive carousel featuring parents and alumni
- **Admissions Banner:** Direct portal access and fast-track application link

### 2. About Page (`/about`)
- Fictional founding story from 1998 to 2026 present
- **Milestone Timeline:** Interactive historical roadmap across 6 key eras
- **Vision, Mission & 5 Core Values:** Integrity, Curiosity, Resilience, Inclusivity, and Stewardship
- **Principal’s Extended Welcome Letter:** Academic philosophy and signature
- **Senior Leadership Roster:** Credentials and bios for Heads of School, Academics, Primary, and Pastoral Care
- **Interactive Campus Tour:** Tabbed zone explorer (Quad, Science Wing, Athletic Arena, Arts Centre)
- Accreditations: Cambridge UK842, IB Candidate, CIS Member, Eco-Schools Green Flag

### 3. Academics Page (`/academics`)
- **Interactive Stage Deep-Dive:** Tabbed switcher for Primary Years (Grades 1–5), Middle School (Grades 6–8), Cambridge IGCSE (Grades 9–10), and Cambridge A-Levels (Grades 11–12)
- Curricular focus disciplines, assessment paradigms, and student life highlights
- **Teaching Methodology:** Harkness discussion tables, experiential inquiry, STEAM synthesis, Individualized Learning Plans
- **Co-Curriculars:** 6 highlighted clubs from Turing Robotics to Symphonic Orchestra and Model UN
- **Global University Matriculation:** 100% university acceptance with Ivy League, Oxbridge, and Russell Group destinations

### 4. Admissions Page (`/admissions`)
- **5-Step Admissions Roadmap:** Enquiry → Application → Interaction/Assessment → Selection → Enrollment
- **Eligibility & Age Matrix Table:** Grade-by-grade cutoffs calculated as of September 1
- **Interactive Required Documents Checklist:** Parents can check off items as they prepare records
- **Important Dates & Deadlines:** Rolling application calendar for AY 2026–2027
- **Founder's Crest Scholarship:** Merit and need-based tuition assistance details
- **Interactive Online Application Form:** Full client-side validation, error handling, and demonstration success state with generated application reference (`#EAK-2026-XXXX`)
- **Admissions FAQ Accordion:** Working collapsible answers to common parental questions

### 5. Facilities Page (`/facilities`)
- **Image-Led Gallery with Filtering:** All, Learning Spaces, Laboratories, Sports & Fitness, Arts & Culture, Campus Living
- Technical specs, ergonomic features, student capacities, and safety compliance for 10 facilities
- **Proposed Hostel Facility:** "The Pavilion Boarding House" clearly flagged with a dedicated disclaimer as a *Fictional Proposed Facility (Phase II)*
- **Facility Lightbox Modal:** Full-bleed image preview, equipment checklist, and direct tour booking

### 6. Events & Notices Page (`/events-notices`)
- **Live Search Bar:** Instant keyword search by title, summary, or circular reference code
- **Multi-Category Filter:** All, Academic, Admissions, Cultural, Sports, Holiday, Circulars
- **Content Type Filter:** All, Circulars only, Events only
- **View Switcher:** Responsive Grid Card view vs. Official Circular Memorandum Table view
- **Official Memo Modal:** Official letterhead format, target audience, printable memo, and simulated PDF download
- **Simulation Actions:** Add to calendar and download PDF action feedback toasts
- **Pagination / Load More:** Progressive display of dummy circulars and events

### 7. Contact Page (`/contact`)
- School directory: physical address, direct phone lines, emergency line, email inboxes, and office hours
- **Interactive Contact Form:** Client-side validation, character rules, and demo submission state with reference docket (`#INQ-2026-XXXX`) without claiming actual message dispatch
- **Visual Schematic Campus Map:** Custom SVG map illustration detailing visitor gates, parking zones, and airport connectivity
- **Departmental Extensions:** Direct contacts for Admissions, Registrar, Transport, and Infirmary

---

## 🛠️ Commands to Run & Build

```bash
# Navigate to project directory
cd "C:\Users\maniy\.gemini\antigravity\scratch\eak-international-school"

# Install dependencies (already installed)
npm install

# Run Vite development server
npm run dev

# Run linting check
npm run lint

# Compile production build
npm run build

# Preview production build locally
npm run preview
```

---

## ♿ Accessibility & Responsiveness
- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`.
- **Keyboard Navigation & Focus Rings:** High-visibility gold focus rings (`focus-visible:ring-2 focus-visible:ring-[#C5A568]`) on all interactive controls.
- **Color Contrast:** Strict compliance with WCAG AA guidelines for forest green, charcoal, gold, and ivory combinations.
- **Screen Readers:** Meaningful `alt` text on images and descriptive `aria-label` attributes on buttons and modals.
- **Responsive Layout:** Fluid breakpoints tested across Mobile (360px–480px), Tablet (768px), Laptop (1024px), and Desktop (1280px+).

---

## ⚠️ Fictional Disclaimer
EAK International School is a fictional academic institution created for demonstration purposes. All personal names, achievements, circular codes, and contact data are simulated. No real email or payment transactions are processed.
