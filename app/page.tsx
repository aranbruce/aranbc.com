import { BlogPosts } from "@/components/blog-posts";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <HeroSection />
      <ProjectsSection />

      {/* Writing section */}
      <section className="flex w-full flex-col items-center border-b border-border-translucent px-12 py-20">
        <div className="flex w-full max-w-5xl flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6">
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
        </div>
      </section>
    </main>
  );
}
