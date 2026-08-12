"use client";

import { useEffect, useState } from "react";
import { achievements, experience, leadership, projects, recognition, skillGroups } from "./portfolio-data";

const navItems = ["About", "Skills", "Experience", "Leadership", "Work", "Contact"];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = light ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  }, [light]);

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sai Mounish, home">
          <span>SM</span><strong>Sai Mounish</strong>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setLight(!light)} aria-label={`Switch to ${light ? "dark" : "light"} theme`}>
            <span aria-hidden="true">{light ? "☾" : "☀"}</span>
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">Menu</button>
        </div>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for senior opportunities</div>
            <h1>I modernize complex systems into <em>fast, scalable products.</em></h1>
            <p className="hero-intro">Senior Full Stack Developer and Technical Lead with 5.5+ years of experience modernizing enterprise applications, leading Angular migrations and building scalable products with Java and Spring Boot.</p>
            <div className="cta-row">
              <a className="button primary" href="#work">Explore my work <ArrowIcon /></a>
              <a className="button secondary" href="/Sai-Durga-Mounish-Madireddy-Resume.pdf" download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta">
              <span>Based in Hyderabad, India</span>
              <span>Angular · Java · Spring Boot</span>
            </div>
          </div>

          <aside className="hero-card reveal delay-1" aria-label="Professional overview">
            <div className="card-bar"><span>profile.ts</span><span>•••</span></div>
            <pre><code><span className="code-key">const</span> engineer = {"{"}{"\n"}  focus: <span className="code-value">&quot;modernization&quot;</span>,{"\n"}  experience: <span className="code-number">5.5</span> + <span className="code-value">&quot; years&quot;</span>,{"\n"}  impact: [<span className="code-value">&quot;speed&quot;</span>, <span className="code-value">&quot;scale&quot;</span>, <span className="code-value">&quot;clarity&quot;</span>],{"\n"}  leadership: <span className="code-key">true</span>{"\n"}{"}"};</code></pre>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </aside>
        </section>

        <section className="impact-strip" aria-label="Career highlights">
          {achievements.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </section>

        <section className="section about" id="about">
          <div className="section-label"><span>01</span> About</div>
          <div className="about-layout">
            <h2>Engineering with a modernization mindset.</h2>
            <div className="about-copy">
              <p>I turn legacy enterprise applications into maintainable, high-performance products. My work spans Angular architecture, Java and Spring Boot services, API integration, database optimization and the leadership practices that keep delivery moving.</p>
              <p>Across finance, reporting and e-commerce platforms, I have led migrations, built reusable systems and helped teams ship with stronger standards—without disrupting essential business workflows.</p>
              <p>I work across the complete delivery lifecycle: understanding business workflows, designing reusable UI patterns, agreeing API contracts, improving data access and supporting teams through implementation, review and release.</p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-label"><span>02</span> Expertise</div>
          <div className="section-heading"><h2>A full-stack toolkit, sharpened for enterprise scale.</h2><p>Modern frontend engineering backed by reliable services, data performance and practical technical leadership.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label"><span>03</span> Experience</div>
          <div className="section-heading"><h2>Progress built through real delivery.</h2><p>From hands-on development to technical leadership across enterprise modernization programs.</p></div>
          <div className="timeline">
            {experience.map((role, index) => (
              <article className="timeline-item" key={role.company}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <div className="role-head"><div><p>{role.period}</p><h3>{role.company}</h3><h4>{role.role}</h4></div><span className="location">{role.location}</span></div>
                  <p className="role-summary">{role.summary}</p>
                  <div className="role-highlights">{role.highlights.map((item) => <span key={item}>{item}</span>)}</div>
                  <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="leadership">
          <div className="section-label"><span>04</span> Leadership</div>
          <div className="section-heading"><h2>Leading through clarity, standards and shared ownership.</h2><p>Practical leadership grounded in hands-on engineering and dependable delivery.</p></div>
          <div className="leadership-grid">
            {leadership.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </section>

        <section className="section recognition" id="recognition">
          <div className="section-label"><span>05</span> Awards & Recognition</div>
          <div className="section-heading"><h2>Recognition earned through consistent delivery.</h2><p>Performance awards reflecting technical contribution, ownership and team impact.</p></div>
          <div className="recognition-grid">
            {recognition.map((award) => <article key={`${award.company}-${award.title}`}><div><span>{award.year}</span><small>{award.company}</small></div><h3>{award.title}</h3><p>{award.detail}</p></article>)}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-label"><span>06</span> Selected work</div>
          <div className="section-heading"><h2>Products designed around performance and clarity.</h2><p>Selected enterprise platforms spanning commerce, finance, collections and business intelligence.</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-top"><span>0{index + 1}</span><span>{project.category}</span></div>
                <div className="project-visual" aria-hidden="true"><div className="visual-window"><i /><i /><i /><b>{project.metric}</b></div></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials">
          <div className="section-label"><span>07</span> Foundation</div>
          <div className="credentials-grid">
            <article><span>Education</span><h3>Bachelor of Technology</h3><p>Institute of Aeronautical Engineering, India</p><small>2016 — 2020</small></article>
            <article><span>Languages</span><h3>English</h3><p>Fluent professional proficiency</p><h3 className="second-language">German</h3><p>A1 certified · A2 ongoing</p></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <p>Have a complex product to modernize?</p>
          <h2>Let’s build what’s next.</h2>
          <a className="button primary" href="mailto:saidurgamounishmadireddy@gmail.com">Start a conversation <ArrowIcon /></a>
          <div className="contact-links"><a href="mailto:saidurgamounishmadireddy@gmail.com">Email</a><a href="https://www.linkedin.com/in/sai-durga-mounish-madireddy" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a></div>
        </section>
      </div>

      <footer><a className="brand" href="#top"><span>SM</span><strong>Sai Mounish</strong></a><p>Senior Full Stack Developer · Hyderabad, India</p><p>© 2026</p></footer>
    </main>
  );
}
