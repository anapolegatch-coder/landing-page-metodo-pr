import type { Config } from "tailwindcss";
import { colors, fonts, radius } from "./src/config/design-tokens";

/**
 * O tema do Tailwind é derivado dos design tokens (src/config/design-tokens.ts).
 * Não defina cores/fontes soltas aqui: edite os tokens e elas propagam.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: colors.base,
        surface: colors.surface,
        light: colors.light,
        ink: colors.ink,
        cyan: colors.cyan,
        pink: colors.pink,
        muted: colors.muted,
        ride: colors.ride,
      },
      fontFamily: {
        sans: [...fonts.sans],
        mono: [...fonts.mono],
        display: [...fonts.display],
      },
      borderRadius: {
        "2xl-soft": radius.xl2,
        "3xl-soft": radius.xl3,
      },
      boxShadow: {
        "glow-cyan": "0 0 60px -15px rgba(34, 211, 238, 0.45)",
        "glow-pink": "0 0 60px -15px rgba(236, 72, 153, 0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
