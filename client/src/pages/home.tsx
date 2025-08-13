import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
      </main>
      <footer className="py-8 px-7">
        <div className="max-w-[920px] mx-auto text-left">
          <p className="text-sm text-gray-500">
            © Building a better world. For everyone.
          </p>
        </div>
      </footer>
    </div>
  );
}
