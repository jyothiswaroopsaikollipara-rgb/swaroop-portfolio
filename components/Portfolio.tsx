"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Command, Github, Linkedin, Mail, Menu, Moon, Sparkles, Terminal, X } from "lucide-react";
import { experiences, processSteps, profile, projects, skillGroups } from "@/data/portfolio";

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export default function Portfolio() {
  const [recruiter, setRecruiter] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("Welcome. Type `help` to explore Swaroop's portfolio.");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("Programming");

  const selectedProject = useMemo(() => projects.find(p => p.id === activeProject), [activeProject]);
  const runCommand = () => {
    const c = command.trim().toLowerCase();
    const responses: Record<string, string> = {
      help: "Available commands: about · skills · projects · experience · contact · clear",
      about: `${profile.shortName} — ${profile.headline} ${profile.intro}`,
      skills: skillGroups.map(g => `${g.title}: ${g.items.join(", ")}`).join("\n"),
      projects: projects.map(p => `${p.number}  ${p.name} — ${p.type}`).join("\n"),
      experience: experiences.map(e => `${e.date} · ${e.org} — ${e.role}`).join("\n"),
      contact: `Email: ${profile.email}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`,
      clear: ""
    };
    setOutput(responses[c] ?? `Command not found: ${c || "(empty)"}. Type help for available commands.`);
    setCommand("");
  };

  const nav = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Stack", "#stack"], ["Contact", "#contact"]];

  return <main>
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a href="#home" className="brand"><span className="brand-mark">S<span>.</span></span><span>SWAROOP<span className="brand-sub">ENGINEERING PORTFOLIO</span></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="top-actions"><button className="recruiter-trigger" onClick={() => setRecruiter(true)}><Sparkles size={14}/> Recruiter mode</button><button className="icon-btn mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: .55 }} className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES <span className="eyebrow-line"/></motion.div>
        <motion.h1 initial="hidden" animate="show" variants={fade} transition={{ duration: .65, delay: .08 }}>Engineering ideas<br/><em>into intelligent</em><br/>solutions<span className="accent-dot">.</span></motion.h1>
        <motion.p className="hero-lede" initial="hidden" animate="show" variants={fade} transition={{ duration: .65, delay: .16 }}>I’m <strong>Swaroop</strong> — a software engineering enthusiast building practical applications across AI, data, and full-stack development.</motion.p>
        <motion.div className="hero-cta" initial="hidden" animate="show" variants={fade} transition={{ duration: .65, delay: .24 }}>
          <a className="button button-primary" href="#projects">Explore selected work <ArrowUpRight size={16}/></a>
          <a className="button button-quiet" href={profile.resume} download>Download resume <ArrowDown size={15}/></a>
        </motion.div>
        <motion.div className="hero-social" initial="hidden" animate="show" variants={fade} transition={{ duration: .65, delay: .3 }}>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={12}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={12}/></a><span className="social-sep"/><span>{profile.location}</span>
        </motion.div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
        <div className="visual-top"><span>FIG. 01 / SYSTEMS THINKING</span><span>◎ LIVE CONCEPT</span></div>
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
        <div className="core-node"><span className="core-glyph">S</span><span>ENGINEERING<br/>MINDSET</span></div>
        <div className="node node-ai"><span className="node-icon">AI</span><b>Intelligence</b><small>Models · Context</small></div>
        <div className="node node-data"><span className="node-icon">D</span><b>Data systems</b><small>Pipelines · Insight</small></div>
        <div className="node node-code"><span className="node-icon">{"</>"}</span><b>Software</b><small>Logic · Products</small></div>
        <div className="visual-caption"><span>01 — 03</span><span>Connecting disciplines<br/>to build useful things.</span></div>
      </motion.div>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="index-rule"/><span>01 / 06</span></div>
    </section>

    <section className="ticker" aria-label="Areas of focus"><div>{["SOFTWARE ENGINEERING","ARTIFICIAL INTELLIGENCE","DATA ENGINEERING","FULL-STACK DEVELOPMENT","PROBLEM SOLVING",""].map((s,i)=><span key={i}>{s}<b>✳</b></span>)}</div></section>

    <section className="section-shell about-section" id="about">
      <SectionLabel number="01" title="A little context" kicker="ABOUT"/>
      <div className="about-grid"><h2>Curiosity, translated<br/>into <em>working systems.</em></h2><div className="about-text"><p>{profile.intro}</p><p>I’m pursuing a B.Tech in Data Science at {profile.institution}. Through internships and independent projects, I’ve explored different parts of the software lifecycle — from data workflows and backend services to user-facing applications and AI-assisted experiences.</p><p>I value clear problem framing, thoughtful implementation, and honest engineering: explain what a system does, understand its trade-offs, and measure outcomes only when the evidence is there.</p><div className="education-line"><span className="edu-icon"><BriefcaseBusiness size={17}/></span><span><b>{profile.education}</b><small>{profile.institution} · {profile.period}</small></span></div></div></div>
    </section>

    <section className="section-shell experience-section" id="experience">
      <SectionLabel number="02" title="Where I’ve been learning" kicker="EXPERIENCE"/>
      <div className="section-intro"><p>Internships across cloud data, full-stack development, financial technology, and AI/ML. Details are intentionally marked for verification where the original project specifics aren’t yet supplied.</p><span>2025 — PRESENT</span></div>
      <div className="timeline">{experiences.map((e,i)=><motion.article key={e.role} className="timeline-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*.06 }}>
        <div className="timeline-date">{e.date}<span className="timeline-dot"/></div><div className="timeline-content"><div className="timeline-heading"><div><span className="micro-label">{e.org}</span><h3>{e.role}</h3></div><span className="verify-label">{e.status}</span></div><p>{e.summary}</p><div className="tag-row">{e.tags.map(t=><span key={t}>{t}</span>)}</div><details><summary>View contribution notes <ChevronDown size={15}/></summary><ul>{e.details.map(d=><li key={d}>{d}</li>)}</ul></details></div>
      </motion.article>)}</div>
    </section>

    <section className="section-shell projects-section" id="projects">
      <SectionLabel number="03" title="Selected work" kicker="PROJECTS"/>
      <div className="section-intro"><p>Projects are presented as engineering case studies, not just thumbnails. Open a project to explore the problem, proposed approach, architecture, and the details still to be documented.</p><span>06 PROJECTS</span></div>
      <div className="project-grid">{projects.map((p,i)=><motion.button key={p.id} className={`project-card project-card-${i+1}`} onClick={()=>setActiveProject(p.id)} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i%2)*.08 }}>
        <div className="project-art"><div className="art-grid"/><div className={`art-symbol symbol-${i+1}`}>{["⌁","⇄","◷","▥","↗","◉"][i]}</div><span className="art-number">{p.number} / 06</span><span className="art-open"><ArrowUpRight size={19}/></span></div>
        <div className="project-meta"><span>{p.type}</span><span>{p.status}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="project-link">Explore case study <ArrowRight size={15}/></div>
      </motion.button>)}</div>
    </section>

    <section className="section-shell stack-section" id="stack">
      <SectionLabel number="04" title="Tools of the trade" kicker="TECH STACK"/>
      <div className="stack-layout"><div className="stack-intro"><h2>A toolkit shaped<br/>by <em>the problem.</em></h2><p>I choose tools based on the system being built. This is a map of the technologies and areas I’ve worked with or explored — not a claim of equal proficiency across every item.</p><div className="stack-count"><strong>06</strong><span>TECHNOLOGY<br/>CLUSTERS</span></div></div>
      <div className="skill-explorer"><div className="skill-tabs">{skillGroups.map(g=><button key={g.title} className={activeSkill===g.title?"active":""} onClick={()=>setActiveSkill(g.title)}>{g.title}<ArrowUpRight size={13}/></button>)}</div>{skillGroups.filter(g=>g.title===activeSkill).map(g=><div className="skill-panel" key={g.title}><span className="micro-label">CAPABILITY AREA / {String(skillGroups.indexOf(g)+1).padStart(2,"0")}</span><h3>{g.title}</h3><p>{g.note}</p><div className="skill-pills">{g.items.map((item,i)=><motion.span key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*.035 }}>{item}</motion.span>)}</div></div>)}</div></div>
    </section>

    <section className="section-shell approach-section" id="approach">
      <SectionLabel number="05" title="How I approach engineering" kicker="METHOD"/>
      <div className="approach-heading"><h2>From unclear problem<br/>to <em>useful outcome.</em></h2><p>A practical loop that keeps the user, system constraints, and quality in view.</p></div>
      <div className="process-grid">{processSteps.map(([n,t,d],i)=><div className="process-step" key={n}><div className="process-top"><span>{n}</span>{i<4&&<span className="process-line"/>}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>

    <section className="section-shell beyond-section">
      <SectionLabel number="06" title="Beyond the code" kicker="COMMUNITY & LEARNING"/>
      <div className="beyond-grid"><div><span className="micro-label">LEADERSHIP / COMMUNITY</span><h2>Technology is built<br/>by <em>people, too.</em></h2></div><div><p>Rotaract leadership and participation can add an important dimension to this profile. Add your exact club role, term, initiatives, responsibilities, and verifiable outcomes here before publishing.</p><div className="placeholder-note"><span className="status-dot muted"/> Editable profile detail — role and dates to confirm</div></div></div>
    </section>

    <section className="contact-section" id="contact"><div className="section-shell contact-inner"><span className="micro-label">HAVE A GOOD PROBLEM?</span><h2>Let’s build something<br/><em>meaningful.</em></h2><p>Interested in software engineering, AI, or data-focused opportunities? I’d be glad to connect.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={16}/></a><a className="button button-outline" href={profile.resume} download>Get my resume <ArrowDown size={15}/></a></div><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={15}/> {profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={12}/></a></div></div></section>

    <footer className="footer"><a href="#home" className="brand"><span className="brand-mark">S<span>.</span></span><span>SWAROOP<span className="brand-sub">ENGINEERING PORTFOLIO</span></span></a><span>Designed to make the work easy to explore.</span><span>© {new Date().getFullYear()} SWAROOP</span></footer>

    <button className="terminal-fab" onClick={()=>setTerminalOpen(true)} aria-label="Open engineering terminal"><Terminal size={17}/><span>Terminal</span></button>

    <AnimatePresence>{recruiter&&<motion.div className="modal-backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={()=>setRecruiter(false)}><motion.div className="recruiter-modal" initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:20, opacity:0 }} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setRecruiter(false)}><X/></button><span className="micro-label">RECRUITER BRIEF / 60 SECONDS</span><h2>Meet <em>Swaroop.</em></h2><p className="modal-lede">B.Tech Data Science undergraduate (2023–2027) focused on software engineering, AI, data engineering, and full-stack development.</p><div className="recruiter-facts"><div><span>CORE AREAS</span><b>Java · Python · JavaScript · React · Node · AI/ML · SQL</b></div><div><span>EXPERIENCE</span><b>AWS Data Engineering · MERN Stack · DTCC IT · Google AI-ML</b></div><div><span>PROJECT HIGHLIGHTS</span><b>AI Security Alert Assistant · Position & Reconciliation · TimeTide</b></div></div><div className="modal-actions"><a className="button button-primary" href={profile.resume} download>Download resume <ArrowDown size={15}/></a><a className="button button-outline" href="#contact" onClick={()=>setRecruiter(false)}>Contact <ArrowUpRight size={15}/></a></div><p className="fine-print">Project specifics and contact links should be completed before public launch.</p></motion.div></motion.div>}</AnimatePresence>

    <AnimatePresence>{terminalOpen&&<motion.div className="terminal-panel" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:20 }}><div className="terminal-head"><span><Terminal size={15}/> SWAROOP.SYS <i>interactive shell</i></span><button onClick={()=>setTerminalOpen(false)} aria-label="Close terminal"><X size={17}/></button></div><pre>{output}</pre><div className="terminal-input"><span>visitor@swaroop:~$</span><input value={command} onChange={e=>setCommand(e.target.value)} onKeyDown={e=>e.key==="Enter"&&runCommand()} placeholder="type a command..." autoFocus/><button onClick={runCommand}><ArrowUpRight size={16}/></button></div></motion.div>}</AnimatePresence>

    <AnimatePresence>{selectedProject&&<motion.div className="modal-backdrop project-backdrop" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} onClick={()=>setActiveProject(null)}><motion.div className="project-modal" initial={{ y:24, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:24, opacity:0 }} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActiveProject(null)}><X/></button><span className="micro-label">CASE STUDY / {selectedProject.number} — {selectedProject.type}</span><h2>{selectedProject.name}</h2><p className="modal-lede">{selectedProject.description}</p><div className="case-grid"><CaseBlock title="Problem" text={selectedProject.problem}/><CaseBlock title="Approach" text={selectedProject.solution}/><CaseBlock title="My contribution" text={selectedProject.contribution}/><CaseBlock title="Challenges" text={selectedProject.challenge}/><CaseBlock title="Outcome" text={selectedProject.outcome}/></div><div className="case-architecture"><span className="micro-label">SYSTEM FLOW / CONCEPTUAL — CONFIRM IMPLEMENTATION</span><div>{selectedProject.architecture.map((a,i)=><div key={a}><span>{String(i+1).padStart(2,"0")}</span><b>{a}</b>{i<selectedProject.architecture.length-1&&<ArrowRight size={15}/>}</div>)}</div></div><div className="tag-row case-tags">{selectedProject.stack.map(t=><span key={t}>{t}</span>)}</div><div className="case-footer"><span className="fine-print">Add verified repository, demo, screenshots, and technical details before publishing.</span><div>{selectedProject.repo?<a href={selectedProject.repo} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>:<span>Repository link pending</span>}{selectedProject.live?<a href={selectedProject.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14}/></a>:<span>Live demo pending</span>}</div></div></motion.div></motion.div>}</AnimatePresence>
  </main>;
}

function SectionLabel({number,title,kicker}:{number:string,title:string,kicker:string}) {
  return <div className="section-label"><span>{number} / {kicker}</span><h2>{title}</h2><span className="label-rule"/></div>;
}
function CaseBlock({title,text}:{title:string,text:string}) {
  return <div className="case-block"><span className="micro-label">{title}</span><p>{text}</p></div>;
}