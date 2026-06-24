import { content } from "@/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * CONSULTORIA — CTA alternativo para quem ainda não escolheu um plano.
 */
export function Consulting() {
  const { consulting, links } = content;

  return (
    <section className="py-24">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-cyan/10 via-surface to-pink/10 p-12 text-center md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-pink/20 blur-[100px]"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-4xl">
                {consulting.title}
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                {consulting.subtitle}
              </p>
              <div className="mt-10">
                <Button href={links.whatsapp} variant="primary" external>
                  {consulting.cta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
