

## Summary of Changes

The event has been condensed from 2 days to 1 day (March 27 only, 9:00 AM - 6:00 PM), with two new speakers added (김유신, 남정현). Also need to update "Microsoft AI Foundry" to "Microsoft Foundry" throughout.

### Technical Changes Required:

**1. AgendaSection.tsx** - Complete rewrite for single-day format
- Remove day tabs entirely
- Add new speaker sessions:
  - 김유신: "Microsoft Foundry IQ와 에이전틱 검색" (30min)
  - 남정현: "Foundry Agent와 MCP 서버의 만남" (30min)
- Adjust timeline to fit 9:00-18:00 schedule
- Retain existing: registration, keynotes, live demo, workshop, lunch, prototyping time

**2. SpeakersSection.tsx** - Add new speakers
- Insert 김유신 (메가존클라우드 MVP, Microsoft Foundry focus) before or after existing speakers
- Insert 남정현 (닷넷데브 MVP, Foundry Agent/MCP focus)
- Handle conditional social links (김유신 has only LinkedIn)

**3. HeroSection.tsx** - Update event metadata
- Change "단 2일," to "단 1일,"
- Update date: "3월 27일" only
- Change subtitle from "48시간" to "9시간"

**4. TechStackSection.tsx** - Branding correction
- Rename "Microsoft AI Foundry" to "Microsoft Foundry"

**5. index.html** - SEO/metadata updates
- Update title, description, keywords for 1-day event
- Change "Microsoft AI Foundry" to "Microsoft Foundry"
- Keep OG image if still appropriate

### Files to Modify:
- `src/components/AgendaSection.tsx`
- `src/components/SpeakersSection.tsx`
- `src/components/HeroSection.tsx`
- `src/components/TechStackSection.tsx`
- `index.html`

