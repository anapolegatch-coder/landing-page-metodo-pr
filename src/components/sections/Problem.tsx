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
              <div className="glass group h-full rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pink/30">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink/10 text-pink transition group-hover:bg-pink/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
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
