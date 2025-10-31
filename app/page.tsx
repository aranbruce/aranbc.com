import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col pb-24">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
