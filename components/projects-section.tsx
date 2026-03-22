"use client";

/**
 * Projects Section
 * ──────────────────────────────────────────────────────────
 * • Scroll-triggered card reveals with stagger
 * • Glassmorphism project cards with hover lift
 * • Tech tag badges
 * • Prominent impact stats per project
 * • GitHub + Live Demo buttons with icon micro-interactions
 * • Projects sourced 1:1 from IIT Patna resume
 */

import { useEffect, useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  Brain,
  Zap,
} from "lucide-react";

const PROJECTS = [
  {
    id: "devtrack",
    icon: <TrendingUp size={22} />,
    label: "Full-Stack · Next.js 15",
    title: "DevTrack",
    tagline:
      "Coding journal with streak tracking, visual insights & public portfolio sharing.",
    description:
      "Production app serving 50+ active developers. Streak analytics, tag-based progress logging, Chart.js learning-pattern dashboards, and public portfolio export — all backed by PostgreSQL + Supabase with real-time sync.",
    period: "Sep 2025",
    tech: [
      "Next.js 15",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Chart.js",
      "Tailwind CSS",
    ],
    highlights: [
      { label: "Active Users", value: "50+" },
      { label: "Tech Stack", value: "6 libs" },
      { label: "Data Layer", value: "Real-time" },
    ],
    accentColor: "#C9A84C",
    accentBg: "rgba(201,168,76,0.06)",
    liveUrl: "#",
    githubUrl: "https://github.com/rishirai13",
  },
  {
    id: "attrition",
    icon: <Brain size={22} />,
    label: "ML System · XGBoost + SHAP",
    title: "Employee Attrition Prediction",
    tagline:
      "ML system scoring attrition risk per employee with full SHAP explainability.",
    description:
      "Probabilistic risk scoring with real-time inference via Flask API. Interactive analytics dashboard visualises SHAP feature importance. Fully Dockerised for one-command deployment — production-ready ML pipeline.",
    period: "Jan 2026",
    tech: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "SHAP",
      "Flask",
      "Docker",
      "Pandas",
    ],
    highlights: [
      { label: "Model", value: "XGBoost" },
      { label: "Explainability", value: "SHAP" },
      { label: "Deployment", value: "Docker" },
    ],
    accentColor: "#34D399",
    accentBg: "rgba(52,211,153,0.06)",
    liveUrl: "#",
    githubUrl: "https://github.com/rishirai13",
  },
  {
    id: "notemint",
    icon: <Zap size={22} />,
    label: "Frontend · Privacy-First",
    title: "NOTE-MINT",
    tagline:
      "Zero-tracking, session-only notes with instant PDF export — no accounts ever.",
    description:
      "Runs 100% in-browser. Tab close clears all data. Sub-second load time, single-click PDF export via PDF.js. TypeScript-first architecture with zero backend, zero storage, zero surveillance.",
    period: "Oct 2025",
    tech: ["TypeScript", "React", "sessionStorage", "PDF.js", "Tailwind CSS"],
    highlights: [
      { label: "Load Time", value: "<1s" },
      { label: "Backend", value: "Zero" },
      { label: "Privacy", value: "Complete" },
    ],
    accentColor: "#60A5FA",
    accentBg: "rgba(96,165,250,0.06)",
    liveUrl: "#",
    githubUrl: "https://github.com/rishirai13",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden grid-bg"
      style={{ background: "var(--obsidian)" }}
      aria-label="Featured Projects"
    >
      {/* Orb */}
      <div
        className="orb orb-gold absolute"
        style={{
          width: 600,
          height: 600,
          top: "20%",
          right: "-10%",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────── */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <div className="section-label mb-3">Work</div>
          <div className="gold-line mb-5" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 600,
                color: "var(--cream)",
                lineHeight: 1.1,
              }}
            >
              Production
              <br />
              <span className="text-gradient-gold">Projects</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--cream-muted)",
                maxWidth: 320,
                lineHeight: 1.7,
              }}
            >
              Each project ships to real users or enterprise environments. Code
              quality, measurable impact, production-grade architecture.
            </p>
          </div>
        </div>

        {/* ── Project cards ──────────────────────────── */}
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`project-card glass rounded-3xl overflow-hidden reveal ${visible ? "visible" : ""} delay-${i + 1}`}
              style={{ border: "1px solid var(--border)" }}
              aria-label={`Project: ${project.title}`}
            >
              <div className="grid lg:grid-cols-3 gap-0">
                {/* ── Main content (2/3) ────────────── */}
                <div className="lg:col-span-2 p-8 lg:p-10">
                  {/* Label + period */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: project.accentBg,
                          color: project.accentColor,
                        }}
                        aria-hidden="true"
                      >
                        {project.icon}
                      </div>
                      <span
                        className="section-label"
                        style={{ color: project.accentColor, opacity: 1 }}
                      >
                        {project.label}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2"
                      style={{ color: "var(--cream-muted)", fontSize: "12px" }}
                    >
                      <Calendar size={12} aria-hidden="true" />
                      <span style={{ fontFamily: "'DM Mono', monospace" }}>
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 600,
                      color: "var(--cream)",
                      marginBottom: 8,
                      lineHeight: 1.15,
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: project.accentColor,
                      fontWeight: 500,
                      marginBottom: 12,
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--cream-dim)",
                      lineHeight: 1.8,
                      marginBottom: 20,
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div
                    className="flex flex-wrap gap-2 mb-8"
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.tech.map((t) => (
                      <span key={t} className="tag" role="listitem">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="btn-outline"
                      style={{ padding: "10px 20px", fontSize: "13px" }}
                    >
                      <Github size={14} aria-hidden="true" />
                      Source Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="btn-primary"
                      style={{ padding: "10px 20px", fontSize: "13px" }}
                    >
                      <ExternalLink size={14} aria-hidden="true" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* ── Stats panel (1/3) ─────────────── */}
                <div
                  className="lg:border-l p-8 lg:p-10 flex flex-col justify-center gap-6"
                  style={{
                    borderColor: "var(--border)",
                    background: project.accentBg,
                  }}
                  aria-label={`${project.title} key metrics`}
                >
                  {project.highlights.map((h, j) => (
                    <div key={j} className="group cursor-default">
                      <div
                        className="transition-all duration-300 group-hover:scale-105"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "2rem",
                          fontWeight: 600,
                          color: project.accentColor,
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {h.value}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--cream-muted)",
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {h.label.toUpperCase()}
                      </div>
                      {j < project.highlights.length - 1 && (
                        <div
                          className="mt-5"
                          style={{
                            height: 1,
                            background: `${project.accentColor}20`,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── GitHub CTA ────────────────────────────── */}
        <div
          className={`text-center mt-14 reveal ${visible ? "visible" : ""} delay-4`}
        >
          <a
            href="https://github.com/rishirai13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
            className="btn-outline inline-flex items-center gap-3"
          >
            <Github size={16} aria-hidden="true" />
            View All Repositories on GitHub
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
