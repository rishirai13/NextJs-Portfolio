"use client";

/**
 * Experience Section  (NEW — not in original)
 * ──────────────────────────────────────────────────────────
 * • Vertical timeline with gold line + dot markers
 * • Two roles: Wipro + Thales (exact resume bullets)
 * • Scroll-triggered reveal per timeline item
 * • Key achievement callouts
 * • Fully accessible with semantic HTML
 */

import { useEffect, useRef, useState } from "react";
import { Shield, Code2, ExternalLink, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    icon: <Shield size={20} />,
    company: "Wipro Limited",
    role: "Infrastructure Security Trainee",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    accentColor: "#34D399",
    accentBg: "rgba(52,211,153,0.08)",
    bullets: [
      "Built Windows Server 2022 AD domain with DNS, DHCP, and PowerShell process-monitoring.",
      "Configured Palo Alto firewall rules — AppID blocking, URL filtering, firewalld port hardening.",
      "Ran ARP poisoning and credential-harvesting attack on live AD using Kali Linux.",
      "Deployed Squid proxy; blocked 3 domains, captured traffic logs for audit.",
      "Applied CIS Benchmark controls; scanned lab network with Infection Monkey; analysed exposure report.",
      "Encoded PowerShell payload via CyberChef; detected execution in Windows event logs.",
    ],
    highlight: { value: "CIS", label: "Benchmark Controls Applied" },
  },
  {
    icon: <Code2 size={20} />,
    company: "Thales DIS Technology Pvt. Ltd.",
    role: "Software Engineering Intern",
    period: "Jun 2023 – Jul 2023",
    location: "Noida, India",
    accentColor: "#C9A84C",
    accentBg: "rgba(201,168,76,0.08)",
    bullets: [
      "Built a Linux PAM module in C with multi-factor authentication — cut manual verification steps by ~40% in the test environment.",
      "Automated team workflows with Python and Bash scripts, reducing manual effort by 80%.",
      "Wrote 20+ edge-case tests with zero regressions on handoff.",
    ],
    highlight: { value: "80%", label: "Manual Effort Reduced via Automation" },
  },
];

export default function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-28 overflow-hidden grid-bg"
      style={{ background: "var(--obsidian)" }}
      aria-label="Work Experience"
    >
      {/* Orb */}
      <div
        className="orb orb-gold absolute"
        style={{
          width: 600,
          height: 600,
          top: "10%",
          left: "-10%",
          opacity: 0.25,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────── */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <div className="section-label mb-3">Experience</div>
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
            Where I've
            <br />
            <span className="text-gradient-gold">Shipped</span>
          </h2>
        </div>

        {/* ── Timeline ───────────────────────────────── */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute hidden lg:block"
            style={{
              left: "calc(50% - 0.5px)",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(180deg, var(--gold) 0%, rgba(201,168,76,0.1) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start reveal ${visible ? "visible" : ""} delay-${i + 1}`}
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="hidden lg:block absolute timeline-dot animate-pulse-gold"
                  style={{
                    left: "calc(50% - 6px)",
                    top: 24,
                    background: exp.accentColor,
                    boxShadow: `0 0 0 4px ${exp.accentColor}20, 0 0 16px ${exp.accentColor}30`,
                  }}
                  aria-hidden="true"
                />

                {/* Left content OR right content based on index */}
                <div
                  className={
                    i % 2 === 0
                      ? "lg:text-right lg:pr-12"
                      : "lg:col-start-2 lg:pl-12"
                  }
                >
                  {/* Company badge */}
                  <div
                    className="inline-flex items-center gap-3 glass-gold rounded-2xl px-5 py-4 mb-6 group transition-all duration-300 hover:-translate-y-1"
                    style={{ cursor: "default" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: exp.accentBg,
                        color: exp.accentColor,
                      }}
                      aria-hidden="true"
                    >
                      {exp.icon}
                    </div>
                    <div className={i % 2 === 0 ? "lg:text-right" : ""}>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "var(--cream)",
                        }}
                      >
                        {exp.company}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontFamily: "'DM Mono', monospace",
                          color: exp.accentColor,
                        }}
                      >
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  {/* Period + location */}
                  <div
                    className="flex items-center gap-3 mb-4 flex-wrap"
                    style={{
                      justifyContent: i % 2 === 0 ? undefined : undefined,
                    }}
                  >
                    <span
                      className="section-label"
                      style={{ color: exp.accentColor, opacity: 0.9 }}
                    >
                      {exp.period}
                    </span>
                    <span className="tag" style={{ fontSize: "10px" }}>
                      {exp.location}
                    </span>
                  </div>

                  {/* Highlight stat */}
                  <div
                    className="glass rounded-xl px-5 py-4 mb-4 inline-block"
                    style={{ border: `1px solid ${exp.accentColor}25` }}
                    aria-label={`Key achievement: ${exp.highlight.value} — ${exp.highlight.label}`}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: exp.accentColor,
                        lineHeight: 1,
                      }}
                    >
                      {exp.highlight.value}
                    </span>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "var(--cream-muted)",
                        fontFamily: "'DM Mono', monospace",
                        marginTop: 2,
                      }}
                    >
                      {exp.highlight.label}
                    </div>
                  </div>
                </div>

                {/* Bullet list side */}
                <div
                  className={`glass rounded-2xl p-7 ${
                    i % 2 === 0
                      ? "lg:col-start-2 lg:pl-12"
                      : "lg:col-start-1 lg:row-start-1 lg:pr-12"
                  }`}
                  style={{ border: "1px solid var(--border)" }}
                >
                  <ul
                    className="space-y-4"
                    aria-label={`${exp.company} responsibilities`}
                  >
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={14}
                          className="flex-shrink-0 mt-1"
                          style={{ color: exp.accentColor }}
                          aria-hidden="true"
                        />
                        <span
                          style={{
                            fontSize: "13px",
                            color: "var(--cream-dim)",
                            lineHeight: 1.75,
                          }}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
