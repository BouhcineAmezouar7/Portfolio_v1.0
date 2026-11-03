import HeroSection from "@/components/HomePage/HeroSection";
import AboutPreview from "@/components/HomePage/AboutPreview";
import SkillsShowcase from "@/components/HomePage/SkillsShowcase";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import ExperienceTimeline from "@/components/HomePage/ExperienceTimeline";
import CTASection from "@/components/HomePage/CTASection";
import PortfolioCubesBackground from "@/components/PortfolioCubesBackground";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <PortfolioCubesBackground />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Preview */}
        <AboutPreview />

        {/* Skills Showcase */}
        <SkillsShowcase />

        {/* Featured Projects */}
        <ProjectsSection />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}
