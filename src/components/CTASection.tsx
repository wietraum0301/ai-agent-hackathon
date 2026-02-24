import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(201_78%_69%_/_0.1),_transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Content */}
          <div className="p-10 rounded-3xl bg-muted/50 border border-primary/20 shadow-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">참가 신청 접수 중</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 break-keep">
              "언젠가 해봐야지"가 아닌,
              <br />
              <span className="text-gradient">"지금 바로" 시작하세요</span>
            </h2>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto break-keep">
              2일간의 집중 해커톤에서 GitHub Copilot, Spark, 그리고 Microsoft AI Foundry를 
              직접 체험하고, 여러분만의 AI SaaS 또는 AI Agent 프로토타입을 완성하세요. 
              메가존클라우드가 지원합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://events.teams.microsoft.com/event/b1532464-68b5-4997-825d-bc3430d621a3@97f42f55-f1db-4804-b1eb-08db083efd4f" target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-5 h-5" />
                  지금 등록하기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="mailto:celia@megazone.com">
                  <Mail className="w-5 h-5" />
                  문의하기
                </a>
              </Button>
            </div>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>📅 3월 27일 - 28일</span>
              <span>📍 양재 엘타워</span>
              <span>🏆 우승 혜택: 500만원 + AirPods Pro 3</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
