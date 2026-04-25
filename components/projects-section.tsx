import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import Section from "@/components/section";

function ThemedImage({
  src,
  darkSrc,
  alt,
  width,
  height,
  sizes,
}: {
  src: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        sizes={sizes}
        className="dark:hidden"
      />
      <Image
        src={darkSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        sizes={sizes}
        className="hidden dark:block"
      />
    </>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="gap-y-10 border-b border-border-translucent"
    >
      {/* Section header */}
      <div className="flex w-full flex-col items-start justify-between gap-6">
        <div>
          <p className="text-eyebrow">— Side projects</p>
          <h2
            className="max-w-md text-section-heading leading-tight font-heading text-balance text-foreground"
            id="projects"
          >
            Things I&apos;ve built in my free time.
          </h2>
        </div>
        <p className="t text-sm text-muted-foreground">
          Small personal projects, usually things I wished existed. Built in my
          free time.
        </p>
      </div>

      {/* Cards */}
      {/* <div className="flex flex-col gap-5">
          <ProjectCard
            href="https://greeting-cards-ai.vercel.app/"
            title="Cards AI"
            description="Generate greeting cards with AI. Just upload a photo of yourself and the AI will generate a greeting card for you."
            year="2026"
            layout="horizontal"
            image={
              <Image
                src="/prdraftAi.svg"
                alt="PRDraft AI website in browser"
                width={480}
                height={276}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
              />
            }
            className="md:grid-cols-5"
          />
        </div> */}
      <div className="flex flex-col gap-5">
        <ProjectCard
          href="https://prdraft.ai/"
          title="PRDraft AI"
          description="An AI-powered writing assistant designed to help you create high-quality Product Requirement Documents in a fraction of the time."
          year="2025"
          layout="horizontal"
          image={
            <ThemedImage
              src="/prdraftAi.svg"
              darkSrc="/prdraftAi-dark.svg"
              alt="PRDraft AI website in browser"
              width={480}
              height={276}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
            />
          }
          className="md:grid-cols-5"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ProjectCard
            href="https://www.promptpoint.ai/"
            title="PromptPoint"
            description="Prompt organisation + automated evaluation for product teams shipping LLM features."
            year="2023"
            layout="vertical"
            image={
              <ThemedImage
                src="/promptPoint.svg"
                darkSrc="/promptPoint-dark.svg"
                alt="PromptPoint website in browser"
                width={480}
                height={276}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            }
          />
          <ProjectCard
            href="https://wanderai.co.uk/"
            title="WanderAI"
            description="Destination in, itinerary out. Travel planner for people who love going and hate planning."
            year="2022"
            layout="vertical"
            image={
              <ThemedImage
                src="/wanderAi.svg"
                darkSrc="/wanderAi-dark.svg"
                alt="WanderAI website in browser"
                width={480}
                height={276}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            }
          />
        </div>

        <ProjectCard
          href="https://pal-ai.vercel.app/"
          title="Pal AI"
          description="A multi-LLM chatbot with real tool use — weather forecasts, web search, gif search. Built as an excuse to go deep on the ai-sdk."
          year="2023"
          layout="horizontal"
          image={
            <ThemedImage
              src="/palAi.svg"
              darkSrc="/palAi-dark.svg"
              alt="PalAI website in browser"
              width={480}
              height={276}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
            />
          }
          className="md:grid-cols-5"
        />
      </div>
    </Section>
  );
}
