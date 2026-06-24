import { content } from "@/content";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

/**
 * SEÇÃO DO APP — Prévia visual da área logada: dashboard de carga de treino e
 * o chat do "Estrategista Polegatch". Conteúdo ilustrativo (mockup), sem lógica.
 */
export function AppShowcase() {
  const { app } = content;
  const { dashboard, chat } = app;
  const maxBar = Math.max(...dashboard.chartBars);

  return (
    <section className="py-24">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge>{app.badge}</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 text-3xl font-extrabold leading-tight text-white md:text-5xl">
              {app.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Dashboard */}
          <Reveal>
            <div className="glass h-full rounded-[2rem] p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  {dashboard.chartTitle}
                </h3>
                <span className="mono-tag text-cyan">7D</span>
              </div>

              {/* Gráfico de barras ilustrativo */}
              <div className="mt-8 flex h-40 items-end justify-between gap-3">
                {dashboard.chartBars.map((bar, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-cyan/30 to-cyan"
                      style={{ height: `${(bar / maxBar) * 100}%` }}
                    />
                    <span className="font-mono text-[10px] text-slate-500">
                      {dashboard.chartDays[i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Métricas */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {dashboard.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/5 bg-white/5 p-3 text-center"
                  >
                    <p className="text-sm font-bold text-cyan">{m.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-slate-400">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 font-mono text-xs text-slate-400">
                {dashboard.statusFootnote}
              </p>
            </div>
          </Reveal>

          {/* Chat Coach */}
          <Reveal delay={120}>
            <div className="glass flex h-full flex-col rounded-[2rem] p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cyan/15 text-lg">
                    🤖
                  </span>
                  <h3 className="font-bold text-white">{chat.headerTitle}</h3>
                </div>
                <span className="mono-tag flex items-center gap-2 text-cyan">
                  <span className="h-2 w-2 animate-pulse-soft rounded-full bg-cyan" />
                  {chat.liveIndicator}
                </span>
              </div>

              <div className="flex-1 space-y-4 py-6">
                <div className="max-w-[85%] rounded-[1.5rem] rounded-tl-md bg-white/5 p-4 text-sm text-slate-200">
                  {chat.systemMessage}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-slate-500" />
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-slate-500 [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-slate-500 [animation-delay:0.4s]" />
                  </span>
                  <span className="font-mono">{chat.loadingIndicator}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[2rem] border border-white/10 bg-white/5 p-2 pl-5">
                <span className="flex-1 text-sm text-slate-500">
                  {chat.inputPlaceholder}
                </span>
                <span className="rounded-[1.5rem] bg-cyan px-5 py-2.5 text-sm font-bold text-base">
                  {chat.sendButton}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
