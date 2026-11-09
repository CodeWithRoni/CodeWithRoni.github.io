// Portfolio content — edit details here without touching the page layout.

export const profile = {
  name: "Md. Amzad Hossain Roni",
  shortName: "Roni",
  initials: "R",
  title: "Full-Stack & Cross-Platform Developer",
  subtitle: "JavaScript-first developer crafting web, desktop and mobile experiences.",
  tagline: "I turn complex workflows into simple, thoughtful software — from business systems and web products to cross-platform apps.",
  location: "Bera, Pabna, Bangladesh",
  availability: "Open to building great things",
  github: "https://github.com/CodeWithRoni",
  githubUsername: "CodeWithRoni",
  email: "ahroni.usa@gmail.com",
  facebook: "",
  linkedin: "",
  whatsapp: "",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "projects", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "JS", label: "Primary language" },
  { value: "MERN", label: "Full-stack development" },
  { value: "04", label: "Platforms in focus" },
];

export const about = [
  "I'm a developer from Bangladesh who enjoys the intersection of thoughtful design and real-world engineering.",
  "I build practical applications for people and businesses — POS systems, inventory and warranty tools, expense trackers, online storefronts, and desktop utilities.",
  "My foundation is JavaScript, with React, Next.js, Node.js, Express, MongoDB and Python in my toolkit. I like taking an idea all the way from an interface to a working product.",
];

export const principles = [
  { number: "01", title: "Designed for humans", detail: "Clear flows, strong usability, and interfaces that feel natural." },
  { number: "02", title: "Built to last", detail: "Structured code, sensible architecture, and room to grow." },
  { number: "03", title: "Every screen matters", detail: "Consistent experiences across browsers, desktops, and mobile." },
];

export const skillGroups = [
  {
    number: "01", icon: "⌘", title: "Languages",
    description: "The building blocks behind everything I create.",
    skills: ["JavaScript ★", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    number: "02", icon: "◈", title: "Frontend",
    description: "Interfaces that look good and feel effortless.",
    skills: ["React", "Next.js", "Vite", "Responsive UI", "UI/UX"],
  },
  {
    number: "03", icon: "▣", title: "Backend & Data",
    description: "Application logic, APIs and data that power products.",
    skills: ["Node.js", "Express.js", "MongoDB", "MERN Stack", "SQLite", "Turso"],
  },
  {
    number: "04", icon: "▤", title: "Platforms & Tools",
    description: "From the browser to native desktop and mobile shells.",
    skills: ["Electron", "Capacitor", "Google Apps Script", "Google Sheets", "Git", "GitHub"],
  },
];

export const platforms = [
  { icon: "🌐", name: "Web", detail: "Apps & websites" },
  { icon: "🖥", name: "Windows", detail: "Desktop software" },
  { icon: "⌘", name: "macOS", detail: "Desktop experiences" },
  { icon: "▯", name: "Mobile", detail: "Cross-platform apps" },
];

export const projectFilters = ["All", "Business", "Web", "Desktop"];

export const projects = [
  {
    name: "Karvio",
    category: "Business",
    type: "POS / BUSINESS SOFTWARE",
    description: "An extensive shop-management system for computer, IT and networking retailers. Sales, stock, due ledgers, serial tracking and repairs — with online and offline workflows.",
    tags: ["React", "Apps Script", "Google Sheets", "Electron"],
    link: "https://github.com/CodeWithRoni/karvio",
    demo: "https://codewithroni.github.io/karvio/",
    demoLabel: "Web preview",
    mark: "K",
    visualLabel: "RETAIL OS",
    accent: "#a78bfa",
    accent2: "#6d4aff",
    featured: true,
  },
  {
    name: "DailyTally",
    category: "Web",
    type: "FINANCE / WEB APPLICATION",
    description: "A friendly expense and ledger companion. Track daily spending, budgets, receivables and payables with bilingual interfaces and cloud-backed data.",
    tags: ["JavaScript", "Node.js", "SQLite", "Turso"],
    link: "https://github.com/CodeWithRoni/DailyTally",
    demo: "https://dailytally-aaqk.onrender.com/",
    demoLabel: "Live app",
    mark: "DT",
    visualLabel: "PERSONAL FINANCE",
    accent: "#39dcc8",
    accent2: "#008f84",
  },
  {
    name: "Universal Downloader",
    category: "Desktop",
    type: "DESKTOP / MEDIA TOOL",
    description: "An Electron media utility for video and audio downloads, queue management, subtitles and format conversion. Mobile builds currently provide a demo interface.",
    tags: ["Electron", "React", "Node.js", "yt-dlp"],
    link: "https://github.com/CodeWithRoni/Universal-Downloader",
    demo: "",
    mark: "UD",
    visualLabel: "MEDIA UTILITY",
    accent: "#fbab75",
    accent2: "#c35836",
  },
  {
    name: "RMA Management",
    category: "Business",
    type: "MERN / SERVICE CENTER",
    description: "A full-stack warranty and repair management application that helps computer shops track the journey from receiving a faulty device to resolving it.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/CodeWithRoni/rma-management-system",
    demo: "",
    mark: "RMA",
    visualLabel: "SERVICE WORKFLOWS",
    accent: "#68b3ff",
    accent2: "#3159c5",
  },
  {
    name: "Karvio Shop",
    category: "Web",
    type: "E-COMMERCE / WEB",
    description: "A connected storefront that draws product details from Karvio and sends customer orders back to the shop-management workflow.",
    tags: ["React", "Vite", "Zustand", "Apps Script"],
    link: "https://github.com/CodeWithRoni/karvio-shop",
    demo: "https://codewithroni.github.io/karvio-shop/",
    demoLabel: "Web preview",
    mark: "KS",
    visualLabel: "CONNECTED COMMERCE",
    accent: "#f8b97a",
    accent2: "#ad6838",
  },
  {
    name: "Developer Portfolio",
    category: "Web",
    type: "PERSONAL / WEB EXPERIENCE",
    description: "This very site: a fast, responsive developer portfolio focused on meaningful work, clean typography and intentional motion.",
    tags: ["React", "Vite", "CSS", "GitHub Pages"],
    link: "https://github.com/CodeWithRoni/CodeWithRoni.github.io",
    demo: "https://codewithroni.github.io/",
    demoLabel: "You're here",
    mark: "</>",
    visualLabel: "CREATIVE PORTFOLIO",
    accent: "#d3a1ff",
    accent2: "#755cda",
  },
];

export const services = [
  {
    number: "01", icon: "◧", title: "Full-Stack Web Products",
    description: "Responsive websites, dashboards and modern MERN applications — from interface to backend.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    number: "02", icon: "▣", title: "Business Software",
    description: "Point of sale, inventory, ledgers, warranty tracking, e-commerce and custom workflows.",
    tags: ["POS", "Operations", "Automation"],
  },
  {
    number: "03", icon: "⌘", title: "Cross-Platform Apps",
    description: "Desktop and mobile-oriented products that feel at home on different devices.",
    tags: ["Windows", "macOS", "Mobile"],
  },
];
