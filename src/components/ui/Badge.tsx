import type { ReactNode } from "react";

/**
 * Selo de contexto monoespaçado. Variante "cyan" (padrão, tecnologia) ou
 * "pink" (destaque/dor). Usado nas etiquetas de seção.
 */
export function Badge({
  children,
  variant = "cyan",
}: {
  children: ReactNode;
  variant?: "cyan" | "pink";
}) {
  const tone =
    variant === "pink"
      ? "text-pink border-pink/30 shadow-glow-pink"
      : "text-cyan border-cyan/30 shadow-glow-cyan";

  return (
    <span
      className={`glass mono-tag inline-flex items-center gap-2 rounded-full px-4 py-2 ${tone}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          variant === "pink" ? "bg-pink" : "bg-cyan"
        } animate-pulse-soft`}
      />
      {children}
    </span>
  );
}
