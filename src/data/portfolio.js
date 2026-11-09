// ============================================================
//  ✏️  EDIT YOUR INFORMATION HERE — this is the only file you
//  need to change to update your name, title, links & projects.
// ============================================================

export const profile = {
  name: "Md. Amzad Hossain Roni",
  shortName: "Roni",
  initials: "R",
  // ✏️ Change your title here if you want a different one
  title: "Software Developer",
  subtitle: "React Developer • POS & Business Software Builder",
  tagline:
    "I build practical software for real businesses — POS systems, shop management, due ledgers and daily expense tracking. Simple to use, powerful inside, and built to run at zero extra cost.",
  location: "Bera, Pabna, Bangladesh",
  availability: "Available for new projects",
  github: "https://github.com/CodeWithRoni",
  githubUsername: "CodeWithRoni",
  // From your public GitHub profile — change here if you want a different one
  email: "ahroni.usa@gmail.com",
  facebook: "",
  linkedin: "",
  whatsapp: "",
};

export const stats = [
  { value: "3+", label: "Major Projects Built" },
  { value: "8+", label: "Technologies Used" },
  { value: "3", label: "Platforms — Web, Desktop & Mobile" },
  { value: "100%", label: "Free & Open Deployment" },
];

export const about = [
  "I'm Roni, a software developer from Bangladesh. I focus on one thing: software that solves everyday business problems for small shops and traders.",
  "My main work is on point-of-sale and shop management systems — barcode & serial tracking, stock, purchase returns, due ledgers (বাকির খাতা), multi-account cash books (Cash / bKash / Nagad / Bank), warranty tracking and even a PC builder with quotations.",
  "I also built DailyTally, a daily expense and due-payment tracker designed to be a person's everyday companion for money management.",
  "My favourite stack is React on the front-end with Google Apps Script + Google Sheets on the back-end — a combination that gives real, working business software with zero server cost.",
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "◆",
    skills: ["React", "Vite", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & Data",
    icon: "⬢",
    skills: ["Google Apps Script", "Google Sheets as Database", "REST-style APIs", "SQLite Concepts", "Firebase / Turso (exploring)"],
  },
  {
    title: "Platforms & Tools",
    icon: "⬣",
    skills: ["Electron — Desktop", "Tauri — Desktop", "Capacitor — Mobile", "Git & GitHub", "GitHub Pages", "Barcode / Serial Systems"],
  },
];

export const projects = [
  {
    name: "ShopERP",
    badge: "POS & Shop Management",
    gradient: "linear-gradient(135deg,#a855f7,#6366f1)",
    description:
      "Complete POS and shop management software for computer, IT & networking retail/wholesale shops.",
    features: [
      "POS with barcode & serial number tracking",
      "Stock, purchase & sales returns",
      "Multi-account ledger — Cash, bKash, Nagad, Bank",
      "Due book (বাকির খাতা), warranty tracking & reports",
      "PC Builder with quotation system",
    ],
    tags: ["React", "Vite", "Apps Script", "Google Sheets"],
    link: "https://github.com/CodeWithRoni/shop-erp",
    linkLabel: "View on GitHub",
  },
  {
    name: "DailyTally",
    badge: "Expense & Ledger Tracker",
    gradient: "linear-gradient(135deg,#d946ef,#a855f7)",
    description:
      "A daily expense and ledger app — your everyday companion for tracking money in and money out.",
    features: [
      "Due & receivable (দেনা-পাওনা) tracking",
      "Daily and monthly expense records",
      "Simple login with mobile number — no costly SMS OTP",
      "Clean dashboard built for everyday use",
    ],
    tags: ["React", "SQLite", "Offline-first Thinking"],
    link: "https://github.com/CodeWithRoni/DailyTally",
    linkLabel: "View on GitHub",
  },
  {
    name: "Karvio",
    badge: "POS — Web, Desktop & Mobile",
    gradient: "linear-gradient(135deg,#818cf8,#c084fc)",
    description:
      "A POS / shop management project built to run everywhere — web, desktop and mobile from one codebase direction.",
    features: [
      "React (Vite) frontend with a full page set — POS, Sales, Purchases, Stock, Repairs, Warranty, PC Builder",
      "Google Apps Script + Sheets backend",
      "Electron / Tauri desktop and Capacitor mobile structure",
      "Fully code-reviewed — ~19,000 lines checked line by line",
    ],
    tags: ["React", "Electron", "Tauri", "Capacitor"],
    link: "https://github.com/CodeWithRoni/karvio",
    linkLabel: "View on GitHub",
  },
];

export const services = [
  {
    icon: "🛒",
    title: "POS & Shop Management Software",
    text: "Custom POS for your shop — sales, stock, barcode/serial, warranty, due book and daily reports.",
  },
  {
    icon: "🌐",
    title: "Web App Development",
    text: "Fast, responsive React web apps — dashboards, management panels and business tools.",
  },
  {
    icon: "📒",
    title: "Ledger & Expense Apps",
    text: "দেনা-পাওনা, daily expense and monthly accounts — simple apps your whole team can use.",
  },
  {
    icon: "💻",
    title: "Desktop & Mobile Versions",
    text: "Turn a web app into a Windows desktop app or an Android app with Electron / Tauri / Capacitor.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
