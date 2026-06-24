"use client";

import { useEffect, useState } from "react";
import { content } from "@/content";

/**
 * Header fixo com fundo que ganha vidro ao rolar. Navegação por âncoras.
 */
export function Header() {
  const { nav } = content;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="container-px flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-lg font-black tracking-tight text-white">
            POLEGATCH
          </span>
          <span className="mono-tag hidden text-cyan sm:inline">/ RIDE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#metodologia" className="text-sm text-slate-300 transition hover:text-white">
            {nav.method}
          </a>
          <a href="#planos" className="text-sm text-slate-300 transition hover:text-white">
            {nav.plans}
          </a>
          <a href="#mentora" className="text-sm text-slate-300 transition hover:text-white">
            {nav.about}
          </a>
          <a href="#faq" className="text-sm text-slate-300 transition hover:text-white">
            {nav.faq}
          </a>
        </nav>

        <a
          href="#planos"
          className="rounded-[2rem] bg-cyan px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-base transition-all duration-300 hover:bg-cyan-bright hover:shadow-glow-cyan"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
