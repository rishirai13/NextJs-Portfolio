// ================================================================
// page.tsx  — Main page composition
// ================================================================
import type { Metadata } from "next"
import Navigation        from "@/components/navigation"
import HeroSection       from "@/components/hero-section"
import AboutSection      from "@/components/about-section"
import ProjectsSection   from "@/components/projects-section"
import SkillsSection     from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"  // NEW
import ContactSection    from "@/components/contact-section"
import Footer            from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--obsidian)" }}>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />   {/* NEW — full timeline */}
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
