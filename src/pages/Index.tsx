import HeroSection from "@/components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import PrizeSection from "@/components/PrizeSection";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TechStackSection />
      <SpeakersSection />
      <AgendaSection />
      <PrizeSection />
      <TargetSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
