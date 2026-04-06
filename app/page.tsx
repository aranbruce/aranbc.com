import Section from "@/components/section";
import { BlogPosts } from "@/components/blog-posts";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col pb-24">
      <HeroSection />
      <ProjectsSection />
      <Section>
        <h2 className="font-semibold text-foreground">Thoughts</h2>
        <BlogPosts />
      </Section>
    </main>
  );
}
