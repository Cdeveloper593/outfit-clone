# COMPONENT-PLAN.md — OUTFIT® clone (written before build)

Reference: https://outfit.hellohello.is/ — CLONE MODE 1:1. Stack: Next.js App Router + TS + Tailwind v4.
HARD RULE: UI/effects only from ui.aceternity.com or reactbits.dev (free tier). Sources below are the
verified registry/TS-TW copies already proven in the SOLEA build (same provenance, copied verbatim).

## Mapping (reference section/effect → allowed component)

| Reference element | Component | Source |
|---|---|---|
| Hero "OUTFIT®" wordmark reveal | SplitText (chars, rise) | React Bits https://reactbits.dev/text-animations/SplitText |
| Section headings (footer slogan, product titles, YOUR BAG) | SplitText (words) | React Bits (same) |
| WHY paragraph / intro copy blur-in | BlurText | React Bits https://reactbits.dev/text-animations/BlurText |
| WHY statement word-by-word reveal (hero strip) | Text Generate Effect | Aceternity https://ui.aceternity.com/components/text-generate-effect |
| Product cards fade/blur in on scroll-enter | FadeContent | React Bits https://reactbits.dev/animations/FadeContent |
| Shipping page blocks / footer blocks entrance | AnimatedContent | React Bits https://reactbits.dev/animations/AnimatedContent |

## Own glue only (no library ships these; documented, as in SOLEA)
- Preloader shell (black, cycling photo, red counter) — no library preloader matches; ~60 lines.
- Custom cursor "VIEW MORE" red disc — neither library ships a labelled cursor; pointer glue.
- Page-transition overlay (red, scrambled OUTFIT) — scramble/wipe glue using router + timers.
- Header, theme dots + theme switching (CSS variables), full footer, product grid layout,
  title marquee on hover (CSS keyframes), alt-image wipe (CSS clip-path), bag state (context +
  localStorage), quantity/size/colour selectors (native buttons — no form primitives in libraries).
- Lenis smooth scroll wiring (allowed utility).

## 3D
None. Live inspection confirms the reference has no 3D/canvas/video — fidelity first, no invented 3D.
