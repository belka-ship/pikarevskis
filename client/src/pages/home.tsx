import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExperienceSection } from "@/components/experience-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-primary">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
