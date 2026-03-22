import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Rishi Rai - Full Stack Developer | Portfolio",
  description:
    "Experienced Full Stack Developer specializing in React.js, Node.js, and modern web technologies. View my projects and get in touch.",
  keywords: "Rishi Rai, Full Stack Developer, React.js, Node.js, MongoDB, Portfolio, Web Developer",
  authors: [{ name: "Rishi Rai" }],
  openGraph: {
    title: "Rishi Rai - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React.js, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Rai - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React.js, Node.js, and modern web technologies.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <h1>TEST SUCCESS</h1>
      <Footer />
    </main>
  );
}
