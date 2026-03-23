"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const SOCIALS = [
  {
    icon: <Github size={17} />,
    href: "https://github.com/rishirai13",
    label: "GitHub",
    hoverColor: "#C9A84C",
  },
  {
    icon: <Linkedin size={17} />,
    href: "https://linkedin.com/in/rishii13",
    label: "LinkedIn",
    hoverColor: "#60A5FA",
  },
  {
    icon: <Mail size={17} />,
    href: "mailto:connect.rishirai@gmail.com",
    label: "Email",
    hoverColor: "#34D399",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        background: "var(--obsidian)",
        borderTop: "1px solid var(--border)",
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex items-center gap-3 mb-4 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #A07830)",
                  color: "#0A0A0F",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                RR
              </div>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--cream)",
                }}
              >
                Rishi Rai
              </span>
            </button>
            <p
              style={{
                fontSize: "13px",
                color: "var(--cream-muted)",
                lineHeight: 1.8,
                maxWidth: 280,
              }}
            >
              AI-first full-stack engineer. IIT Patna MTech AI & DS. Building
              systems that scale — and endure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="section-label mb-4"
              style={{ color: "var(--gold)" }}
            >
              Navigation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  aria-label={`Go to ${link.label}`}
                  className="text-left transition-all duration-200"
                  style={{
                    fontSize: "13px",
                    color: "var(--cream-muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Outfit', sans-serif",
                    padding: "2px 0",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--cream-muted)";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div
              className="section-label mb-4"
              style={{ color: "var(--gold)" }}
            >
              Connect
            </div>

            <div className="flex gap-3 mb-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{
                    width: 44,
                    height: 44,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--cream-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = s.hoverColor;
                    el.style.borderColor = `${s.hoverColor}40`;
                    el.style.background = `${s.hoverColor}12`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--cream-muted)";
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--surface)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Availability pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                background: "rgba(52,211,153,0.08)",
                border: "1px solid rgba(52,211,153,0.2)",
              }}
              aria-label="Currently open to SDE roles"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                style={{ background: "#34D399" }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontSize: "11px",
                  color: "#34D399",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}
              >
                OPEN TO SDE ROLES
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div
          className="mt-10 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-center">
            <p
              style={{
                fontSize: "12px",
                color: "var(--cream-muted)",
                fontFamily: "'DM Mono', monospace",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              {"© "}
              {year}
              {" Rishi Rai · Built with "}
              <Heart
                size={11}
                className="inline text-red-500 fill-current"
                aria-label="love"
              />
              {" and strong opinions about scalable code."}
            </p>

            <p
              style={{
                fontSize: "11px",
                color: "var(--cream-muted)",
                fontFamily: "'DM Mono', monospace",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              IIT Patna · MTech AI &amp; DSE · 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
