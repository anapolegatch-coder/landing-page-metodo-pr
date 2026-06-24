import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Methodology } from "@/components/sections/Methodology";
import { Plans } from "@/components/sections/Plans";
import { Consulting } from "@/components/sections/Consulting";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Footer } from "@/components/sections/Footer";

/**
 * Landing page do Método Polegatch. A ordem das seções segue a jornada de
 * conversão: atração (Hero) > dor (Problema) > solução (Metodologia) >
 * oferta (Planos/Consultoria) > autoridade (Mentora) > objeções (FAQ) >
 * prova de produto (App).
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Methodology />
        <Plans />
        <Consulting />
        <About />
        <Faq />
        <AppShowcase />
      </main>
      <Footer />
    </>
  );
}
