import { BlogPosts } from "@/components/blog-posts";
import Button from "@/components/button";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <HeroSection />
      <ProjectsSection />

      {/* Writing section */}
      <Section className="gap-y-10 border-b border-border-translucent">
        <div className="flex w-full flex-col items-start justify-between gap-6">
          <div className="max-w-md">
            <p className="text-eyebrow">— Writing</p>
            <h2 className="text-section-heading leading-tight font-heading text-balance text-foreground">
              Notes from the desk.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Mostly on product discovery, AI in practice, and what earns its
            place on a shipping team.
          </p>
        </div>
        <BlogPosts />
      </Section>
      <Section className="glow-bg-inverted">
        <div className="relative flex w-full flex-col items-center overflow-hidden px-12 py-28 text-center">
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.5rem)] leading-none font-heading tracking-tighter text-balance">
            <span className="gradient-text-foreground">
              Working on something interesting?
            </span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Send me an email at aranbruce@gmail.com
            </p>
            <Button asChild variant="primary">
              <a href="mailto:aranbruce@gmail.com">Get in touch</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
