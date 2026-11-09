import { useEffect, useRef, useState } from 'react'
import { profile, stats, about, skillGroups, projects, services, navLinks } from './data/portfolio'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || []
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#home" className="logo">&lt;<span>Roni</span> /&gt;</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="nav-btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow glow-1" /><div className="hero-glow glow-2" />
      <div className="hero-text reveal">
        <span className="badge"><span className="dot" /> {profile.availability}</span>
        <h1>Hi, I'm <span className="grad">{profile.shortName}</span></h1>
        <h2>{profile.name}</h2>
        <p className="hero-title">{profile.title} — {profile.subtitle}</p>
        <p className="hero-tag">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong><span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-card reveal">
        <div className="avatar">{profile.initials}</div>
        <h3>{profile.name}</h3>
        <p>{profile.title}</p>
        <div className="hero-chips">
          <span>⚛ React</span><span>Apps Script</span><span>POS Systems</span>
        </div>
        <a className="btn btn-primary btn-sm" href={profile.github} target="_blank" rel="noreferrer">
          github.com/{profile.githubUsername}
        </a>
      </div>
    </section>
  )
}

function SectionTitle({ kicker, title }) {
  return (
    <div className="section-head reveal">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function App() {
  const rootRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const sendMessage = (e) => {
    e.preventDefault()
    const to = profile.email || ''
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    if (to) {
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    } else {
      window.open(`${profile.github}`, '_blank')
    }
  }

  return (
    <div ref={rootRef}>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="section">
          <SectionTitle kicker="About Me" title="Building software that businesses actually use" />
          <div className="card reveal about-card">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle kicker="Skills" title="What I work with" />
          <div className="grid grid-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="card reveal">
                <div className="card-icon">{g.icon}</div>
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.skills.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle kicker="Projects" title="Featured work" />
          <div className="grid grid-projects">
            {projects.map((p) => (
              <article key={p.name} className="card project-card reveal">
                <div className="project-banner" style={{ background: p.gradient }}>
                  <span>{p.name}</span>
                </div>
                <span className="project-badge">{p.badge}</span>
                <p className="project-desc">{p.description}</p>
                <ul className="feature-list">
                  {p.features.map((f) => <li key={f}>✓ {f}</li>)}
                </ul>
                <div className="chips">
                  {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
                {p.link
                  ? <a className="project-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} ↗</a>
                  : <span className="project-link muted">{p.linkLabel}</span>}
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <SectionTitle kicker="Services" title="What I can build for you" />
          <div className="grid grid-2">
            {services.map((s) => (
              <div key={s.title} className="card reveal service-card">
                <div className="service-icon">{s.icon}</div>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <SectionTitle kicker="Contact" title="Let's build something together" />
          <div className="grid grid-2 contact-grid">
            <div className="card reveal">
              <h3>Get in touch</h3>
              <p>Have a shop, business or idea that needs software? Message me — I reply personally.</p>
              <ul className="contact-list">
                <li>📍 {profile.location}</li>
                <li>💻 <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubUsername}</a></li>
                {profile.email && <li>✉️ {profile.email}</li>}
                {profile.facebook && <li>📘 <a href={profile.facebook} target="_blank" rel="noreferrer">Facebook</a></li>}
                {profile.linkedin && <li>🔗 <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
                {profile.whatsapp && <li>💬 <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>}
              </ul>
              {!profile.email && (
                <p className="note">Tip: add your email & social links in <code>src/data/portfolio.js</code> — they will appear here automatically.</p>
              )}
            </div>
            <form className="card reveal contact-form" onSubmit={sendMessage}>
              <label>Your Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
              <label>Your Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
              <label>Message<textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." /></label>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} {profile.name} — Built with React & hosted free on GitHub Pages</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}
