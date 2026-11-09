import { useEffect, useState } from 'react'
import {
  profile, navLinks, stats, about, principles, skillGroups, platforms,
  projectFilters, projects, services
} from './data/portfolio'

function Icon({ name, size = 18, strokeWidth = 1.8 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    diagonal: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
    down: <><path d="M12 4v16" /><path d="m6 14 6 6 6-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="M6 6 18 18M18 6 6 18" /></>,
    code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4" /><path d="m14 4-4 16" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 7 9-7" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 4v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.8 4.8 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.2S17.2 2.7 15 4.4a10.8 10.8 0 0 0-6 0C6.8 2.7 5.7 3 5.7 3a4.4 4.4 0 0 0-.1 3.2 4.8 4.8 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6a2.9 2.9 0 0 0-.8 2.2V21" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    sparkle: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.arrow}
    </svg>
  )
}

function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -26px 0px' })
    elements.forEach((el) => {
      el.classList.add('reveal-ready')
      observer.observe(el)
    })
    return () => {
      observer.disconnect()
      elements.forEach((el) => el.classList.remove('reveal-ready'))
    }
  }, [])
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={'site-nav' + (scrolled ? ' site-nav-scrolled' : '')}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="CodeWithRoni, back to home">
          <span className="brand-symbol">&lt;<span>/</span>&gt;</span>
          <span className="brand-name">codewith<span>roni</span><span className="brand-dot">.</span></span>
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
          <Icon name={open ? 'close' : 'menu'} size={23} />
        </button>
        <nav className={'nav-links' + (open ? ' nav-open' : '')} id="primary-navigation" aria-label="Main navigation">
          {navLinks.map((item) => (
            <a key={item.id} href={'#' + item.id} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a href={profile.github} className="nav-github" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            GitHub <Icon name="diagonal" size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function SectionTitle({ index, label, title, description }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-heading-top"><span className="section-index">{index}</span><span className="section-label">{label}</span></div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function PortraitShowcase() {
  return (
    <div className="portrait-stage">
      <div className="portrait-aura" aria-hidden="true" />
      <div className="portrait-orbit orbit-first" aria-hidden="true" />
      <div className="portrait-orbit orbit-second" aria-hidden="true" />

      <div className="portrait-frame">
        <div className="portrait-photo-wrap">
          <img
            className="portrait-photo"
            src={profile.photo}
            alt={profile.name + ' — Full-Stack and Cross-Platform Software Developer'}
            width="280"
            height="336"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="portrait-frame-caption">
          <span>DEVELOPER / BANGLADESH</span>
          <strong>{profile.name}</strong>
          <small>JavaScript-first. Built for every screen.</small>
        </div>
      </div>

      <div className="portrait-floating portrait-float-js"><strong>JS</strong><span>Primary language</span></div>
      <div className="portrait-floating portrait-float-platform"><Icon name="layers" size={18} /><span>Web • Desktop • Mobile</span></div>
      <div className="portrait-floating portrait-float-code"><span className="portrait-code-dot" /> Available for projects</div>
      <span className="portrait-star portrait-star-one" aria-hidden="true">✳</span>
      <span className="portrait-star portrait-star-two" aria-hidden="true">✦</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="status-pill"><span className="status-pulse" /> {profile.availability} <span className="status-divider">/</span> 🇧🇩 Bangladesh</div>
          <p className="hero-intro">HEY, I'M <span>{profile.shortName.toUpperCase()}</span> <span className="intro-wave">✳</span></p>
          <h1>Building digital<br />experiences that <span className="gradient-word">matter.</span></h1>
          <p className="hero-role"><span className="role-spark">✦</span> {profile.title}</p>
          <p className="hero-description">{profile.tagline}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#projects">Explore my work <Icon name="diagonal" size={18} /></a>
            <a className="button button-outline" href="#contact">Let's talk <Icon name="arrow" size={18} /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-line" />
            <div className="proof-stack">
              {stats.map((item) => (
                <div className="proof-item" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
              ))}
            </div>
          </div>
        </div>
        <PortraitShowcase />
      </div>
      <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span> <Icon name="down" size={16} /></a>
    </section>
  )
}

const marqueeSkills = ['JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'NEXT.JS', 'NODE.JS', 'EXPRESS', 'MONGODB', 'ELECTRON', 'PYTHON']
function TechRail() {
  return (
    <div className="tech-rail" aria-label="Technologies: JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, Electron, Python">
      <div className="tech-track">
        {[0, 1].map((part) => (
          <div className="tech-set" key={part} aria-hidden="true">
            {marqueeSkills.map((item) => <span key={item}><i>✳</i> {item}</span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <SectionTitle index="01 / 05" label="THE PERSON BEHIND THE CODE" title={<>A curious mind.<br /><span className="text-gradient">A builder at heart.</span></>} description="A little about what drives my work." />
        <div className="about-grid">
          <div className="about-story" data-reveal>
            <div className="about-large-quote">“Great software feels simple, even when the problem isn't.”</div>
            {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="about-location"><Icon name="location" size={18} /><span>{profile.location}</span></div>
            <div className="about-signature">
              <img src={profile.photo} alt="" width="54" height="64" loading="lazy" decoding="async" />
              <div><strong>{profile.shortName}</strong><span>Full-Stack & Cross-Platform Developer</span></div>
            </div>
          </div>
          <div className="principle-list" data-reveal>
            {principles.map((item) => (
              <div className="principle" key={item.number}>
                <span className="principle-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                <span className="principle-star">✳</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <SectionTitle index="02 / 05" label="THE TOOLKIT" title={<>Built with curiosity.<br /><span className="text-gradient">Powered by JavaScript.</span></>} description="The technologies I reach for to bring ideas to life." />
        <div className="skills-layout">
          <div className="javascript-feature" data-reveal>
            <div className="js-top"><span>PRIMARY LANGUAGE</span><span className="js-star">✳</span></div>
            <div className="js-large">JS<span>.</span></div>
            <h3>JavaScript is my home base.</h3>
            <p>From expressive interfaces to business logic and desktop applications — one language, so many possibilities.</p>
            <span className="js-bottom">FULL-STACK <b>◆</b> CROSS-PLATFORM</span>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title} data-reveal>
                <div className="skill-card-head"><span className="skill-number">{group.number} /</span><span className="skill-symbol">{group.icon}</span></div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">{group.skills.map((skill) => <span key={skill} className={skill.includes('★') ? 'skill-tag primary-skill' : 'skill-tag'}>{skill.replace(' ★', '')}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
        <div className="platform-strip" data-reveal>
          <span className="platform-heading">BUILT FOR EVERY SCREEN <Icon name="arrow" size={17} /></span>
          {platforms.map((platform) => <div className="platform-item" key={platform.name}><span>{platform.icon}</span><strong>{platform.name}</strong><small>{platform.detail}</small></div>)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isWide }) {
  return (
    <article className={'project-card' + (isWide ? ' project-wide' : '')} style={{ '--project-accent': project.accent, '--project-accent-2': project.accent2 }}>
      <div className="project-art" aria-hidden="true">
        <div className="art-grid" />
        <span className="art-index">{String(index + 1).padStart(2, '0')} / 06</span>
        <span className="project-mark">{project.mark}</span>
        <span className="art-pill"><span /> {project.visualLabel}</span>
        <div className="art-ring art-ring-a" /><div className="art-ring art-ring-b" />
      </div>
      <div className="project-info">
        <span className="project-type">{project.type}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          <a href={project.link} target="_blank" rel="noopener noreferrer">Source code <Icon name="diagonal" size={17} /></a>
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demoLabel || 'Live preview'} <Icon name="diagonal" size={17} /></a>}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const visibleProjects = projects.filter((project) => filter === 'All' || project.category === filter)

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <div className="projects-heading-line">
          <SectionTitle index="03 / 05" label="SELECTED WORK" title={<>Ideas turned into <span className="text-gradient">real products.</span></>} description="A look at the tools and experiences I've built — each with a different problem to solve." />
          <a className="all-projects" href={profile.github + '?tab=repositories'} target="_blank" rel="noopener noreferrer">All repositories <Icon name="diagonal" size={18} /></a>
        </div>
        <div className="filter-tabs" role="group" aria-label="Filter projects by type">
          {projectFilters.map((item) => (
            <button type="button" key={item} className={'filter-tab' + (filter === item ? ' filter-active' : '')} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={projects.indexOf(project)} isWide={filter === 'All' && project.featured} />)}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section section-services" id="services">
      <div className="container">
        <SectionTitle index="04 / 05" label="WHAT I CAN CREATE" title={<>From your first idea<br />to <span className="text-gradient">the finished product.</span></>} description="Practical development for meaningful problems." />
        <div className="service-list">
          {services.map((service) => (
            <div className="service-row" key={service.number} data-reveal>
              <span className="service-number">{service.number}</span>
              <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p><div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className="service-icon">{service.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  function sendMessage(event) {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio inquiry from ' + form.name)
    const body = encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')
    window.location.href = 'mailto:' + profile.email + '?subject=' + subject + '&body=' + body
  }

  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-copy" data-reveal>
            <div className="section-heading-top"><span className="section-index">05 / 05</span><span className="section-label">LET'S COLLABORATE</span></div>
            <h2>Got an idea?<br /><span className="text-gradient">Let's make it real.</span></h2>
            <p>Have a project, business challenge, or interesting concept in mind? I'd love to hear about it.</p>
            <a href={'mailto:' + profile.email} className="contact-email"><span className="contact-email-icon"><Icon name="mail" size={20} /></span><span>{profile.email}</span><Icon name="diagonal" size={18} /></a>
            <div className="contact-socials">
              <a className="contact-social-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                <span className="social-icon github-icon"><Icon name="github" size={20} /></span>
                <span><strong>GitHub</strong><small>Browse my code</small></span>
                <Icon name="diagonal" size={17} />
              </a>
              <a className="contact-social-link" href={profile.facebook} target="_blank" rel="noopener noreferrer">
                <span className="social-icon facebook-icon">f</span>
                <span><strong>Facebook</strong><small>Connect with me</small></span>
                <Icon name="diagonal" size={17} />
              </a>
              <a className="contact-social-link" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
                <span className="social-icon whatsapp-icon">✆</span>
                <span><strong>WhatsApp</strong><small>{profile.whatsappDisplay}</small></span>
                <Icon name="diagonal" size={17} />
              </a>
              {profile.linkedin ? (
                <a className="contact-social-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <span className="social-icon linkedin-icon">in</span>
                  <span><strong>LinkedIn</strong><small>Professional network</small></span>
                  <Icon name="diagonal" size={17} />
                </a>
              ) : (
                <div className="contact-social-link social-pending" title="LinkedIn profile will be added later">
                  <span className="social-icon linkedin-icon">in</span>
                  <span><strong>LinkedIn</strong><small>Link coming soon</small></span>
                </div>
              )}
            </div>
          </div>
          <form className="contact-form" onSubmit={sendMessage} data-reveal>
            <div className="form-top"><span>START A CONVERSATION</span><span className="form-decor">✳</span></div>
            <div className="form-double">
              <label htmlFor="contact-name">Your name<input id="contact-name" name="name" autoComplete="name" placeholder="What should I call you?" required value={form.name} onChange={(e) => setForm((value) => ({ ...value, name: e.target.value }))} /></label>
              <label htmlFor="contact-email">Email address<input id="contact-email" name="email" autoComplete="email" type="email" placeholder="you@example.com" required value={form.email} onChange={(e) => setForm((value) => ({ ...value, email: e.target.value }))} /></label>
            </div>
            <label htmlFor="contact-message">Tell me about your project<textarea id="contact-message" name="message" rows="5" placeholder="What are you looking to build?" required value={form.message} onChange={(e) => setForm((value) => ({ ...value, message: e.target.value }))} /></label>
            <button type="submit" className="button button-primary submit-button">Open email to send <Icon name="arrow" size={18} /></button>
            <p className="form-note">This opens your email app with the message filled in. No data is stored by this site.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-brand">codewith<span>roni</span><b>.</b></a>
        <p>© {new Date().getFullYear()} {profile.name}. Crafted with care & JavaScript.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <TechRail />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
