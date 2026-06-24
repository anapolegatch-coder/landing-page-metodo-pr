import { content } from "@/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * METODOLOGIA — Roadmap vertical da jornada (5 etapas) com linha conectora
 * ciano, mais um callout científico em destaque.
 */
export function Methodology() {
  const { methodology } = content;

  return (
    <section id="metodologia" className="py-24">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge>{methodology.badge}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Treinar inteligente é diferente de{" "}
              <span className="text-gradient-cyan">treinar forte</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              {methodology.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Roadmap */}
        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Linha conectora vertical */}
          <div
            aria-hidden
            className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan via-cyan/40 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {methodology.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div
                  className={`relative flex items-start gap-6 md:gap-10 ${
                    i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Nó numerado */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-base font-mono text-lg font-bold text-cyan shadow-glow-cyan md:mx-auto">
                    {i + 1}
                  </div>

                  <div className="glass flex-1 rounded-[2rem] p-6 md:max-w-[calc(50%-3rem)]">
                    <span className="mono-tag text-cyan">{step.label}</span>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-300">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Callout científico */}
        <Reveal delay={100}>
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-cyan/10 to-transparent p-8 md:p-10">
            <div className="flex items-start gap-5">
              <span className="text-4xl" aria-hidden>
                {methodology.callout.icon}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {methodology.callout.title}
                </h3>
                <p className="mt-2 text-slate-300">
                  {methodology.callout.text}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 text-center">
            <Button href="#planos" variant="primary">
              {methodology.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
