import { ArticulosSection } from "@/components/conversaciones-sumun/ArticulosSection";
import { HeroSection } from "@/components/conversaciones-sumun/HeroSection";
import { NovedadesSection } from "@/components/conversaciones-sumun/NovedadesSection";
import { ProtagonistasSection } from "@/components/conversaciones-sumun/ProtagonistasSection";

export default function ConversacionesSumun() {
  return (
    <main className="relative flex-1 overflow-x-clip">
      <HeroSection />
      <ProtagonistasSection />
      <NovedadesSection />
      <ArticulosSection />
    </main>
  );
}
