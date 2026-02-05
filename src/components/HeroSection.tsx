import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,140,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,140,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Hosted by</span>
          <span className="text-sm font-semibold text-foreground">MEGAZONE CLOUD</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 break-keep animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">비즈니스 리더를 위한</span>
          <br />
          <span className="text-gradient">바이브코딩 해커톤</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 break-keep animate-fade-up" style={{ animationDelay: '0.2s' }}>
          GitHub Copilot & Microsoft Foundry 기반
          <br className="hidden md:block" />
          <span className="text-foreground font-medium">AI SaaS 프로토타이핑 워크숍</span>
        </p>

        {/* Event Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">3월 27일 - 28일</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 rounded-xl glass">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">서울 도심 세미나실</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl">
            지금 등록하기
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
          >
            프로그램 자세히 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
