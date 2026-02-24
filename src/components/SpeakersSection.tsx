import { Github, Linkedin } from "lucide-react";
import boraLeeImage from "@/assets/speaker-bora-lee.jpg";

const speakers = [
  {
    name: "유저스틴",
    role: "수석 디벨로퍼 아드보캇, Microsoft",
    description: "GitHub Copilot SDK, CLI 최신 기능 소개 및 키노트 발표",
    tags: ["마이크로소프트", "GitHub Copilot", "DevRel", "AI Developer Tools"],
    image: "https://avatars.githubusercontent.com/u/1538528?v=4",
    social: {
      github: "https://github.com/justinyoo",
      linkedin: "https://linkedin.com/in/justinyoo",
    },
  },
  {
    name: "이보라",
    role: "Microsoft MVP, 모던웹연구소",
    description: "워크숍 퍼실리테이션, GitHub Copilot 실습 리드",
    tags: ["Microsoft MVP", "모던웹연구소", "AI Workshop"],
    image: boraLeeImage,
    social: {
      github: "https://github.com/Violet-Bora-Lee",
      linkedin: "https://www.linkedin.com/in/learner-bora/",
    },
  },
];

const SpeakersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/50">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">SPEAKERS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 break-keep">연사 & 퍼실리테이터</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto break-keep">
            GitHub과 Microsoft의 전문가들이 함께합니다
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mt-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">연사 추가 확정 중 · Coming Soon</span>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative z-10">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="relative w-24 h-24 rounded-full object-cover border-3 border-primary/30 shadow-md"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm mb-6 break-keep">{speaker.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {speaker.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary/50 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={speaker.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
