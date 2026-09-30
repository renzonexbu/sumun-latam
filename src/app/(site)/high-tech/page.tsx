import type { Metadata } from "next";

import { TutorSection } from "@/components/home/TutorSection";
import { AsiSeVeHtSection } from "@/components/hightech/AsiSeVeHtSection";
import { CorazonDigitalSection } from "@/components/hightech/CorazonDigitalSection";
import { HtHero } from "@/components/hightech/HtHero";
import { HabilidadesSection } from "@/components/inteligencia/HabilidadesSection";
import { PageTransition } from "@/components/motion/PageTransition";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "High Tech | Sumun Latam",
  description:
    "IA y Data, dos turbinas que impulsan el aprendizaje: la tecnología al servicio del aprendizaje activo y el pensamiento crítico.",
};

export default function HighTechPage() {
  return (
    <PageTransition>
      <main className="relative flex-1 overflow-x-clip">
        <HtHero />
        <HabilidadesSection
          className={styles.habilidades}
          boxTitle="Tecnología Sumun"
          items={[
            { text: "Inyecta tecnología disruptiva de datos e IA para el desarrollo de competencias críticas y comprensión profunda" },
            { text: "Soluciones prácticas y revolucionarias, con herramientas que hacen la diferencia desde el núcleo del proceso didáctico", bold: true },
            { text: "Soluciones basadas en datos, que conectan, empoderan y generan un cambio profundo y colectivo" },
          ]}
          sinSumun={[
            "Tecnología aislada y poco práctica que frena la creatividad.",
            "Sistemas obsoletos que no abordan las necesidades únicas de cada estudiante",
            "Acceso restringido a datos, sin visibilidad para familias ni soporte para el proceso",
          ]}
          wideSinSumun
        />
        <AsiSeVeHtSection />
        <CorazonDigitalSection />
        {/* Misma sección que en el home (Figma 972:3763 = 972:4227). */}
        <TutorSection />
      </main>
    </PageTransition>
  );
}
