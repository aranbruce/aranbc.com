import Button from "@/components/button";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import CrezcoIcon from "./images/crezco";
import { BlogPosts } from "@/components/blog-posts";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col pb-24">
      <Section>
        <div className="flex flex-row flex-wrap items-center gap-x-12 gap-y-6 md:flex-nowrap">
          <Image
            src="/aran.png"
            alt="Aran Bruce-Caddick"
            width={280}
            height={332}
            priority
            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, (max-width: 1280px) 224px, 224px"
            className="h-auto w-40 shrink-0 sm:w-40 md:w-48 lg:w-56 xl:w-56"
          />
          <div className="flex flex-col items-start gap-y-6">
            <div className="flex flex-col gap-y-3">
              <h1 className="text-foreground font-semibold">
                Hi, I&apos;m Aran
              </h1>
              <p className="text-secondary-foreground md:text-lg">
                I&apos;m a product builder 🛠️, code enthusiast 🧑‍💻 and data nerd
                🤓 who&apos;s deeply AI-curious. I currently work at{" "}
                <span>
                  <Link
                    href="https://www.crezco.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "border-border bg-muted hover:bg-background rounded-md border px-1 pb-0.5 whitespace-nowrap transition",
                    )}
                  >
                    <CrezcoIcon />
                    <span className="text-sm font-semibold">Crezco</span>
                  </Link>
                </span>
                , building products that make money easy and help grow 🌱 the
                global economy
              </p>
            </div>
            <Button
              variant="primary"
              size="medium"
              href="mailto:aranbruce@gmail.com"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Section>
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
                priority
                width={480}
                height={276}
                className="transition group-hover:scale-102"
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
                  className="transition group-hover:scale-102"
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
                  className="transition group-hover:scale-102"
                />
              }
            />
          </div>
          <ProjectCard
            href="https://pal-ai.vercel.app/"
            title="Pal AI"
            description="Pal AI is a multi-LLM chatbot designed to assist you with a variety of tasks. From searching the web, to checking the weather forecast, and even finding the perfect gif, Pal AI is her to make your life easier"
            layout="horizontal"
            image={
              <Image
                src="/palAi.svg"
                alt="PalAI website in browser"
                priority
                width={480}
                height={276}
                className="transition group-hover:scale-102"
              />
            }
            className="md:grid-cols-5"
          />
        </div>
      </Section>
      <Section>
        <h2 className="text-foreground font-semibold">Read my blog</h2>
        <BlogPosts />
      </Section>
    </main>
  );
}
