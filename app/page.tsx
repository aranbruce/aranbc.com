import Button from "@/components/button";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import CrezcoIcon from "./images/crezco";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0 -z-10 grid grid-cols-4 divide-x divide-dashed divide-secondary/20 bg-gray-100 md:grid-cols-6 dark:bg-primary">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
      </div>
      <Section>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-4xl font-bold text-primary dark:text-white">
            👋 Hi I'm Aran
          </h1>
          <p className="dark:text-gray-400 text-lg text-secondary">
            I'm a product builder 🛠️, code enthusiast 🧑‍💻 and data nerd 🤓 who's
            deeply AI-curious. I currently work at{" "}
            <span>
              <Link
                href="https://www.crezco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:bg-gray-800 rounded-md border border-gray-300 bg-gray-200 px-1 pb-0.5 transition hover:bg-white dark:border-secondary dark:hover:bg-secondary"
              >
                <CrezcoIcon />
                <span className="text-sm font-semibold">Crezco</span>
              </Link>
            </span>
            , building products that make money easy and help grow 🌱 the global
            economy
          </p>
        </div>
        <Button
          variant="primary"
          size="medium"
          href="mailto:aranbruce@gmail.com"
        >
          Get in touch
        </Button>
      </Section>
      <Section>
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          Side projects
        </h2>
        <div className="flex w-full flex-col gap-y-10 pb-20">
          <Link
            href="https://pal-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-gray-900 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 drop-shadow-card backdrop-blur-sm transition hover:scale-102 md:grid-cols-5 dark:border-secondary/10"
          >
            <div className="col-span-2 flex flex-col gap-y-2 p-6">
              <h3 className="text-2xl font-bold text-primary dark:text-white">
                Pal AI
              </h3>
              <p className="dark:text-gray-400 text-secondary">
                Pal AI is a multi-LLM chatbot designed to assist you with a
                variety of tasks. From searching the web, to checking the
                weather forecast, and even finding the perfect gif, Pal AI is
                her to make your life easier
              </p>
            </div>
            <div className="col-span-3 mt-auto flex flex-col items-end pl-4 pt-4 drop-shadow-card">
              <Image
                src="/palAi.svg"
                alt="PalAI website in browser"
                width={480}
                height={276}
                className="transition group-hover:scale-102"
              />
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link
              href="https://www.promptpoint.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-gray-900 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 drop-shadow-card backdrop-blur-sm transition hover:scale-102 dark:border-secondary/10"
            >
              <div className="col-span-2 flex flex-col gap-y-2 p-6">
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  PromptPoint
                </h3>
                <p className="dark:text-gray-400 text-secondary">
                  PromptPoint helps teams turbo charge their prompt engineering
                  by empowering them to seamlessly organise their prompts and
                  automate the running tests to evaluate the responses they
                  generate
                </p>
              </div>
              <div className="col-span-3 mt-auto flex flex-col items-end pl-4 pt-4 drop-shadow-card">
                <Image
                  src="/promptPoint.svg"
                  alt="PromptPoint website in browser"
                  width={480}
                  height={276}
                  className="transition group-hover:scale-102"
                />
              </div>
            </Link>
            <Link
              href="https://wanderai.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-gray-900 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 drop-shadow-card backdrop-blur-sm transition hover:scale-102 dark:border-secondary/10"
            >
              <div className="col-span-2 flex flex-col gap-y-2 p-6">
                <h3 className="text-2xl font-bold text-primary dark:text-white">
                  WanderAI
                </h3>
                <p className="dark:text-gray-400 text-secondary">
                  Love travel, hate planning? WanderAI can help you plan your
                  next adventure in seconds. Simply provide a destination, your
                  interests and the duration of your stay and WanderAI does the
                  rest
                </p>
              </div>
              <div className="col-span-3 mt-auto flex flex-col items-end pl-4 pt-4 drop-shadow-card">
                <Image
                  src="/wanderAi.svg"
                  alt="WanderAI website in browser"
                  width={480}
                  height={276}
                  className="transition group-hover:scale-102"
                />
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
