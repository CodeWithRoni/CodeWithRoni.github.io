# CodeWithRoni — Developer Portfolio

A modern, responsive portfolio for **Md. Amzad Hossain Roni**, built with **React 18 + Vite 5 + CSS** and deployed using **GitHub Pages**.

**Live website:** https://codewithroni.github.io/

## Design

- Midnight navy, violet and turquoise visual system
- Animated, CSS-built product dashboard concept in the hero
- Mobile-friendly navigation and responsive layout
- JavaScript-first tech showcase and four-platform highlight
- Filterable project gallery (Business / Web / Desktop)
- Subtle scroll reveals, floating cards and moving technology rail
- Respect for \`prefers-reduced-motion\`, keyboard navigation and focus states
- Contact form that composes an email in the visitor's email application

The project showcase links to real repositories; the hero dashboard is a **decorative concept**, not a live product screenshot. The contact form has **no server-side submission**.

## Update your details

Edit **\`src/data/portfolio.js\`** to change the name, bio, skills, projects, GitHub links, contact email and social profiles.

## Run locally

Requirements: Node.js 20+.

\`\`\`bash
npm ci
npm run dev
npm run build
npm run preview
\`\`\`

## Deployment

The workflow at \`.github/workflows/deploy.yml\` runs on pushes to \`main\`. It installs dependencies with \`npm ci\`, builds \`dist/\`, and publishes to GitHub Pages. Repository Settings → Pages should use **GitHub Actions** as its source.

The user-site repository must remain named **\`CodeWithRoni.github.io\`**, with Vite \`base: '/'\`.

## Tech

React, Vite, CSS, JavaScript, GitHub Actions, GitHub Pages. Fonts are loaded from Google Fonts with system fallbacks.

© Md. Amzad Hossain Roni.
