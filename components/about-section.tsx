"use client";

/**
 * About Section
 * ──────────────────────────────────────────────────────────
 * • Scroll-triggered reveal animations
 * • Two-column layout: bio + credentials
 * • Education & experience cards with glassmorphism
 * • Certifications with gold dot markers
 * • Interest tags
 * • "My Journey" narrative from actual resume data
 */

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Award, Code2, Shield } from "lucide-react";

const CREDENTIAL_CARDS = [
  {
    icon: <GraduationCap size={22} />,
    title: "MTech AI & DS",
    org: "IIT Patna",
    detail: "Computer Science & Engineering",
    period: "2026 – Present",
    color: "#C9A84C",
    bg: "rgba(201,168,76,0.08)",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "BTech CSE",
    org: "GLA University, Mathura",
    detail: "Data Analytics Specialisation",
    period: "2021 – 2025",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.08)",
  },
  {
    icon: <Shield size={22} />,
    title: "Infra Security Trainee",
    org: "Wipro Limited",
    detail: "AD · Palo Alto · Kali Linux",
    period: "Jan – Mar 2026",
    color: "#34D399",
    bg: "rgba(52,211,153,0.08)",
  },
  {
    icon: <Briefcase size={22} />,
    title: "SWE Intern",
    org: "Thales DIS Tech Pvt. Ltd.",
    detail: "Linux PAM · Python · Bash",
    period: "Jun – Jul 2023",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.08)",
  },
];

const CERTIFICATIONS = [
  "Microsoft Certified: Azure Data Fundamentals (DP-900)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: AI Fundamentals (AI-900)",
];

const INTERESTS = [
  "AI / ML",
  "Full-Stack SDE",
  "Data Science",
  "Cloud Security",
  "NLP",
  "Open Source",
  "SDE Prep",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  /* ── Intersection observer ─────────────────────────── */
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
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--obsidian-2)" }}
      aria-label="About Rishi Rai"
    >
      {/* Subtle orb */}
      <div
        className="orb orb-gold absolute"
        style={{
          width: 500,
          height: 500,
          top: "0%",
          left: "30%",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────── */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <div className="section-label mb-3">About Me</div>
          <div className="gold-line mb-5" aria-hidden="true" />
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--cream)",
              lineHeight: 1.1,
            }}
          >
            The Architect Behind
            <br />
            <span className="text-gradient-gold">the Code</span>
          </h2>
        </div>

        {/* ── Two-column layout ──────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ── LEFT: Narrative bio ──────────────────── */}
          <div>
            <div
              className={`space-y-5 reveal ${visible ? "visible" : ""} delay-1`}
            >
              <p
                style={{
                  color: "var(--cream-dim)",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                I'm an{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 500 }}>
                  AI-first full-stack engineer
                </strong>{" "}
                at IIT Patna, sitting at the intersection of production-grade
                web systems and applied machine learning. My work doesn't live
                in notebooks — it ships to real users.
              </p>
              <p
                style={{
                  color: "var(--cream-dim)",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                At{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 500 }}>
                  Thales DIS Technology
                </strong>
                , I engineered a Linux PAM authentication module in C — cutting
                manual verification steps by ~40% in the test environment and
                automating team workflows to reduce manual effort by 80% with
                zero regressions.
              </p>
              <p
                style={{
                  color: "var(--cream-dim)",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                At{" "}
                <strong style={{ color: "var(--cream)", fontWeight: 500 }}>
                  Wipro
                </strong>
                , I hardened enterprise infrastructure: configuring Palo Alto
                firewalls with AppID/URL filtering, running live ARP-poisoning
                attacks on Active Directory using Kali Linux, and applying CIS
                Benchmark controls across lab networks.
              </p>
              <p
                style={{
                  color: "var(--cream-dim)",
                  lineHeight: 1.85,
                  fontSize: "1rem",
                }}
              >
                My projects live in production.{" "}
                <strong style={{ color: "var(--gold)" }}>DevTrack</strong>{" "}
                serves 50+ active developers;{" "}
                <strong style={{ color: "var(--gold)" }}>NOTE-MINT</strong> runs
                entirely client-side with sub-second load; my{" "}
                <strong style={{ color: "var(--gold)" }}>
                  Attrition ML System
                </strong>{" "}
                uses XGBoost + SHAP for real-time explainable risk scoring —
                Dockerised and deployed.
              </p>
            </div>

            {/* Certifications */}
            <div className={`mt-10 reveal ${visible ? "visible" : ""} delay-2`}>
              <h3
                className="mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--cream)",
                }}
              >
                Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Award
                      size={14}
                      style={{ color: "var(--gold)", flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span
                      style={{ fontSize: "13px", color: "var(--cream-dim)" }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest tags */}
            <div className={`mt-8 reveal ${visible ? "visible" : ""} delay-3`}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "var(--cream)",
                }}
              >
                Focus Areas
              </h3>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Areas of interest"
              >
                {INTERESTS.map((tag) => (
                  <span key={tag} className="tag" role="listitem">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Credential cards ──────────────── */}
          <div
            className={`grid sm:grid-cols-2 gap-5 reveal-right ${visible ? "visible" : ""} delay-2`}
          >
            {CREDENTIAL_CARDS.map((card, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 group transition-all duration-400"
                style={{
                  borderColor: "var(--border)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = `${card.color}40`;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.3), 0 0 24px ${card.color}12`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "var(--shadow-card)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: card.bg, color: card.color }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                {/* Content */}
                <div
                  className="section-label mb-1"
                  style={{ color: card.color, opacity: 1, fontSize: "10px" }}
                >
                  {card.period}
                </div>
                <h4
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--cream)",
                    marginBottom: 2,
                  }}
                >
                  {card.title}
                </h4>
                <div
                  style={{
                    fontSize: "13px",
                    color: card.color,
                    fontWeight: 500,
                    marginBottom: 4,
                  }}
                >
                  {card.org}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--cream-muted)",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {card.detail}
                </div>
              </div>
            ))}

            {/* ── Highlight stat card ───────────────── */}
            <div
              className="sm:col-span-2 glass-gold rounded-2xl p-6 flex items-center gap-6"
              aria-label="Key achievement: 80% automation at Thales"
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3.5rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                80%
              </div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--cream)",
                    marginBottom: 4,
                  }}
                >
                  Workflow Automation at Thales DIS
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--cream-muted)",
                    fontFamily: "'DM Mono', monospace",
                    lineHeight: 1.7,
                  }}
                >
                  Python + Bash scripting · 20+ edge-case tests written · zero
                  regressions on handoff
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
