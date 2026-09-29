import { HeroSection } from "@/components/tutor-ia/HeroSection";
import { ImpulsandoSection } from "@/components/tutor-ia/ImpulsandoSection";
import { PreguntasSection } from "@/components/tutor-ia/PreguntasSection";

export default function TutorIA() {
  return (
    <main className="relative flex-1 overflow-x-clip">
      <HeroSection />
      <PreguntasSection />
      <ImpulsandoSection />
    </main>
  );
}
