# architecture.md — Lexora Law Associates

## 1. Architecture
Single-page application (SPA), fully static, no backend (demo).

- **Router**: React Router DOM — pages Home, Practice Areas, Attorneys, Contact
- **Layout**: `Layout` wraps `Navbar`, page content, `Footer`, `FloatingWhatsApp`
- **Sections** (Home) are independent components fed by a single `data/content.js` file, so the firm's content can be swapped without touching UI code
- **Contact form**: controlled component with client-side validation; on submit shows a success state (no network call) and offers a WhatsApp deep-link with the form details pre-filled
- **Styling**: Tailwind utility classes with theme colors defined in `tailwind.config.js` (navy, gold, paper); Minimalism + Bento Grid layout; a small block in `index.css` for things Tailwind can't express (scroll reveal, accordion animation)

## 2. Folder & File Structure
```
lexora-law/
├─ docs/
│  ├─ PRD.md
│  ├─ architecture.md
│  └─ phases.doc.md
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ data/content.js
   ├─ components/
   │  ├─ Navbar.jsx
   │  ├─ Footer.jsx
   │  ├─ FloatingWhatsApp.jsx
   │  ├─ SectionHeading.jsx
   │  ├─ Hero.jsx
   │  ├─ StatsStrip.jsx
   │  ├─ PracticeBento.jsx
   │  ├─ Process.jsx
   │  ├─ AttorneyCard.jsx
   │  ├─ Testimonials.jsx
   │  ├─ Faq.jsx
   │  └─ ConsultationForm.jsx
   └─ pages/
      ├─ Home.jsx
      ├─ PracticeAreas.jsx
      ├─ Attorneys.jsx
      └─ Contact.jsx
```

## 3. Tech Stack
- React 18 + Vite
- Tailwind CSS 3
- React Router DOM 6
- Fonts: Playfair Display (headings) + Inter (body), via Google Fonts
- UI styles: Minimalism + Bento Grid
- Deployment target: any static host (Netlify, Vercel, Hostinger)
