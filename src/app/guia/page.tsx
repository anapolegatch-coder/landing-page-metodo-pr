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
 * logo, título, uma frase e o formulário. Abaixo, só dois links discretos
 * (Instagram e polegatchride.com), como no rodapé do e-mail de entrega.
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

            <div className="mt-20 grid w-full grid-cols-2 border-t border-ride-mist pt-6 text-xs text-ride-navy/60">
              <div className="border-r border-ride-mist px-2">
                {leadMagnet.follow.instagramLabel}
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-bold text-ride-pink transition hover:text-ride-navy"
                >
                  {leadMagnet.follow.instagramHandle}
                </a>
              </div>
              <div className="px-2">
                {leadMagnet.follow.siteLabel}
                <a
                  href={links.site}
                  className="mt-1 block font-bold text-ride-navy transition hover:text-ride-pink"
                >
                  {leadMagnet.follow.siteText}
                </a>
              </div>
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
