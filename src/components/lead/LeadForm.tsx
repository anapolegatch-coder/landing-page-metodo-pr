"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full border-0 border-b border-ride-navy/30 bg-transparent px-0 py-2 text-base text-ride-navy outline-none transition focus:border-ride-pink";

/**
 * Formulário da página de captura. Envia para /api/lead, que entrega o lead
 * à ferramenta de e-mail (ver src/lib/lead-delivery.ts).
 */
export function LeadForm() {
  const { leadMagnet } = content;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    if (!String(data.firstName).trim() || !String(data.email).trim()) {
      setError(leadMagnet.errors.required);
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 422) {
        setError(leadMagnet.errors.email);
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setError(leadMagnet.errors.generic);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-16 max-w-md" role="status">
        <p className="font-display text-2xl font-bold">{leadMagnet.success.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-ride-navy/70">
          {leadMagnet.success.text}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 w-full text-left md:mt-14">
      <div className="grid grid-cols-2 gap-5 md:gap-8">
        <label className="block text-sm">
          {leadMagnet.fields.firstName} *
          <input name="firstName" autoComplete="given-name" className={inputClass} />
        </label>
        <label className="block text-sm">
          {leadMagnet.fields.lastName}
          <input name="lastName" autoComplete="family-name" className={inputClass} />
        </label>
      </div>
      <label className="mt-6 block text-sm md:mt-8">
        {leadMagnet.fields.email} *
        <input name="email" type="email" autoComplete="email" className={inputClass} />
      </label>

      {/* Campo isca para robôs: invisível para pessoas. */}
      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <p className="mt-5 text-xs leading-relaxed text-ride-navy/60 md:mt-6">
        {leadMagnet.consent}
      </p>

      {error && (
        <p className="mt-4 text-sm text-ride-pink" role="alert">
          {error}
        </p>
      )}

      <div className="mt-8 text-center md:mt-10">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-[2rem] bg-ride-navy px-8 py-4 text-sm font-bold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-ride-pink disabled:opacity-60"
        >
          {status === "sending" ? leadMagnet.submitting : leadMagnet.submit}
        </button>
      </div>
    </form>
  );
}
