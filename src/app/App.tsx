import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { NewsroomSection } from "./components/NewsroomSection";
import { BrandsSection } from "./components/BrandsSection";
import { CareerSection } from "./components/CareerSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex flex-col flex-1 w-full">
        <HeroSection />
        <NewsroomSection />
        <BrandsSection />
        <CareerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
