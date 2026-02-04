import { Github, Linkedin, ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "Justin Yoo (저스틴유)",
    role: "GitHub DevRel",
    description: "GitHub Copilot SDK, CLI 최신 기능 소개 및 키노트 발표",
    tags: ["GitHub Copilot", "DevRel", "AI Developer Tools"],
    image: "https://avatars.githubusercontent.com/u/1538528?v=4",
    social: {
      github: "https://github.com/justinyoo",
      linkedin: "https://linkedin.com/in/justinyoo",
    }
  },
  {
    name: "이보라",
    role: "Microsoft MVP · 퍼실리테이터",
    description: "전체 워크숍 퍼실리테이션, OpenCode + Azure AI Foundry 실습 리드",
    tags: ["Microsoft MVP", "모던웹연구소", "AI Workshop"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    }
  },
];

const SpeakersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-wider mb-4">SPEAKERS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            연사 & 퍼실리테이터
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            GitHub과 Microsoft의 전문가들이 함께합니다
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-accent" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-primary/50"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">{speaker.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {speaker.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
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
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
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
