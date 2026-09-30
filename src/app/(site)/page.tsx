import { AliadosSection } from "@/components/home/AliadosSection";
import { BannerSlider } from "@/components/home/BannerSlider";
import { CompromisoSection } from "@/components/home/CompromisoSection";
import { EquipoSection } from "@/components/home/EquipoSection";
import { EstudiantesSection } from "@/components/home/EstudiantesSection";
import { NovedadesSection } from "@/components/home/NovedadesSection";
import { PropuestaSection } from "@/components/home/PropuestaSection";
import { SerieSection } from "@/components/home/SerieSection";
import { TutorSection } from "@/components/home/TutorSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { defaultBannerSlides } from "@/sanity/lib/banner";

// Maquetación con contenido local; la conexión a Sanity (getBannerSlides) se incorpora después.
export default function Home() {
  return (
    <PageTransition>
      <main className="relative flex-1 overflow-x-clip">
        <BannerSlider slides={defaultBannerSlides} />
        <PropuestaSection />
        <EstudiantesSection />
        <TutorSection />
        <EquipoSection />
        <SerieSection />
        <NovedadesSection />
        <CompromisoSection />
        <AliadosSection />
      </main>
    </PageTransition>
  );
}
