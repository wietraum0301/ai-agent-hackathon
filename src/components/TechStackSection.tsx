import { Code2, Zap, Shield, Star } from "lucide-react";

const coreStack = [
  {
    name: "GitHub Copilot",
    description: "AI 페어 프로그래밍으로 코드 자동 생성, 테스트, 문서화까지",
    icon: Code2,
  },
  {
    name: "Spark",
    description: "빠르고 직관적인 프로토타입 개발 환경",
    icon: Zap,
  },
  {
    name: "Microsoft AI Foundry",
    description: "엔터프라이즈급 AI 모델 배포 및 거버넌스",
    icon: Shield,
  },
];

const bonusStack = ["SharePoint", "Microsoft Graph", "Microsoft Teams"];

const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">TECH STACK</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">🛠️ 핵심 기술 스택</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            세 가지 강력한 도구의 조합으로, 아이디어만 있으면 누구나 AI 제품을 만들 수 있습니다
          </p>
        </div>

        {/* Core Stack Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {coreStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="group p-8 rounded-2xl bg-muted/50 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg glow-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{tech.name}</h3>
                <p className="text-muted-foreground text-sm break-keep">{tech.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bonus Stack */}
        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-muted/30 border border-primary/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-lg font-bold text-foreground">⭐ 가산점 기술 스택</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4 break-keep">
            다음 기술을 활용한 프로토타입에는 심사 시 가산점이 부여됩니다!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {bonusStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
