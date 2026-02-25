import { useState } from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, Code, Presentation, Coffee, Users, Rocket } from "lucide-react";

const days = [
  {
    id: "day1",
    label: "Day 1",
    title: "인사이트 & 아이데이션",
    date: "3월 27일 (금)",
    sessions: [
      { time: "09:00 - 09:30", title: "등록 & 네트워킹", description: "참가사 소개, IT/디지털 과제 공유", icon: Users },
      { time: "09:30 - 10:00", title: "키노트 ① AI 에이전트 시대", description: "비즈니스 리더를 위한 글로벌 도입 사례", icon: Lightbulb },
      { time: "10:00 - 10:40", title: "키노트 ② GitHub Copilot(SDK, CLI) & Microsoft AI Foundry", description: "엔터프라이즈 개발 환경의 새로운 기준", icon: Presentation },
      { time: "10:40 - 11:10", title: "라이브 시연 & 바이브코딩", description: "요구사항 → 기능 정의 → 코드/테스트/문서 자동 생성", icon: Code, highlight: true },
      { time: "11:10 - 11:40", title: "비즈니스 아이데이션 워크숍", description: "팀별 AI SaaS · AI Agent Use Case 정의", icon: Rocket },
      { time: "11:40 - 13:00", title: "런치타임", description: "", icon: Coffee },
      { time: "13:00 - 18:00", title: "프로토타입 개발 시작 + 튜토링", description: "팀별 집중 개발 및 1:1 멘토링 지원", icon: Code, highlight: true },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    title: "프로토타입 완성",
    date: "3월 28일 (토)",
    sessions: [
      { time: "09:00 - 12:00", title: "오전 개발시간 + 튜토링", description: "팀별 집중 개발 세션, 실시간 멘토링", icon: Code, highlight: true },
      { time: "12:00 - 13:00", title: "런치타임", description: "", icon: Coffee },
      { time: "13:00 - 15:00", title: "오후 개발 시간 + 튜토링", description: "AI 제품 데모 완성을 향한 마지막 스프린트", icon: Code, highlight: true },
      { time: "15:00 - 16:30", title: "각 조 10분 발표 및 심사", description: "팀별 프로토타입 데모 및 비즈니스 임팩트 심사", icon: Presentation },
      { time: "16:30 - 16:45", title: "선정작 발표", description: "우승팀 발표 및 시상", icon: Lightbulb },
      { time: "16:45 - 17:00", title: "네트워킹", description: "참가자 간 교류 및 후속 논의", icon: Users },
      { time: "17:00 - 19:00", title: "저녁식사와 네트워킹", description: "편안한 분위기에서의 네트워킹 타임", icon: Coffee },
    ],
  },
];

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("day1");

  const currentDay = days.find((d) => d.id === activeDay)!;

  return (
    <section id="agenda" className="py-24 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">AGENDA</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">
            📅 2일간의 집중 여정
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            인사이트에서 프로토타입까지, 완전한 AI 제품 개발 경험
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all duration-300",
                activeDay === day.id
                  ? "bg-gradient-primary text-primary-foreground shadow-lg glow-primary"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <span className="block text-sm">{day.label}</span>
              <span className="block text-xs opacity-80">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Day Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gradient">{currentDay.title}</h3>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            {/* Sessions */}
            <div className="space-y-6">
              {currentDay.sessions.map((session, index) => {
                const Icon = session.icon;
                return (
                  <div
                    key={index}
                    className="relative pl-20 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className={cn(
                      "absolute left-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all border",
                      session.highlight
                        ? "bg-gradient-primary border-primary/50 glow-primary"
                        : "bg-muted border-border"
                    )}>
                      <Icon className={cn("w-4 h-4", session.highlight ? "text-primary-foreground" : "text-muted-foreground")} />
                    </div>

                    {/* Content Card */}
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
