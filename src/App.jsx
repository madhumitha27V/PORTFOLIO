import { useEffect, useRef, useState } from "react";
import {
  achievements,
  certifications,
  education,
  navLinks,
  projects,
  skillGroups,
  socialLinks
} from "./data";

const iconFor = {
  GitHub: "GH",
  LeetCode: "LC",
  LinkedIn: "in",
  Email: "@"
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [skillIndex, setSkillIndex] = useState(0);
  const [skillProgress, setSkillProgress] = useState([]);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsSectionRef = useRef(null);
  const activeSkillGroup = skillGroups[skillIndex];

  useEffect(() => {
    const section = skillsSectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSkillsVisible(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!skillsVisible) return undefined;

    const targets = activeSkillGroup.items.map((item) => item.value);
    setSkillProgress(targets.map(() => 0));
    const animationStart = performance.now();
    const duration = 900;
    let animationFrame;

    const animateProgress = (now) => {
      const progress = Math.min((now - animationStart) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setSkillProgress(targets.map((target) => Math.round(target * easedProgress)));
      if (progress < 1) animationFrame = requestAnimationFrame(animateProgress);
    };

    animationFrame = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [activeSkillGroup, skillsVisible]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const filteredProjects = projectFilter === "All"
    ? projects
    : projects.filter((project) => project.category === projectFilter);
  const featuredProjects = filteredProjects.slice(0, 3);
  const additionalProjects = filteredProjects.slice(3);

  const updateForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:27madhumitha.v@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`site-shell ${darkMode ? "theme-dark" : ""}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Madhumitha V home">
          <span className="wordmark-mark">MV</span>
          <span>Madhumitha V</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={`top-nav ${menuOpen ? "is-open" : ""}`}>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle colour theme">
            {darkMode ? "Light" : "Dark"} <span aria-hidden="true">{darkMode ? "☼" : "◐"}</span>
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <h1>Building thoughtful technology for a better everyday.</h1>

            <div className="hero-actions">
              <a className="button button-accent" href="#projects">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a className="text-link light-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-aside">
            <div>
              <div className="availability"><span className="status-dot" /> Available for opportunities</div>
              <div className="hero-social-links">
                {socialLinks
                  .filter((link) => ["GitHub", "LeetCode", "LinkedIn"].includes(link.label))
                  .map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
              </div>
            </div>
            <div className="hero-monogram">MV<span>.</span></div>
          </div>
        </section>



        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects with purpose.</h2>
            </div>
            <p className="section-note">A selection of systems I&apos;ve designed, built and learned from.</p>
          </div>
          <div className="project-filters" role="tablist" aria-label="Filter projects">
            {["All", "ML", "Web", "IoT"].map((filter) => (
              <button
                key={filter}
                className={projectFilter === filter ? "filter-tab is-active" : "filter-tab"}
                type="button"
                role="tab"
                aria-selected={projectFilter === filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <article key={project.title} className="featured-project">
                <div className="featured-project-copy">
                  <div className="project-meta"><span>0{projects.indexOf(project) + 1}</span><span>{project.category}</span></div>
                  <div className="project-heading">
                    <h3>{project.title}</h3>
                    {project.patent && <span className="project-badge">{project.patent}</span>}
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                  <div className="project-footer">
                    <span className="role-label">{project.role}</span><span className="status-badge">{project.status}</span>
                    <div className="project-actions">
                      <a className="project-button project-button-primary" href={project.demo}>Live demo <span aria-hidden="true">↗</span></a>
                      <a className="project-button" href={project.github} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
                    </div>
                  </div>
                </div>
                <div className="project-thumb"><img src={project.image} alt="" /></div>
              </article>
            ))}
          </div>
          {additionalProjects.length > 0 && (
            <button
              className="more-projects-toggle"
              type="button"
              aria-expanded={showMoreProjects}
              onClick={() => setShowMoreProjects(!showMoreProjects)}
            >
              <span>More projects</span>
              <span className="more-projects-icon" aria-hidden="true">{showMoreProjects ? "−" : "+"}</span>
            </button>
          )}
          {showMoreProjects && additionalProjects.length > 0 && <div className="more-projects">
            {additionalProjects.map((project) => (
              <article key={project.title} className="project-compact-row">
                <span className="project-number">0{projects.indexOf(project) + 1}</span>
                <div className="compact-project-info">
                  <div><h3>{project.title}</h3><span className="status-badge">{project.status}</span></div>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.slice(0, 4).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                  <span className="role-label">{project.role}</span>
                </div>
                <div className="compact-actions">
                  <a className="project-button" href={project.demo}>Live demo <span aria-hidden="true">↗</span></a>
                  <a className="project-button" href={project.github} target="_blank" rel="noreferrer">View source <span aria-hidden="true">↗</span></a>
                </div>
              </article>
            ))}
          </div>}
        </section>

        <section id="skills" className="section skills-section" ref={skillsSectionRef}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>Curious by nature.<br />Precise by practice.</h2>
            </div>
            <p className="section-note">The tools and technologies I use to turn ideas into working solutions.</p>
          </div>
          <div className="skills-carousel">
            <button
              className="skill-arrow"
              type="button"
              onClick={() => setSkillIndex((skillIndex - 1 + skillGroups.length) % skillGroups.length)}
              aria-label="Show previous skill group"
            >
              ←
            </button>
            <article className="skill-card" key={activeSkillGroup.title}>
              <div className="skill-card-top">
                <span className="skill-index">0{skillIndex + 1} / 0{skillGroups.length}</span>
                <span className="skill-dots" aria-label={`Skill group ${skillIndex + 1} of ${skillGroups.length}`}>
                  {skillGroups.map((group, index) => (
                    <button
                      className={index === skillIndex ? "skill-dot is-active" : "skill-dot"}
                      type="button"
                      key={group.title}
                      onClick={() => setSkillIndex(index)}
                      aria-label={`Show ${group.title}`}
                    />
                  ))}
                </span>
              </div>
              <h3>{activeSkillGroup.title}</h3>
              <div className="skill-items">
                {activeSkillGroup.items.map((item, index) => (
                  <div className="skill-item" key={item.name}>
                    <div className="skill-item-label">
                      <span>{item.name}</span><span className="skill-level">{skillProgress[index] || 0}%</span>
                    </div>
                    <div className="skill-progress-track" aria-hidden="true">
                      <span className="skill-progress-fill" style={{ width: `${skillProgress[index] || 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <button
              className="skill-arrow"
              type="button"
              onClick={() => setSkillIndex((skillIndex + 1) % skillGroups.length)}
              aria-label="Show next skill group"
            >
              →
            </button>
          </div>
        </section>

        <section id="achievements" className="section split-section">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Beyond the screen</p>
            <h2>Milestones &amp;<br />recognition.</h2>
          </div>
          <div className="timeline">
            {achievements.slice(0, 4).map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-year">{item.year}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section details-section">
          <div className="detail-column">
            <p className="eyebrow">Education</p>
            <h2>Always learning.</h2>
            {education.map((item) => (
              <article className="detail-item" key={`${item.school}-${item.course}`}>
                <span>{item.score}</span><h3>{item.course}</h3><p>{item.school}</p>
              </article>
            ))}
          </div>
          <div id="certifications" className="detail-column">
            <p className="eyebrow">Certifications</p>
            <h2>Staying current.</h2>
            {certifications.map((item) => (
              <article className="detail-item certification-item" key={item.title}>
                <span>{item.year}</span><h3>{item.title}</h3><p>{item.issuer} · {item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-copy">
            <p className="eyebrow light">Have a project in mind?</p>
            <h2>Let&apos;s make something <em>meaningful.</em></h2>
            <p>Whether you&apos;re looking for a collaborator, an engineer or just want to say hello, my inbox is open.</p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target={link.label === "Email" ? undefined : "_blank"} rel="noreferrer">
                  <span>{iconFor[link.label]}</span>{link.label}
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <label>Full name<input name="name" required value={form.name} onChange={updateForm} placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" required value={form.email} onChange={updateForm} placeholder="you@example.com" /></label>
            <label>Message<textarea name="message" required rows="4" value={form.message} onChange={updateForm} placeholder="Tell me a little about your idea..." /></label>
            <button className="button button-accent" type="submit">Send a message <span aria-hidden="true">↗</span></button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#home"><span className="wordmark-mark">MV</span><span>Madhumitha V</span></a>
        <p>Designed &amp; built with intention · © 2026</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
