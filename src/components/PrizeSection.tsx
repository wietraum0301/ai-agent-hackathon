import { Trophy, Gift, Headphones } from "lucide-react";

const PrizeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">PRIZES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">🏆 압도적인 우승 혜택</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            48시간의 도전이 500만원의 가치와 프리미엄 선물로 돌아옵니다!
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Prize */}
          <div className="group p-8 rounded-2xl bg-background border-2 border-primary/40 hover:border-primary hover:shadow-2xl transition-all duration-500 animate-fade-up relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg glow-primary">
                <Gift className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">AI 솔루션 구축 인건비 500만원</h3>
              <p className="text-muted-foreground break-keep">
                해커톤에서 완성한 프로토타입을 실제 서비스로 발전시킬 수 있도록 전문 인력 비용을 지원합니다.
              </p>
            </div>
          </div>

          {/* Secondary Prize */}
          <div
            className="group p-8 rounded-2xl bg-background border-2 border-primary/40 hover:border-primary hover:shadow-2xl transition-all duration-500 animate-fade-up relative overflow-hidden"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg glow-primary">
                <Headphones className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">AirPods Pro 3 증정</h3>
              <p className="text-muted-foreground break-keep">
                우승팀 전원에게 Apple의 프리미엄 이어폰 AirPods Pro 3를 선물로 드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* ISV Partner Benefit */}
        <div
          className="max-w-4xl mx-auto mt-8 p-6 rounded-2xl bg-background border border-primary/20 text-center animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">추가 특전</span>
          </div>
          <p className="text-muted-foreground text-sm break-keep">
            메가존클라우드 ISV 파트너로{" "}
            <span className="text-foreground font-medium">Microsoft Marketplace에 솔루션 게시</span> 특전이 제공됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
