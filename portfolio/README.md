# Ayomikun Adaramola — Data Engineer Portfolio

A modern, production-ready portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.
Designed to showcase data engineering expertise, projects, and technical skills to recruiters and hiring managers.

---

## ✨ Features

- **Dark / Light mode** toggle with smooth transitions
- **Responsive** — mobile, tablet, and desktop optimised
- **7 project pages** with architecture diagrams and full engineering breakdowns
- **Framer Motion** scroll animations and micro-interactions
- **Pipeline diagrams** rendered as interactive SVGs per project
- **SEO optimised** — Open Graph, Twitter Card, sitemap, robots.txt, semantic HTML
- **Accessible** — ARIA labels, focus states, keyboard navigation
- **Scroll-to-top** button and smooth section scrolling

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css          # CSS variables, custom utilities, Google Fonts
│   ├── layout.tsx           # Root layout with SEO metadata and ThemeProvider
│   ├── loading.tsx          # App-level loading animation
│   ├── not-found.tsx        # Global 404 page
│   ├── page.tsx             # Home page (all sections)
│   ├── robots.ts            # Robots.txt generator
│   ├── sitemap.ts           # Sitemap generator
│   └── projects/
│       └── [slug]/
│           ├── page.tsx          # Dynamic project detail page
│           └── not-found.tsx     # Project-specific 404
│
├── components/
│   ├── Navbar.tsx               # Sticky navbar with theme toggle + mobile menu
│   ├── Hero.tsx                 # Hero section with profile image and CTAs
│   ├── About.tsx                # Bio, stats, and expertise highlights
│   ├── Skills.tsx               # Skill categories with animated progress bars
│   ├── TechStack.tsx            # Interactive tech stack card grid
│   ├── Projects.tsx             # Featured project cards with diagram previews
│   ├── Experience.tsx           # Timeline-style experience section
│   ├── Certifications.tsx       # Certification cards with status indicators
│   ├── GitHubStats.tsx          # Contribution graph and repo showcase
│   ├── Testimonials.tsx         # Testimonial cards
│   ├── Contact.tsx              # Contact form + info links
│   ├── Footer.tsx               # Footer with nav, socials, copyright
│   ├── PipelineDiagram.tsx      # SVG pipeline architecture diagrams (6 types)
│   ├── ProjectDetailClient.tsx  # Full project detail layout (client component)
│   ├── SectionHeader.tsx        # Reusable animated section header
│   ├── ScrollToTop.tsx          # Floating scroll-to-top button
│   └── ThemeProvider.tsx        # next-themes dark/light provider
│
├── lib/
│   ├── projects.ts          # All project data (source of truth)
│   └── utils.ts             # cn(), animation variants, helpers
│
├── public/
│   ├── profile.jpg                     # Your professional photo
│   └── Ayomikun_Adaramola_Resume.pdf   # ← Place your resume PDF here
│
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18.17+ ([download](https://nodejs.org))
- npm, yarn, or pnpm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start the development server
npm run dev
# or
yarn dev

# 4. Open in your browser
# http://localhost:3000
```

---

## 📦 Building for Production

```bash
# Build the optimised production bundle
npm run build

# Run the production server locally to test
npm start
```

---

## ☁️ Deploying to Vercel

The fastest way to deploy is directly via Vercel (zero config required).

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel

# For production deployment
vercel --prod
```

### Option B — GitHub Integration (recommended)

1. Push your portfolio to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Custom Domain

In your Vercel project → **Settings → Domains**, add your custom domain (e.g. `ayomikun.dev`).
Update the `baseUrl` in `app/sitemap.ts` and `app/robots.ts` to match.

---

## 📝 Adding Your Resume PDF

1. Export your resume as a PDF named `Ayomikun_Adaramola_Resume.pdf`
2. Place it in the `/public/` folder:
   ```
   public/Ayomikun_Adaramola_Resume.pdf
   ```
3. It will automatically be served at `/Ayomikun_Adaramola_Resume.pdf`
   and linked from the **Download Resume** and **Resume** navbar buttons.

---

## 🔧 Customising Projects

All project data lives in `lib/projects.ts`. To add, edit, or remove a project:

```ts
// lib/projects.ts
export const projects: Project[] = [
  {
    slug: 'my-new-project',          // URL: /projects/my-new-project
    title: 'My New Project',
    category: 'Cloud Data Engineering',
    shortDescription: 'Brief description shown on project cards.',
    description: 'Full description for the detail page.',
    problem: 'The business problem this solved.',
    solution: 'How you engineered the solution.',
    impact: 'Measurable business impact and results.',
    tools: ['Python', 'AWS', 'BigQuery'],
    github: 'https://github.com/...',
    live: 'https://...',             // Optional
    featured: true,                  // Shows on home page cards
    year: '2024',
    diagramType: 'etl',              // 'etl' | 'realtime' | 'batch' | 'spark' | 'analytics' | 'water'
  },
]
```

Available `diagramType` values:

| Type | Description |
|---|---|
| `etl` | AWS S3 → Glue → Lambda → Athena → Dashboard |
| `realtime` | Lambda → DynamoDB → Streams → S3 → Snowpipe → Snowflake |
| `batch` | Source → GCS → Mage AI → BigQuery → Looker |
| `spark` | CSV → Spark DataFrames → Transform → Insights |
| `analytics` | Raw DB → SQL CTEs → Aggregations → Reports |
| `water` | Dataset → Cleaning → Stats → Visualisation → SDG |

---

## 🎨 Customising the Design

### Colours
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --accent: #00C4A7;          /* Light mode accent */
}
.dark {
  --accent: #00F5D4;          /* Dark mode accent */
  --bg-primary: #050B18;      /* Dark background */
}
```

### Fonts
Currently uses **Syne** (headings) + **DM Sans** (body) + **JetBrains Mono** (code).
Swap by editing the Google Fonts import at the top of `app/globals.css`.

### Personal Information
Update these files:
- `app/layout.tsx` — SEO metadata (title, description, OG image)
- `components/Hero.tsx` — name, title, tagline, social links
- `components/About.tsx` — bio text and stats
- `components/Experience.tsx` — your work history
- `components/Contact.tsx` — email, LinkedIn, GitHub
- `components/Footer.tsx` — social links and branding

---

## 🔒 Environment Variables

No environment variables are required by default.

If you add a contact form backend (e.g. Resend, Formspree), create a `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
```

---

## 📊 Analytics (Optional)

To add Vercel Analytics:

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react'

// Inside <body>:
<Analytics />
```

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| `Module not found: clsx` | Run `npm install` again |
| Profile image not showing | Ensure `public/profile.jpg` exists |
| Dark mode not persisting | Clear browser localStorage and reload |
| Fonts not loading | Check internet connection (fonts load from Google CDN) |

---

## 📄 License

MIT — feel free to use this as a template for your own portfolio.

---

Built by **Ayomikun Adaramola** · [LinkedIn](https://www.linkedin.com/in/ayomikun-adaramola-) · [GitHub](https://github.com/Stephen-delAyo)
