import { CheckCircle2, Target, Sparkles, Zap, Rocket, Award } from "lucide-react";

const targets = [
  {
    title: "개발팀 리더",
    roles: ["팀장급 개발자", "테크리드", "개발 매니저"],
    description: "AI 기반 개발 환경의 생산성 향상을 직접 체험하고, 팀에 적용할 인사이트를 얻어가세요.",
  },
  {
    title: "창의적인 실무자",
    roles: ["새로운 기술에 열린 개발자", "기획자", "디자이너"],
    description: "아이디어를 현실로 만드는 AI 도구를 직접 활용하며 창의력을 발휘하세요.",
  },
  {
    title: "혁신을 주도하는 PM/PO",
    roles: ["서비스 기획 리더", "프로덕트 매니저"],
    description: "아이디어에서 프로토타입까지, AI 기반 제품 개발의 전 과정을 경험하세요.",
  },
  {
    title: "시니어 개발자",
    roles: ["아키텍트", "풀스택 개발자"],
    description: "GitHub Copilot SDK와 CLI를 활용한 실전 스킬을 즉시 습득하세요.",
  },
];

const benefits = [
  { icon: Target, title: "실전 프로토타입", description: "이틀 만에 동작하는 AI SaaS · AI Agent 데모 완성" },
  {
    icon: Sparkles,
    title: "최신 기술 체험",
    description: "GitHub Copilot(SDK, CLI), Microsoft AI Foundry 최신 기능 직접 사용",
  },
  { icon: Zap, title: "비즈니스 인사이트", description: "자사에 맞는 AI 도입 시나리오 구체화" },
  {
    icon: Award,
    title: "우승 시 특별 혜택",
    description: "AI 솔루션 구축 지원(500만원 상당) + AirPods Pro 3 + Microsoft Marketplace 게시 특전",
  },
];

const TargetSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/50">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">FOR YOU</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">🎯 이런 분들을 초대합니다</h2>
        </div>

        {/* Target Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
          {targets.map((target, index) => (
            <div
              key={target.title}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{target.title}</h3>
              <ul className="space-y-2 mb-4">
                {target.roles.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{role}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border pt-4 break-keep">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">🎁 참가 혜택</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg glow-primary">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground break-keep">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
