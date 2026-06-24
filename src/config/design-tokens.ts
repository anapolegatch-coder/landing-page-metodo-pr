/**
 * DESIGN TOKENS — Fonte única de verdade da identidade visual.
 *
 * Tudo que define a aparência do site mora aqui: cores, tipografia, espaçamentos
 * e arredondamentos. O tailwind.config.ts importa este arquivo, então alterar um
 * valor aqui reflete em todo o site automaticamente.
 *
 * Identidade: ambiente escuro imersivo de alta tecnologia, com seções de leitura
 * em fundo claro de alto contraste. Acento ciano (tecnologia/ciência) e rosa
 * (dor/contraste). Estética premium, smooth e irreverente.
 */

export const colors = {
  // Fundos
  base: "#020617", // Deep Slate / Dark Navy — fundo principal (dark)
  surface: "#0b1222", // Camada elevada sobre o fundo escuro
  light: "#f8fafc", // slate-50 — seções de leitura claras
  ink: "#0f172a", // slate-900 — texto sobre fundo claro

  // Acentos
  cyan: {
    DEFAULT: "#22d3ee", // Ciano principal (ações, métricas ideais)
    bright: "#00e5ff", // Ciano neon para glows e destaques
  },
  pink: "#ec4899", // Rosa de destaque (dor, desafios, elementos cruciais)

  // Apoio neutro (escala slate usada pelo Tailwind por padrão também)
  muted: "#94a3b8", // slate-400 — textos secundários no dark
} as const;

/**
 * Configuração do efeito glassmorphism, referência para componentes.
 * Os utilitários reais ficam em globals.css (.glass).
 */
export const glass = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "rgba(255, 255, 255, 0.1)",
  blur: "12px",
} as const;

export const fonts = {
  // Inter para UI e texto; JetBrains Mono para dados/etiquetas técnicas.
  sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
} as const;

/** Arredondamentos premium, cantos extremamente suaves. */
export const radius = {
  xl2: "2rem", // rounded-[2rem]  — cards e botões
  xl3: "3rem", // rounded-[3rem]  — superfícies grandes
} as const;

/** Espaçamentos verticais de seção e gaps de grid. */
export const spacing = {
  section: "6rem", // py-24 — respiro generoso entre seções
} as const;
