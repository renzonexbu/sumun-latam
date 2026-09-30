import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { RevealObserver } from "@/components/motion/RevealObserver";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="scroll-progress" aria-hidden="true" />
      <Header />
      {children}
      <Footer />
      <RevealObserver />
    </div>
  );
}
