import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

/**
 * O PROBLEMA — Cards de dor em fundo escuro, com acento rosa (contraste/dor).
 */
export function Problem() {
  const { problem } = content;

  return (
    <section id="problema" className="py-24">
      <div className="container-px">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight text-white md:text-5xl">
            {problem.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problem.pains.map((pain, i) => (
            <Reveal key={pain} delay={i * 70}>
              <div className="glass group flex h-full items-start gap-4 rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500 transition group-hover:bg-red-500/20">
                  <svg
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
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <p className="text-base leading-relaxed text-slate-300">
                  {pain}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-pink/30 bg-pink/5 p-8 text-center shadow-glow-pink">
            <p className="text-xl font-bold text-white md:text-2xl">
              {problem.highlight}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
