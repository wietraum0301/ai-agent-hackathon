import { cn } from "@/lib/utils";
import { Lightbulb, Code, Presentation, Coffee, Users, Rocket, Bot } from "lucide-react";

const sessions = [
  { time: "09:00 - 09:30", title: "등록 & 네트워킹", description: "참가사 소개, IT/디지털 과제 공유", icon: Users },
  { time: "09:30 - 10:00", title: "키노트 ① AI 에이전트 시대", description: "비즈니스 리더를 위한 글로벌 도입 사례", icon: Lightbulb },
  { time: "10:00 - 10:40", title: "키노트 ② GitHub Copilot(SDK, CLI) & Microsoft Foundry", description: "엔터프라이즈 개발 환경의 새로운 기준", icon: Presentation },
  { time: "10:40 - 11:10", title: "라이브 시연 & 바이브코딩", description: "요구사항 → 기능 정의 → 코드/테스트/문서 자동 생성", icon: Code, highlight: true },
  { time: "11:10 - 11:40", title: "비즈니스 아이데이션 워크숍", description: "팀별 AI SaaS · AI Agent Use Case 정의", icon: Rocket },
  { time: "11:40 - 13:00", title: "런치타임", description: "", icon: Coffee },
  { time: "13:00 - 14:00", title: "프로토타입 개발 시작 + 튜토링", description: "팀별 집중 개발 및 1:1 멘토링 지원", icon: Code, highlight: true },
  { time: "15:00 - 15:30", title: "Microsoft Foundry IQ와 에이전틱 검색", description: "김유신 · 테크레벨 200 / 30분", icon: Bot },
  { time: "15:30 - 16:00", title: "우리 회사 레거시 시스템도 AI에 통합할 수 있을까? Foundry Agent와 MCP 서버의 만남", description: "남정현 · 테크레벨 200 / 30분", icon: Bot },
  { time: "16:00 - 17:30", title: "프로토타입 개발 + 튜토링", description: "팀별 집중 개발 및 1:1 멘토링 지원", icon: Code, highlight: true },
  { time: "17:30 - 18:00", title: "에이전트별 페차쿠차 발표 + 오픈 평가와 시상", description: "팀별 프로토타입 데모 및 평가", icon: Presentation },
  { time: "18:00 - 20:00", title: "저녁식사와 네트워킹", description: "편안한 분위기에서의 네트워킹 타임", icon: Coffee },
];

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">AGENDA</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">
            📅 하루 집중 여정
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            3월 27일 (금) · 09:00 - 18:00 · 양재 엘타워
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-6">
              {sessions.map((session, index) => {
                const Icon = session.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={cn(
                      "absolute left-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all border",
                      session.highlight
                        ? "bg-gradient-primary border-primary/50 glow-primary"
                        : "bg-muted border-border"
                    )}>
                      <Icon className={cn("w-4 h-4", session.highlight ? "text-primary-foreground" : "text-muted-foreground")} />
                    </div>

                    <div className={cn(
                      "p-5 rounded-xl border transition-all duration-300 hover:shadow-md",
                      session.highlight
                        ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                        : "bg-background border-border hover:border-primary/20"
                    )}>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-primary font-mono text-sm">{session.time}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1 break-keep">{session.title}</h4>
                      {session.description && (
                        <p className="text-muted-foreground text-sm break-keep">{session.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
