import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2rem] px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60";

const variants: Record<Variant, string> = {
  // Ação principal: ciano sólido com glow ao passar o mouse.
  primary:
    "bg-cyan text-base hover:bg-cyan-bright hover:shadow-glow-cyan hover:-translate-y-0.5",
  // Secundária: vidro com borda, para ações de apoio.
  secondary:
    "glass text-white hover:border-cyan/40 hover:shadow-glow-cyan hover:-translate-y-0.5",
  // Fantasma: texto com sublinhado sutil.
  ghost: "text-cyan hover:text-cyan-bright",
};

/**
 * Botão/link de ação. Renderiza <a> (link externo/âncora) por padrão.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
