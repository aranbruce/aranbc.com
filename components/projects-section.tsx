import Section from "@/components/section";
import Image from "next/image";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <Section>
      <h2 className="text-foreground font-semibold">Side projects</h2>
      <div className="flex w-full flex-col gap-y-10 pb-20">
        <ProjectCard
          href="https://prdraft.ai/"
          title="PRDraft AI"
          description="PRDraft AI is an AI-powered writing assistant, designed to help you create high-quality Product Requirement Documents (PRDs) in a fraction of the time"
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

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ProjectCard
            href="https://www.promptpoint.ai/"
            title="PromptPoint"
            description="PromptPoint helps teams turbo charge their prompt engineering by empowering them to seamlessly organise their prompts and automate the running tests to evaluate the responses they generate"
            layout="vertical"
            image={
              <Image
                src="/promptPoint.svg"
                alt="PromptPoint website in browser"
                width={480}
                height={276}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            }
          />
          <ProjectCard
            href="https://wanderai.co.uk/"
            title="WanderAI"
            description="Love travel, hate planning? WanderAI can help you plan your next adventure in seconds. Simply provide a destination, your interests and the duration of your stay and WanderAI does the rest"
            layout="vertical"
            image={
              <Image
                src="/wanderAi.svg"
                alt="WanderAI website in browser"
                width={480}
                height={276}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
              />
            }
          />
        </div>
        <ProjectCard
          href="https://pal-ai.vercel.app/"
          title="Pal AI"
          description="Pal AI is a multi-LLM chatbot designed to assist you with a variety of tasks. From searching the web, to checking the weather forecast, and even finding the perfect gif, Pal AI is here to make your life easier"
          layout="horizontal"
          image={
            <Image
              src="/palAi.svg"
              alt="PalAI website in browser"
              width={480}
              height={276}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 600px"
            />
          }
          className="md:grid-cols-5"
        />
      </div>
    </Section>
  );
}
