import type { Metadata } from "next";
import Image from "next/image";
import { League_Spartan } from "next/font/google";
import { content } from "@/content";
import { LeadForm } from "@/components/lead/LeadForm";

// Mesma família tipográfica da logo Polegatch Ride.
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.leadMagnet.meta.title,
  description: content.leadMagnet.meta.description,
};

const logo = {
  src: "/brand/polegatch-ride-logo.png",
  width: 1875,
  height: 326,
};

/**
 * Página de captura do material gratuito, na identidade Polegatch Ride
 * (fundo claro, marinho e rosa do material de planos). Layout minimalista:
 * logo, título, uma frase e o formulário. Abaixo, atalhos para o site
 * polegatchride.com (sem WhatsApp).
 */
export default function GuiaPage() {
  const { leadMagnet, links, footer } = content;

  return (
    <div className={`${leagueSpartan.variable} bg-white text-ride-navy`}>
      <main>
        <section>
          <div className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col items-center px-6 pb-24 pt-14 text-center md:pt-20">
            <a href={links.site} aria-label={leadMagnet.logoAlt}>
              <Image
                {...logo}
                alt={leadMagnet.logoAlt}
                priority
                className="h-7 w-auto md:h-9"
              />
            </a>

            <h1 className="mt-14 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              {leadMagnet.title}
            </h1>
            <p className="mt-4 text-sm italic text-ride-navy/70 md:text-base">
              {leadMagnet.subtitle}
            </p>
            <span aria-hidden="true" className="mt-6 h-1 w-12 rounded-full bg-ride-pink" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ride-navy/70 md:text-base">
              {leadMagnet.description}
            </p>

            <LeadForm />
          </div>
        </section>

        <section className="bg-ride-mist py-24">
          <div className="container-px">
            <h2 className="text-center font-display text-2xl font-bold tracking-tight md:text-3xl">
              {leadMagnet.explore.title}
            </h2>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              {leadMagnet.explore.cards.map((card) => (
                <div
                  key={card.cta}
                  className="flex flex-col justify-between gap-8 rounded-[2rem] bg-white p-8"
                >
                  <p className="text-sm leading-relaxed text-ride-navy/80">
                    {card.text}
                  </p>
                  <a
                    href={card.href}
                    className="self-start rounded-[2rem] border border-ride-navy/25 px-5 py-2.5 text-xs font-bold tracking-wide transition hover:border-ride-pink hover:text-ride-pink"
                  >
                    {card.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ride-navy/10 py-10">
        <div className="container-px flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <Image {...logo} alt={leadMagnet.logoAlt} className="h-5 w-auto" />
          <p className="text-xs text-ride-navy/60">{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
