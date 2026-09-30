import type { Metadata } from "next";

import { CulturaCardsSection } from "@/components/cultura/CulturaCardsSection";
import { CulturaHero } from "@/components/cultura/CulturaHero";
import { CulturasSection } from "@/components/cultura/CulturasSection";
import { FranjaSection } from "@/components/cultura/FranjaSection";
import { PasoAPasoSection } from "@/components/cultura/PasoAPasoSection";
import { HabilidadesSection } from "@/components/inteligencia/HabilidadesSection";
import { PageTransition } from "@/components/motion/PageTransition";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cultura de alto desempeño | Sumun Latam",
  description:
    "La cultura Sumun reconoce que la escuela es un tejido de relaciones vivas entre maestros, estudiantes, familias y directivos.",
};

export default function CulturaPage() {
  return (
    <PageTransition>
      <main className="relative flex-1 overflow-x-clip">
        <CulturaHero />
        <HabilidadesSection
          className={styles.habilidades}
          boxTitle="Tecnología Sumun"
          items={[
            { text: "Cultura dinámica y proactiva." },
            { text: "Acciones concretas y contextualizadas que fortalecen la cultura institucional.", bold: true },
            { text: "Involucra a familias, directivos, maestros y estudiantes" },
          ]}
          sinSumun={[
            "Cultura invisible, heredada y poco intencionada.",
            "Basada en la rutina, la obediencia y la jerarquía.",
            "Relación estudiante-maestro débil y cerrada.",
          ]}
        />
        <FranjaSection />
        <CulturaCardsSection />
        <CulturasSection />
        <PasoAPasoSection />
      </main>
    </PageTransition>
  );
}
