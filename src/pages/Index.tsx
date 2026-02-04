import HeroSection from "@/components/HeroSection";
import SpeakersSection from "@/components/SpeakersSection";
import AgendaSection from "@/components/AgendaSection";
import TargetSection from "@/components/TargetSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SpeakersSection />
      <AgendaSection />
      <TargetSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
