import { AgendaSection } from "@/components/impacto-social/AgendaSection";
import { HeroSection } from "@/components/impacto-social/HeroSection";
import { PilaresSection } from "@/components/impacto-social/PilaresSection";

export default function ImpactoSocial() {
  return (
    <main className="relative flex-1 overflow-x-clip">
      <HeroSection />
      <PilaresSection />
      <AgendaSection />
    </main>
  );
}
