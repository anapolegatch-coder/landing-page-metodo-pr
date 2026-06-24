import { content } from "@/content";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

function TrophyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-1 shrink-0 text-cyan"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

/**
 * QUEM É ANA POLEGATCH — Bloco da mentora com selo flutuante de prova social,
 * credenciais e a lista completa de conquistas.
 */
export function About() {
  const { about } = content;

  return (
    <section id="mentora" className="py-24">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Coluna de identidade */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Badge>{about.categoryBadge}</Badge>

              {/* Selo flutuante de prova social */}
              <div className="glass mt-8 inline-flex items-center gap-3 rounded-[2rem] px-5 py-3">
                <span className="text-sm font-bold text-white">
                  {about.floatingBadge}
                </span>
                <span className="text-cyan">{about.stars}</span>
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
                {about.name}
              </h2>

              <p className="mt-4 font-mono text-sm text-cyan">
                {about.credentials}
              </p>
              <p className="mt-1 text-slate-300">{about.experience}</p>

              <p className="mt-6 text-lg font-bold text-pink">
                {about.highlight}
              </p>

              <blockquote className="mt-8 border-l-2 border-cyan/50 pl-6 text-lg italic leading-relaxed text-slate-200">
                {about.quote}
              </blockquote>
            </div>
          </Reveal>

          {/* Coluna de conquistas */}
          <Reveal delay={120}>
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <h3 className="mono-tag text-cyan">Conquistas</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {about.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <TrophyIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
