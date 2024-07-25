import Button from "@/components/button";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="divide-secondary/20 absolute inset-0 -z-10 grid grid-cols-4 divide-x divide-dashed bg-gray-100 md:grid-cols-6">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
      </div>
      <Section>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-primary text-4xl font-bold">👋 Hi I'm Aran</h1>
          <p className="text-secondary text-lg">
            I'm a product builder 🛠️, code enthusiast 🧑‍💻 and data nerd 🤓 who's
            deeply AI-curious. I currently work at{" "}
            <span>
              <Link
                href="https://www.crezco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-300 bg-gray-200 px-1 pb-0.5 transition hover:bg-white"
              >
                <svg
                  width="12"
                  height="12"
                  className="mr-1 inline-flex"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_482_522)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.9999 0V25.9999H20.7999V5.19999H0V0H25.9999Z"
                      fill="#2A6355"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7999 5.19922V25.9992H15.6V10.3992H0V5.19922H20.7999Z"
                      fill="#9BCABE"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.6 10.3999V25.9999H10.4V15.5999H0V10.3999H15.6Z"
                      fill="#F2EBE4"
                    />
                    <path
                      d="M10.4 15.6001H0V26.0001H10.4V15.6001Z"
                      fill="#F38173"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_482_522">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
        <h2 className="text-primary text-4xl font-bold">Side projects</h2>
        <div className="flex w-full flex-col gap-y-10 pb-20">
          <Link
            href="https://pal-ai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="drop-shadow-card hover:scale-102 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm transition md:grid-cols-5"
          >
            <div className="col-span-2 flex flex-col gap-y-2 p-6">
              <h3 className="text-primary text-2xl font-bold">Pal AI</h3>
              <p className="text-secondary">
                Pal AI is a multi-LLM chatbot designed to assist you with a
                variety of tasks. From searching the web, to checking the
                weather forecast, and even finding the perfect gif, Pal AI is
                her to make your life easier
              </p>
            </div>
            <div className="drop-shadow-card col-span-3 mt-auto flex flex-col items-end pl-4 pt-4">
              <Image
                src="/palAi.svg"
                alt="PalAI website in browser"
                width={480}
                height={276}
                className="group-hover:scale-102 transition"
              />
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <Link
              href="https://www.promptpoint.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-card hover:scale-102 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm transition"
            >
              <div className="col-span-2 flex flex-col gap-y-2 p-6">
                <h3 className="text-primary text-2xl font-bold">PromptPoint</h3>
                <p className="text-secondary">
                  PromptPoint helps teams turbo charge their prompt engineering
                  by empowering them to seamlessly organise their prompts and
                  automate the running tests to evaluate the responses they
                  generate
                </p>
              </div>
              <div className="drop-shadow-card col-span-3 mt-auto flex flex-col items-end pl-4 pt-4">
                <Image
                  src="/promptPoint.svg"
                  alt="PromptPoint website in browser"
                  width={480}
                  height={276}
                  className="group-hover:scale-102 transition"
                />
              </div>
            </Link>
            <Link
              href="https://wanderai.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-card hover:scale-102 group grid w-full transform grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm transition"
            >
              <div className="col-span-2 flex flex-col gap-y-2 p-6">
                <h3 className="text-primary text-2xl font-bold">WanderAI</h3>
                <p className="text-secondary">
                  Love travel, hate planning? WanderAI can help you plan your
                  next adventure in seconds. Simply provide a destination, your
                  interests and the duration of your stay and WanderAI does the
                  rest
                </p>
              </div>
              <div className="drop-shadow-card col-span-3 mt-auto flex flex-col items-end pl-4 pt-4">
                <Image
                  src="/wanderAi.svg"
                  alt="WanderAI website in browser"
                  width={480}
                  height={276}
                  className="group-hover:scale-102 transition"
                />
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
