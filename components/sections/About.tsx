import Image from "next/image";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  return (
    <section
      id="a-propos"
      className="py-20 lg:py-28 bg-canvas"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-350 w-full px-8 lg:px-14">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <AnimateOnScroll>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                À propos de moi
              </span>
              <h2
                id="about-heading"
                className="mt-5 font-condensed font-bold text-ink uppercase leading-[0.88]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                {profile.about.heading.split(" ").slice(0, 2).join(" ")}
                <br />
                <span className="text-ink/25">
                  {profile.about.heading.split(" ").slice(2).join(" ")}
                </span>
              </h2>
              <p className="mt-8 text-base text-ink/70 leading-relaxed max-w-xl">
                {profile.about.body}
              </p>
              <div className="mt-10">
                <Button
                  href="/cv/cv-serigne-saliou-sene.pdf"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Télécharger mon CV &darr;
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Photo */}
          <AnimateOnScroll delay={150}>
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Cercle photo */}
                <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-1 ring-rule">
                  <Image
                    src="/images/serigne-saliou-sene.png"
                    alt="Serigne Saliou SENE — Développeur Backend PHP/Symfony"
                    width={290}
                    height={290}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* Badge overlay */}
                <div className="absolute -bottom-4 -right-4 bg-paper rounded-xl px-4 py-3 shadow-[0_4px_20px_rgba(12,18,32,0.1)]">
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-ink/40 mb-0.5">
                    Spécialité
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-ink">
                    PHP / Symfony
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
