import { content } from "@/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * HERO — Entrada do site. Fundo escuro imersivo com grade técnica e glows.
 */
export function Hero() {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-24"
    >
      {/* Grade técnica de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />
      {/* Orbe de glow flutuante */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-cyan/20 blur-[120px] animate-float"
      />

      <div className="container-px relative">
        <div className="max-w-3xl">
          <Reveal>
            <Badge>{hero.badge}</Badge>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Método <span className="text-gradient-cyan">Polegatch</span> de
              Treinamento Inteligente
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 space-y-2 text-lg text-slate-300 md:text-xl">
              <p className="font-medium text-white">{hero.subtitles[0]}</p>
              <p>{hero.subtitles[1]}</p>
              <p className="font-bold text-pink">{hero.subtitles[2]}</p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#planos" variant="primary">
                {hero.primaryCta}
              </Button>
              <Button href="#metodologia" variant="secondary">
                {hero.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
