// ================================================================
// layout.tsx  — Root layout with SEO metadata
// ================================================================
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishi Rai — AI Engineer & Full-Stack Developer | IIT Patna",
  description:
    "MTech AI & Data Science, IIT Patna. Production-grade React/Next.js apps, ML systems with SHAP explainability, and enterprise-hardened infrastructure. Wipro-trained, SDE-ready for product companies.",
  keywords: [
    "Rishi Rai",
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js",
    "Data Science",
    "SDE",
    "IIT Patna",
    "Machine Learning",
    "TypeScript",
    "PostgreSQL",
    "Portfolio",
    "NLP",
    "XGBoost",
    "SHAP",
    "Wipro",
    "Thales",
    "Python",
    "Docker",
  ].join(", "),
  authors: [{ name: "Rishi Rai" }],
  openGraph: {
    title: "Rishi Rai — AI Engineer & Full-Stack Developer | IIT Patna",
    description:
      "MTech AI & DS, IIT Patna. Production React/Next.js apps, ML pipelines, and scalable full-stack systems. Wipro-trained, SDE-ready.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishi Rai — AI Engineer & Full-Stack Developer | IIT Patna",
    description:
      "MTech AI & DS, IIT Patna. Shipping production full-stack apps and ML systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
