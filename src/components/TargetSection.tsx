import { CheckCircle2, Target, Sparkles, Zap } from "lucide-react";

const targets = [
  {
    title: "기업 의사결정자",
    roles: ["CIO / CDO / CTO", "개발본부장", "디지털 전환 담당 임원"],
    description: "AI 에이전트 도입의 비즈니스 임팩트를 직접 체험",
  },
  {
    title: "제품/서비스 책임자",
    roles: ["PM / PO", "서비스 기획 리더", "프로덕트 매니저"],
    description: "AI 기반 제품 기획부터 프로토타입까지 경험",
  },
  {
    title: "기술 리더",
    roles: ["개발팀 리더", "아키텍트", "시니어 개발자"],
    description: "Copilot + OpenCode 실습으로 즉시 활용 가능한 스킬 습득",
  },
];

const benefits = [
  { icon: Target, title: "실전 프로토타입", description: "이틀 만에 동작하는 AI 에이전트 데모 완성" },
  { icon: Sparkles, title: "최신 기술 체험", description: "GitHub Copilot SDK, CLI 최신 기능 직접 사용" },
  { icon: Zap, title: "비즈니스 인사이트", description: "자사에 맞는 AI 도입 시나리오 구체화" },
];

const TargetSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">FOR YOU</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            이런 분들을 위한 프로그램
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5~8개사 × 회사당 2~3인, 총 15~25명 한정
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <div
              key={target.title}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{target.title}</h3>
              <ul className="space-y-2 mb-4">
                {target.roles.map((role) => (
                  <li key={role} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{role}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border/50 pt-4">
                {target.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-10">
            참가 혜택
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="text-center p-6 rounded-xl glass animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
