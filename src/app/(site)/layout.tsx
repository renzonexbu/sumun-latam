import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
