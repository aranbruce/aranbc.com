"use client";

import Image from "next/image";
import Button from "@/components/button";
import { CompanyBadge } from "@/components/company-badge";
import CrezcoIcon from "@/app/images/crezco";
import { cn } from "@/lib/utils";

function getUKTimezone() {
  return (
    new Intl.DateTimeFormat("en", {
      timeZone: "Europe/London",
      timeZoneName: "shortOffset",
    })
      .formatToParts(new Date())
      .find((p) => p.type === "timeZoneName")?.value ?? "GMT+1"
  );
}

export function HeroSection() {
  const ukTz = getUKTimezone();

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center overflow-hidden border-b border-border-translucent">
        {/* Background gradient — indigo glow from top */}
        <div className="glow-bg pointer-events-none absolute inset-0" />
        {/* Fade to bg at bottom */}
        <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-48" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-7 px-12 pt-44 pb-24 text-center">
          {/* Profile pill */}
          <div className="shadow-lift inline-flex items-center gap-3 rounded-full border border-border-subtle/60 bg-card/30 p-1 pr-4 backdrop-blur-md">
            <Image
              src="/aran.png"
              alt="Aran Bruce-Caddick"
              width={36}
              height={36}
              priority
              className="rounded-full border border-border-translucent bg-background object-cover"
            />
            <span className="font-medium text-secondary-foreground">
              Aran Bruce-Caddick
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading tracking-tighter text-balance">
            <span className="gradient-text-foreground">
              Hi, I&apos;m Aran and I like to
            </span>{" "}
            <span className="gradient-text-accent">build things.</span>
          </h1>

          {/* Subtitle */}
          <p className="leading-relaxed text-balance text-muted-foreground md:text-lg">
            I&apos;m a product builder 🛠️, code enthusiast 🧑‍💻 and data nerd 🤓
            who&apos;s deeply AI-curious. I currently work at{" "}
            <CompanyBadge
              href="https://www.crezco.com/"
              icon={<CrezcoIcon />}
              name="Crezco"
            />
            , building products that make money easy and help grow 🌱 the global
            economy
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-evenly gap-3">
            <Button asChild variant="primary">
              <a href="mailto:aranbruce@gmail.com">Get in touch</a>
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View side projects
            </Button>
          </div>
        </div>
      </section>

      {/* KPI strip — Linear uses tight grid with translucent borders between cells */}
      <div className="w-full border-b border-border-translucent">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 sm:grid-cols-3 sm:px-3">
          {[
            {
              label: "Based in",
              value: "London, UK",
              sub: `${ukTz}, happy to overlap`,
            },
            {
              label: "Currently at",
              value: "Crezco",
              sub: "Helping businesses move money effortlessly",
            },
            {
              label: "Experience",
              value: `${new Date().getFullYear() - 2018}+ years in product`,
              sub: "Fintech, payments, SaaS",
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col gap-1.5 px-5 py-7 md:px-12 lg:px-16",
                i < 2 && "border-b border-border-translucent sm:border-r",
              )}
            >
              <span className="text-kpi-label">{kpi.label}</span>
              <span className="text-base tracking-tight text-foreground">
                {kpi.value}
              </span>
              <span className="text-caption text-muted-foreground">
                {kpi.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
