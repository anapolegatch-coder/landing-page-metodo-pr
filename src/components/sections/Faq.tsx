"use client";

import { useState } from "react";
import { content } from "@/content";
import { Reveal } from "@/components/ui/Reveal";

/**
 * FAQ — Acordeão. A primeira pergunta começa aberta.
 */
export function Faq() {
  const { faq } = content;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="container-px">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            {faq.title}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 80}>
                <div
                  className={`glass overflow-hidden rounded-[2rem] transition-all duration-300 ${
                    isOpen ? "border-cyan/30" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-bold text-white">
                      {item.question}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-cyan/40 text-cyan transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-slate-300">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
