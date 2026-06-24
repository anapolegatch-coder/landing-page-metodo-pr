import { content } from "@/content";

/**
 * RODAPÉ — Marca e direitos reservados.
 */
export function Footer() {
  const { footer } = content;

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-px flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <span className="text-xl font-black tracking-tight text-white">
          POLEGATCH
        </span>
        <p className="font-mono text-xs text-slate-500">{footer.copyright}</p>
      </div>
    </footer>
  );
}
