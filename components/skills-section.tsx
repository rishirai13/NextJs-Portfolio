"use client";

/**
 * Skills Section
 * ──────────────────────────────────────────────────────────
 * • Four skill categories from resume
 * • Animated gold progress bars on scroll-trigger
 * • Staggered card reveals
 * • Core languages pill strip
 * • Additional expertise trio at bottom
 * • Fully accessible with ARIA
 */

import { useEffect, useRef, useState, ReactNode } from "react";
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Globe,
  Cpu,
  Terminal,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
}
interface Category {
  icon: ReactNode;
  category: string;
  accentColor: string;
  accentBg: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: Category[] = [
  {
    icon: <Code2 size={20} />,
    category: "Frontend & Full-Stack",
    accentColor: "#C9A84C",
    accentBg: "rgba(201,168,76,0.08)",
    skills: [
      { name: "React.js / Next.js", level: 90 },
      { name: "TypeScript / JavaScript ES6+", level: 88 },
      { name: "Tailwind CSS / HTML5", level: 90 },
      { name: "REST API Design", level: 85 },
    ],
  },
  {
    icon: <Cpu size={20} />,
    category: "AI / ML & Data Science",
    accentColor: "#34D399",
    accentBg: "rgba(52,211,153,0.08)",
    skills: [
      { name: "Python · scikit-learn · XGBoost", level: 85 },
      { name: "Deep Learning & NLP", level: 75 },
      { name: "SHAP Explainability", level: 78 },
      { name: "Pandas / Data Analysis", level: 83 },
    ],
  },
  {
    icon: <Database size={20} />,
    category: "Databases & Cloud",
    accentColor: "#A78BFA",
    accentBg: "rgba(167,139,250,0.08)",
    skills: [
      { name: "PostgreSQL / Supabase", level: 83 },
      { name: "MongoDB", level: 78 },
      { name: "Microsoft Azure", level: 72 },
      { name: "Docker & Deployment", level: 76 },
    ],
  },
  {
    icon: <Shield size={20} />,
    category: "Infrastructure & Security",
    accentColor: "#60A5FA",
    accentBg: "rgba(96,165,250,0.08)",
    skills: [
      { name: "Linux / Bash / PowerShell", level: 82 },
      { name: "Git & GitHub", level: 88 },
      { name: "Palo Alto Firewall / AD", level: 70 },
      { name: "Kali Linux / Pen Testing", level: 68 },
    ],
  },
];

const LANGUAGES = [
  "Java",
  "Python",
  "TypeScript",
  "SQL",
  "Bash/Shell",
  "PowerShell",
  "C",
];

const EXPERTISE_TRIO = [
  {
    icon: <Globe size={22} />,
    title: "AI Research Coursework",
    body: "Advanced ML · Deep Learning · NLP · Optimisation Techniques · Probability & Statistics",
    color: "#C9A84C",
  },
  {
    icon: <Terminal size={22} />,
    title: "SDE Core Computer Science",
    body: "Data Structures & Algorithms · DBMS · OS · Computer Networks · OOP",
    color: "#34D399",
  },
  {
    icon: <Code2 size={22} />,
    title: "Language Arsenal",
    body: "Java · Python · TypeScript · SQL · Bash · PowerShell · C — production-tested across all",
    color: "#60A5FA",
  },
];

/* ── Single animated skill bar ──────────────────────────── */
function SkillBar({
  skill,
  accentColor,
  visible,
  delay,
}: {
  skill: Skill;
  accentColor: string;
  visible: boolean;
  delay: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(skill.level), 600 + delay);
      return () => clearTimeout(t);
    }
  }, [visible, skill.level, delay]);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span
          style={{
            fontSize: "13px",
            color: "var(--cream-dim)",
            fontWeight: 400,
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontSize: "11px",
            color: accentColor,
            fontFamily: "'DM Mono', monospace",
            opacity: 0.85,
          }}
          aria-label={`${skill.level} percent proficiency`}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className="skill-bar-track"
        role="progressbar"
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}99)`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--obsidian-2)" }}
      aria-label="Technical Skills"
    >
      {/* Orb */}
      <div
        className="orb orb-gold absolute"
        style={{
          width: 500,
          height: 500,
          bottom: "0%",
          left: "-5%",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────── */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <div className="section-label mb-3">Expertise</div>
          <div className="gold-line mb-5" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--cream)",
                lineHeight: 1.1,
              }}
            >
              Technical
              <br />
              <span className="text-gradient-gold">Arsenal</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--cream-muted)",
                maxWidth: 300,
                lineHeight: 1.7,
              }}
            >
              Every skill below has shipped to production or powered IIT Patna
              research. No padding — only what I've used.
            </p>
          </div>
        </div>

        {/* ── Language pill strip ────────────────────── */}
        <div className={`mb-14 reveal ${visible ? "visible" : ""} delay-1`}>
          <div
            className="glass rounded-2xl px-8 py-5 flex flex-wrap items-center gap-3"
            style={{ border: "1px solid var(--border)" }}
          >
            <span className="section-label mr-2">Languages</span>
            {LANGUAGES.map((lang) => (
              <span
                key={lang}
                className="tag transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: "var(--gold-glow)",
                  borderColor: "rgba(201,168,76,0.3)",
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* ── Skill category grid ────────────────────── */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.category}
              className={`glass rounded-2xl p-8 reveal ${visible ? "visible" : ""} delay-${i + 1}`}
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: cat.accentBg, color: cat.accentColor }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--cream)",
                  }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    accentColor={cat.accentColor}
                    visible={visible}
                    delay={i * 200 + j * 120}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Expertise trio ─────────────────────────── */}
        <div
          className={`grid md:grid-cols-3 gap-6 reveal ${visible ? "visible" : ""} delay-4`}
        >
          {EXPERTISE_TRIO.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-7 text-center group transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${item.color}40`;
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 20px ${item.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${item.color}14`, color: item.color }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h4
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--cream)",
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--cream-muted)",
                  lineHeight: 1.75,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
