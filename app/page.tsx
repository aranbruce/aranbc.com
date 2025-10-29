import Button from "@/components/button";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import CrezcoIcon from "./images/crezco";
import { BlogPosts } from "@/components/blog-posts";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";
import LightRays from "@/components/light-rays";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col pb-24">
      <Section>
        <div className="absolute inset-0 top-0 left-0 -z-10 h-screen w-full">
          <div className="relative -z-10 h-full w-full">
            <LightRays
              raysOrigin="top-center"
              raysColor="#fff"
              raysSpeed={1}
              lightSpread={1}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={1}
              distortion={0.05}
              saturation={2}
              className="custom-rays"
            />
          </div>
          {/* Opacity gradient overlay - fade from full opacity to transparent */}
          <div className="to-background pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-transparent" />
        </div>

        <div className="z-10 flex flex-col flex-wrap items-center gap-x-12 gap-y-6 md:flex-nowrap">
          <div className="bg-card/50 border-border/50 shadow-card relative flex flex-row items-center gap-x-3 rounded-full border p-1">
            <Image
              src="/aran.png"
              alt="Aran Bruce-Caddick"
              width={40}
              height={40}
              priority
              className="border-border/40 bg-secondary-foreground/20 relative z-10 h-10 w-10 shrink-0 rounded-full border object-cover"
            />
            <h4 className="text-foreground relative z-10 pr-3 text-base font-normal">
              Aran Bruce-Caddick
            </h4>
          </div>
          <div className="flex flex-col items-center gap-y-6 text-center">
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
                      "border-border hover:bg-background bg-muted rounded-md border px-1 pb-0.5 whitespace-nowrap transition",
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
      {/* <Section>
        <h2 className="text-foreground font-semibold">Read my blog</h2>
        <BlogPosts />
      </Section> */}
    </main>
  );
}
