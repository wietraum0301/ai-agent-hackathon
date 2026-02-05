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
      { time: "13:00 - 13:30", title: "등록 & 네트워킹", description: "참가사 소개, IT/디지털 과제 공유", icon: Users },
      { time: "13:30 - 14:00", title: "키노트 ① AI 에이전트 시대", description: "비즈니스 리더에게 필요한 관점, 글로벌 도입 사례", icon: Lightbulb },
      { time: "14:00 - 14:40", title: "키노트 ② GitHub Copilot & Azure AI Foundry", description: "엔터프라이즈 개발 환경, 보안/거버넌스 개요", icon: Presentation },
      { time: "14:40 - 16:10", title: "라이브 시연 & 바이브코딩", description: "비즈니스 요구사항 → 기능 정의 → 코드/테스트/문서 생성", icon: Code, highlight: true },
      { time: "16:20 - 18:00", title: "비즈니스 아이데이션 워크숍", description: "팀별 AI SaaS 및 에이전트 Use Case 정의 및 프로토타입 범위 설정", icon: Rocket },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    title: "해커톤 & 데모데이",
    date: "3월 28일 (토)",
    sessions: [
      { time: "09:00 - 09:20", title: "리캡 & Day 2 목표 공유", description: "전날 Use Case 재정리, 완성 수준 합의", icon: Users },
      { time: "09:20 - 10:20", title: "통합 기술 세션", description: "GitHub Copilot SDK, CLI + Microsoft Foundry 연계 전략", icon: Code, highlight: true },
      { time: "10:20 - 12:30", title: "팀별 설계 고도화 & 코딩", description: "모델 확정, 구조 구체화, 1:1 멘토링", icon: Rocket },
      { time: "12:30 - 13:30", title: "점심", description: "", icon: Coffee },
      { time: "13:30 - 15:30", title: "해커톤 집중 코딩", description: "프로토타입 완성, 자유 Q&A 및 미니 클리닉", icon: Code, highlight: true },
      { time: "15:30 - 16:30", title: "데모데이 & 피드백", description: "팀별 8분 발표, 비즈니스 임팩트 심사", icon: Presentation },
      { time: "16:30 - 17:00", title: "마무리 & 후속 안내", description: "도입 구조/라이선스 옵션, 후속 미팅 제안", icon: Lightbulb },
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
            2일간의 여정
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            인사이트에서 프로토타입까지, 완전한 AI SaaS 개발 경험
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
                    <div className="absolute left-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all bg-muted border border-border">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Content Card */}
                    <div className="p-5 rounded-xl border transition-all duration-300 hover:shadow-md bg-background border-border hover:border-primary/20">
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
