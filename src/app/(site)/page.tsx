import { BannerSlider } from "@/components/home/BannerSlider";
import { EquipoSection } from "@/components/home/EquipoSection";
import { EstudiantesSection } from "@/components/home/EstudiantesSection";
import { NovedadesSection } from "@/components/home/NovedadesSection";
import { PropuestaSection } from "@/components/home/PropuestaSection";
import { TutorSection } from "@/components/home/TutorSection";
import { defaultBannerSlides } from "@/sanity/lib/banner";

// Maquetación con contenido local; la conexión a Sanity (getBannerSlides) se incorpora después.
export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-clip">
      <BannerSlider slides={defaultBannerSlides} />
      <PropuestaSection />
      <EstudiantesSection />
      <TutorSection />
      <EquipoSection />
      <NovedadesSection />
    </main>
  );
}
