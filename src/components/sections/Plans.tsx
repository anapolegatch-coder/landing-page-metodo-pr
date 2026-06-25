import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/**
 * PLANOS — Três cards de acompanhamento. O plano "featured" (Expert) ganha
 * destaque com borda ciano, glow e selo "Mais Vendido".
 */
export function Plans() {
  const { plans } = content;

  return (
    <section id="planos" className="py-24">
      <div className="container-px">
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              {plans.title}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mono-tag mt-5 inline-block text-cyan">
              {plans.platformNote}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
          {plans.items.map((plan, i) => {
            const featured = plan.featured;
            return (
              <Reveal key={plan.id} delay={i * 90} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-2 ${
                    featured
                      ? "border-2 border-cyan bg-surface shadow-glow-cyan lg:-mt-4 lg:mb-4"
                      : "glass"
                  }`}
                >
                  {"badge" in plan && plan.badge ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 font-mono text-xs font-bold uppercase tracking-widest text-base">
                      {plan.badge}
                    </span>
                  ) : null}

                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-cyan">
                    {plan.tagline}
                  </p>

                  <p className="mt-6 text-sm leading-relaxed text-slate-300">
                    {plan.description}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {"benefitsLead" in plan && plan.benefitsLead ? (
                      <li className="font-bold text-cyan">
                        {plan.benefitsLead}
                      </li>
                    ) : null}
                    {plan.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckIcon className="mt-0.5 shrink-0 text-cyan" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={content.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 block rounded-[2rem] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                      featured
                        ? "bg-cyan text-base hover:bg-cyan-bright hover:shadow-glow-cyan"
                        : "glass text-white hover:border-cyan/40"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
