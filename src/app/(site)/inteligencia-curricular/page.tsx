import type { Metadata } from "next";

import { AsiSeVeSection } from "@/components/inteligencia/AsiSeVeSection";
import { HabilidadesSection } from "@/components/inteligencia/HabilidadesSection";
import { IcHero } from "@/components/inteligencia/IcHero";
import { MicroMacroSection } from "@/components/inteligencia/MicroMacroSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { RutaSection } from "@/components/inteligencia/RutaSection";

export const metadata: Metadata = {
  title: "Inteligencia curricular | Sumun Latam",
  description:
    "Micro y macrohabilidades: potenciamos el desarrollo de habilidades medibles de los estudiantes.",
};

export default function InteligenciaCurricularPage() {
  return (
    <PageTransition>
      <main className="relative flex-1 overflow-x-clip">
        <IcHero />
        <HabilidadesSection />
        <AsiSeVeSection />
        <MicroMacroSection />
        <RutaSection />
      </main>
    </PageTransition>
  );
}
