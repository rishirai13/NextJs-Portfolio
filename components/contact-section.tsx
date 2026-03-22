"use client";

/**
 * Contact Section
 * ──────────────────────────────────────────────────────────
 * • Dark luxury form with gold focus states
 * • Animated success state with checkmark
 * • Contact info cards with hover lift
 * • Social link buttons
 * • Full ARIA accessibility
 */

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "connect.rishirai@gmail.com",
    href: "mailto:connect.rishirai@gmail.com",
    color: "#C9A84C",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91-9508300862",
    href: "tel:+919508300862",
    color: "#34D399",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "IIT Patna, Bihar, India",
    href: "#",
    color: "#A78BFA",
  },
];

const SOCIALS = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/rishirai13",
    label: "GitHub",
    color: "#C9A84C",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com/in/rishii13",
    label: "LinkedIn",
    color: "#60A5FA",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:connect.rishirai@gmail.com",
    label: "Email",
    color: "#34D399",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--obsidian-2)" }}
      aria-label="Contact Rishi Rai"
    >
      {/* Orb */}
      <div
        className="orb orb-gold absolute"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-15%",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ─────────────────────────── */}
        <div className={`mb-16 reveal ${visible ? "visible" : ""}`}>
          <div className="section-label mb-3">Contact</div>
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
              Let's Build
              <br />
              <span className="text-gradient-gold">Scalable AI</span> Together
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--cream-muted)",
                maxWidth: 320,
                lineHeight: 1.7,
              }}
            >
              Open to SDE roles, AI / full-stack collaborations, and freelance
              projects. Response within 24 hours.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* ── LEFT: Info panel ───────────────────── */}
          <div
            className={`space-y-5 reveal-left ${visible ? "visible" : ""} delay-1`}
          >
            {/* Contact info cards */}
            {CONTACT_INFO.map((info, i) => (
              <a
                key={i}
                href={info.href}
                aria-label={`${info.label}: ${info.value}`}
                className="glass flex items-center gap-5 rounded-2xl px-6 py-5 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${info.color}35`;
                  e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.3), 0 0 16px ${info.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "var(--shadow-card)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${info.color}14`, color: info.color }}
                  aria-hidden="true"
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--cream-muted)",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.1em",
                      marginBottom: 3,
                    }}
                  >
                    {info.label.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--cream)",
                      fontWeight: 500,
                    }}
                  >
                    {info.value}
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: info.color }}
                  aria-hidden="true"
                />
              </a>
            ))}

            {/* Social strip */}
            <div
              className="glass rounded-2xl p-6"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="section-label mb-4">Connect</div>
              <div className="flex gap-3">
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
                      width: 46,
                      height: 46,
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}25`,
                      color: s.color,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ────────────────────────── */}
          <div
            className={`lg:col-span-2 reveal-right ${visible ? "visible" : ""} delay-2`}
          >
            <div
              className="glass rounded-3xl p-8 lg:p-10"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Success state */}
              {sent ? (
                <div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  aria-live="polite"
                  aria-label="Message sent successfully"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-pulse-gold"
                    style={{
                      background: "rgba(52,211,153,0.12)",
                      border: "1px solid rgba(52,211,153,0.3)",
                    }}
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={36} style={{ color: "#34D399" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.8rem",
                      color: "var(--cream)",
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    Message Delivered
                  </h3>
                  <p
                    style={{
                      color: "var(--cream-muted)",
                      fontSize: "14px",
                      marginBottom: 24,
                    }}
                  >
                    Thanks for reaching out. I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-outline"
                    style={{ padding: "10px 24px", fontSize: "13px" }}
                    aria-label="Send another message"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h3
                    className="mb-8"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      color: "var(--cream)",
                    }}
                  >
                    Send a Message
                  </h3>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{
                          display: "block",
                          fontSize: "11px",
                          color: "var(--cream-muted)",
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.1em",
                          marginBottom: 8,
                        }}
                      >
                        FULL NAME
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="input-luxury"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={onChange}
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{
                          display: "block",
                          fontSize: "11px",
                          color: "var(--cream-muted)",
                          fontFamily: "'DM Mono', monospace",
                          letterSpacing: "0.1em",
                          marginBottom: 8,
                        }}
                      >
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="input-luxury"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={onChange}
                        aria-required="true"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-subject"
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "var(--cream-muted)",
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.1em",
                        marginBottom: 8,
                      }}
                    >
                      SUBJECT
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      autoComplete="off"
                      className="input-luxury"
                      placeholder="SDE Role · Collaboration · Project"
                      value={form.subject}
                      onChange={onChange}
                      aria-required="true"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "var(--cream-muted)",
                        fontFamily: "'DM Mono', monospace",
                        letterSpacing: "0.1em",
                        marginBottom: 8,
                      }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      autoComplete="off"
                      className="input-luxury resize-none"
                      placeholder="Tell me about the role, project, or idea you want to ship together."
                      value={form.message}
                      onChange={onChange}
                      aria-required="true"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center relative overflow-hidden"
                    aria-label={sending ? "Sending message" : "Send message"}
                  >
                    {sending ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                          aria-hidden="true"
                        />
                        <span className="relative z-10">Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} aria-hidden="true" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
