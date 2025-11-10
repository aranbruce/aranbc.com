import Button from "@/components/button";
import Section from "@/components/section";
import LightRays from "@/components/light-rays";
import { ProfileBadge } from "@/components/profile-badge";
import { CompanyBadge } from "@/components/company-badge";
import CrezcoIcon from "@/app/images/crezco";

export function HeroSection() {
  return (
    <Section>
      <div className="absolute inset-0 top-0 left-0 -z-10 h-screen w-full">
        <div className="relative -z-10 h-full w-full">
          <LightRays
            raysOrigin="top-center"
            darkRaysColor="#aeabd9"
            lightRaysColor="#36344b"
            raysSpeed={2}
            lightSpread={1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.4}
            noiseAmount={0}
            distortion={0.05}
            saturation={2}
          />
        </div>
        {/* Opacity gradient overlay - fade from full opacity to transparent */}
        <div className="to-background from-background/30 via-background-40 pointer-events-none absolute inset-0 -z-10 bg-linear-to-b" />
      </div>

      <div className="z-10 flex flex-col flex-wrap items-center gap-x-12 gap-y-6 md:flex-nowrap">
        <ProfileBadge
          src="/aran.png"
          alt="Aran Bruce-Caddick"
          name="Aran Bruce-Caddick"
        />
        <div className="flex flex-col items-center gap-y-6 text-center">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-foreground font-semibold">Hi, I&apos;m Aran</h1>
            <p className="text-secondary-foreground md:text-lg">
              I&apos;m a product builder 🛠️, code enthusiast 🧑‍💻 and data nerd 🤓
              who&apos;s deeply AI-curious. I currently work at{" "}
              <span>
                <CompanyBadge
                  href="https://www.crezco.com/"
                  icon={<CrezcoIcon />}
                  name="Crezco"
                />
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
  );
}
