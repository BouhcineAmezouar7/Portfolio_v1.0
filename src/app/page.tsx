import HeroSection from "@/components/HomePage/HeroSection";
import AboutPreview from "@/components/HomePage/AboutPreview";
import SkillsShowcase from "@/components/HomePage/SkillsShowcase";
import ProjectsSection from "@/components/HomePage/ProjectsSection";
import ExperienceTimeline from "@/components/HomePage/ExperienceTimeline";
import CTASection from "@/components/HomePage/CTASection";

export default function Home() {
  return (
    <div className="relative">
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
  );
}
