import type { Metadata } from "next";

import { TutorSection } from "@/components/home/TutorSection";
import { BeneficiosSection } from "@/components/vision/BeneficiosSection";
import { PilaresSection } from "@/components/vision/PilaresSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { VisionHero } from "@/components/vision/VisionHero";

export const metadata: Metadata = {
  title: "Visión general | Sumun Latam",
  description:
    "Conoce el sistema educativo de Sumun: IA y datos al servicio del aprendizaje.",
};

export default function VisionGeneralPage() {
  return (
    <PageTransition>
      <main className="relative flex-1 overflow-x-clip">
        <VisionHero />
        <PilaresSection />
        <BeneficiosSection />
        {/* Misma sección que en el home (Figma 972:2622 = 972:4227). */}
        <TutorSection />
      </main>
    </PageTransition>
  );
}
