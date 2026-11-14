# COMPONENTS.md — OUTFIT® clone (verified inventory)

Every UI component / visual effect comes ONLY from **Aceternity UI** (ui.aceternity.com) or
**React Bits** (reactbits.dev), free tier. Sources are the verified registry / TS-TW copies proven
in the SOLEA build (fetched from the official registry/catalogue there), copied verbatim into
`src/components/`. No shadcn, Magic UI, MUI, Chakra, HeroUI, Componentry or CodePen components.

## Aceternity UI — `src/components/aceternity/`
| Component | Page URL | Used for |
|---|---|---|
| Text Generate Effect | https://ui.aceternity.com/components/text-generate-effect | Hero WHY paragraph, word-by-word blur reveal |

## React Bits — `src/components/reactbits/`
| Component | Page URL | Used for |
|---|---|---|
| SplitText | https://reactbits.dev/text-animations/SplitText | Hero "OUTFIT®" wordmark char reveal |
| BlurText | https://reactbits.dev/text-animations/BlurText | Product-page descriptions |
| FadeContent | https://reactbits.dev/animations/FadeContent | Product cards fade/blur in on scroll-enter |
| AnimatedContent | https://reactbits.dev/animations/AnimatedContent | Shipping & Return policy blocks entrance |

## Own glue only (no third-party UI components)
Preloader shell (black, cycling photo, red 000→100 counter — no library preloader matches),
custom "VIEW MORE" red-disc cursor (neither library ships a labelled cursor — pointer glue, as in
SOLEA), red scramble page-transition overlay, header + theme dots (CSS-variable themes),
footer, staggered product grid, hover title-marquee (CSS), alt-image clip-path wipe (CSS),
bag context + localStorage, native size/colour/quantity buttons (neither library ships form
primitives), Lenis wiring.

## Allowed non-component dependencies
React/Next.js, Tailwind CSS v4, motion (Aceternity dep), GSAP + @gsap/react (React Bits dep),
Lenis, Google Fonts (Inter Tight as Neue Haas fallback), inline product data.

## 3D
None — the reference has no 3D/canvas/video (live-browser verified), so no Blender asset was made.
