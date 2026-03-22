"use client";

/**
 * Navigation Component
 * ─────────────────────
 * • Fixed top bar with blur-glass effect on scroll
 * • Gold accent logo with monogram style
 * • Animated underline nav links
 * • Resume download button with hover shimmer
 * • Mobile hamburger with animated menu
 * • Keyboard accessible
 */

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  /* ── Scroll listener ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section detection
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume/Rishi_Rai_Resume.pdf";
    a.download = "Rishi_Rai_Resume.pdf";
    a.click();
  };

  return (
    <>
      {/* ── Main nav bar ───────────────────────────────── */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "py-3 border-b" : "py-5"
        }`}
        style={{
          background: isScrolled ? "rgba(10,10,15,0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(24px) saturate(180%)"
            : "none",
          borderColor: "rgba(201,168,76,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* ── Logo ─────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-center gap-3 group"
          >
            {/* Monogram badge */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #A07830)",
                color: "#0A0A0F",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              RR
            </div>
            <span
              className="hidden sm:block font-medium tracking-wide transition-colors duration-300 group-hover:opacity-100"
              style={{
                color: "rgba(245,240,232,0.75)",
                fontSize: "14px",
                letterSpacing: "0.06em",
              }}
            >
              Rishi Rai
            </span>
          </button>

          {/* ── Desktop links ─────────────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-label={`Navigate to ${link.label}`}
                className="nav-link"
                style={{
                  color:
                    active === link.id ? "var(--gold)" : "var(--cream-muted)",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────── */}
          <div className="hidden md:block">
            <button
              onClick={downloadResume}
              aria-label="Download resume PDF"
              className="btn-primary relative overflow-hidden text-sm"
              style={{ padding: "10px 22px" }}
            >
              <Download size={14} strokeWidth={2} />
              <span className="relative z-10">Resume</span>
            </button>
          </div>

          {/* ── Mobile hamburger ──────────────────────── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            style={{
              color: "var(--cream)",
              background: isOpen ? "var(--gold-dim)" : "transparent",
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ── Mobile menu ────────────────────────────── */}
        {isOpen && (
          <div
            className="md:hidden mobile-menu-enter border-t"
            style={{
              background: "rgba(10,10,15,0.97)",
              backdropFilter: "blur(24px)",
              borderColor: "var(--border)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left py-3 px-4 rounded-lg text-sm font-medium tracking-wide transition-all duration-200"
                  style={{
                    color:
                      active === link.id ? "var(--gold)" : "var(--cream-dim)",
                    background:
                      active === link.id ? "var(--gold-glow)" : "transparent",
                    animationDelay: `${i * 0.05}s`,
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div
                className="mt-4 pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <button
                  onClick={downloadResume}
                  className="btn-primary w-full justify-center"
                >
                  <Download size={14} strokeWidth={2} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
