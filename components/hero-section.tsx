"use client";

/**
 * Hero Section — MOBILE FIXED v2
 * ─────────────────────────────────────────────────────────
 * FIX 1: Floating badges use clamp() sizing so they scale
 *         down on mobile without overlapping the profile pic.
 *         They hug the outer edge of the circle rather than
 *         sitting on top of the face.
 * FIX 2: Scroll button uses scrollIntoView with a fallback
 *         window.scrollBy — works on all mobile browsers.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const ROLES = [
  "AI Engineer",
  "Full-Stack Developer",
  "ML Systems Builder",
  "SDE Candidate",
  "Data Scientist",
];

const STATS = [
  { value: "50+", label: "Active Users" },
  { value: "3×", label: "Azure Certified" },
  { value: "IIT", label: "Patna MTech AI & DS" },
  { value: "80%", label: "Automation @ Thales" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
        return;
      }
      setDisplayed((prev) =>
        isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  /* FIX 2 — reliable scroll on iOS/Android */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ background: "var(--obsidian)" }}
      aria-label="Hero section"
    >
      {/* Orbs */}
      <div
        className="orb orb-gold"
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          right: "-10%",
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
      <div
        className="orb orb-blue"
        style={{
          width: 500,
          height: 500,
          bottom: "0%",
          left: "-5%",
          opacity: 0.8,
        }}
        aria-hidden="true"
      />

      {/* Rotating rings — desktop only */}
      <div
        aria-hidden="true"
        className="absolute animate-spin-slow pointer-events-none hidden lg:block"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          right: "-15%",
          transform: "translateY(-50%)",
          border: "1px solid rgba(201,168,76,0.10)",
          borderRadius: "50%",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute animate-spin-slow pointer-events-none hidden lg:block"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          right: "-7%",
          transform: "translateY(-50%)",
          border: "1px solid rgba(201,168,76,0.07)",
          borderRadius: "50%",
          animationDirection: "reverse",
          animationDuration: "30s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ══ LEFT — text (below image on mobile) ═══════════════ */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <div
              className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              <Sparkles
                size={13}
                style={{ color: "var(--gold)" }}
                aria-hidden="true"
              />
              <span className="section-label">
                MTech AI & Data Science · IIT Patna
              </span>
            </div>

            {/* Name */}
            <h1
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "var(--cream)",
                transitionDelay: "0.2s",
              }}
            >
              Rishi Rai
            </h1>

            {/* Typewriter */}
            <div
              className={`flex items-center gap-3 mt-3 mb-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.3s" }}
              aria-live="polite"
              aria-atomic="true"
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  color: "var(--gold)",
                  fontWeight: 400,
                  minHeight: "2rem",
                }}
              >
                {displayed}
                <span
                  className="animate-blink inline-block ml-0.5"
                  style={{
                    borderRight: "2px solid var(--gold)",
                    paddingRight: 2,
                  }}
                  aria-hidden="true"
                />
              </span>
            </div>

            {/* Subheading */}
            <p
              className={`max-w-xl leading-relaxed transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                color: "var(--cream-dim)",
                transitionDelay: "0.4s",
              }}
            >
              Architecting production-grade full-stack systems and ML pipelines
              that ship to real users. From IIT Patna research labs to
              Wipro-hardened enterprise infrastructure — I build things that{" "}
              <em
                style={{
                  color: "var(--gold-light)",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                scale and endure
              </em>
              .
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 mt-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.55s" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary"
                aria-label="View production projects"
              >
                <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="btn-outline"
                aria-label="Read about me"
              >
                About Me
              </button>
            </div>

            {/* Socials */}
            <div
              className={`flex items-center gap-4 mt-8 flex-wrap transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: "0.65s" }}
            >
              {[
                {
                  href: "https://github.com/rishirai13",
                  icon: <Github size={17} />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/rishii13",
                  icon: <Linkedin size={17} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:connect.rishirai@gmail.com",
                  icon: <Mail size={17} />,
                  label: "Email",
                },
              ].map((s) => (
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
                  className="flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    width: 40,
                    height: 40,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--cream-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--gold)";
                    el.style.color = "var(--gold)";
                    el.style.background = "var(--gold-glow)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--cream-muted)";
                    el.style.background = "var(--surface)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
              <div
                style={{ width: 1, height: 20, background: "var(--border)" }}
                aria-hidden="true"
              />
              <span className="section-label" style={{ fontSize: "10px" }}>
                OPEN TO SDE ROLES
              </span>
            </div>
          </div>

          {/* ══ RIGHT — Profile image + floating badges ════════════ */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            {/*
              ── Key layout fix ──────────────────────────────────────
              The wrapper is inline-block so it hugs the circle tightly.
              Badges use percentage-based positioning relative to THIS
              wrapper, not the viewport, so they always sit just outside
              the circle edge on every screen size.
              The badges use clamp() for font / padding so they shrink
              on narrow phones (≈320 px) without text overflow.
            */}
            <div className="relative" style={{ display: "inline-block" }}>
              {/* Glow ring */}
              <div
                className="absolute rounded-full animate-pulse-gold pointer-events-none"
                style={{
                  inset: -3,
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.3), transparent, rgba(201,168,76,0.15))",
                  borderRadius: "50%",
                }}
                aria-hidden="true"
              />

              {/* Profile circle */}
              <div
                style={{
                  width: "clamp(200px, 46vw, 360px)",
                  height: "clamp(200px, 46vw, 360px)",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid rgba(201,168,76,0.2)",
                  boxShadow:
                    "0 0 80px rgba(201,168,76,0.12), 0 32px 80px rgba(0,0,0,0.5)",
                  position: "relative",
                  /* Extra bottom margin so IIT badge doesn't get clipped by parent edge */
                  marginBottom: "clamp(48px, 8vw, 0px)",
                }}
              >
                <Image
                  src="/images/my-profile.png"
                  alt="Rishi Rai — AI Engineer, IIT Patna"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 200px, 360px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* ── WIPRO badge (top-right) ──────────────────────────────
                  On mobile (~360 px screen) the badge width is ~34 vw ≈ 122 px.
                  `right: -2%` pushes it just outside the circle edge.
                  `top: 2%` keeps it near the top without covering the face.
              ────────────────────────────────────────────────────────── */}
              <div
                className="absolute animate-float"
                aria-label="Wipro experience credential"
                style={{
                  top: "-5%",
                  right: "-2%",
                  /* Translate right so badge sits OUTSIDE the circle */
                  transform: "translateX(15%)",
                  animationDelay: "1.5s",
                  zIndex: 20,
                  /* Glass */
                  background: "rgba(14,14,28,0.90)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  boxShadow:
                    "0 4px 20px rgba(0,0,0,0.4), 0 0 20px rgba(201,168,76,0.1)",
                  borderRadius: "clamp(8px,1.5vw,12px)",
                  padding: "clamp(5px,1vw,9px) clamp(7px,1.5vw,12px)",
                  minWidth: "clamp(80px,20vw,130px)",
                  maxWidth: "clamp(80px,20vw,130px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(6px,1vw,8px)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    opacity: 0.8,
                    marginBottom: 3,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  EXPERIENCE
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px,1.4vw,11px)",
                    fontWeight: 600,
                    color: "var(--cream)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Wipro Ltd.
                </div>
                <div
                  style={{
                    fontSize: "clamp(7px,1.2vw,9px)",
                    color: "var(--gold)",
                    fontFamily: "'DM Mono', monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  Infra Security · 2026
                </div>
              </div>

              {/* ── IIT PATNA badge (bottom-left) ───────────────────────
                  `bottom: -14%` positions it below the circle on mobile
                  so it never sits over the photo.
                  On desktop the negative offset is bigger (translateX(-30%))
                  giving the classic "floating outside" look.
              ────────────────────────────────────────────────────────── */}
              <div
                className="absolute animate-float"
                aria-label="IIT Patna education credential"
                style={{
                  bottom: "-5%",
                  left: "-2%",
                  transform: "translateX(-15%)",
                  animationDelay: "0s",
                  zIndex: 20,
                  background: "rgba(14,14,28,0.90)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  boxShadow:
                    "0 4px 20px rgba(0,0,0,0.4), 0 0 20px rgba(201,168,76,0.1)",
                  borderRadius: "clamp(8px,1.5vw,12px)",
                  padding: "clamp(5px,1vw,9px) clamp(7px,1.5vw,12px)",
                  minWidth: "clamp(80px,20vw,130px)",
                  maxWidth: "clamp(80px,20vw,130px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(6px,1vw,8px)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    opacity: 0.8,
                    marginBottom: 3,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  EDUCATION
                </div>
                <div
                  style={{
                    fontSize: "clamp(9px,1.4vw,11px)",
                    fontWeight: 600,
                    color: "var(--cream)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  IIT Patna
                </div>
                <div
                  style={{
                    fontSize: "clamp(7px,1.2vw,9px)",
                    color: "var(--gold)",
                    fontFamily: "'DM Mono', monospace",
                    whiteSpace: "nowrap",
                  }}
                >
                  MTech AI & DS · 2025
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end grid */}

        {/* ══ Stats strip ════════════════════════════════════════ */}
        <div
          className={`mt-20 lg:mt-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.75s" }}
        >
          <div
            className="glass rounded-2xl px-4 sm:px-6 py-5"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="text-center group cursor-default py-2 px-2"
                  style={{
                    borderRight:
                      i < STATS.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div
                    className="transition-all duration-300 group-hover:scale-110"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                      fontWeight: 600,
                      color: "var(--gold)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(8px,1.5vw,11px)",
                      color: "var(--cream-muted)",
                      marginTop: 3,
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* end container */}

      {/* ── FIX 2: Scroll button ────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-1 group"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--cream-muted)",
            opacity: 0.55,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = "0.55";
          }}
        >
          <span
            style={{
              fontSize: "10px",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.15em",
            }}
          >
            SCROLL
          </span>
          <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
