# ANALYSIS.md — outfit.hellohello.is (CLONE MODE 1:1)

Inspection method: (1) curl of served HTML/CSS/JS for every route (homepage 349,887 B, all 13 product
pages, /bag, /shipping-and-return) — exact copy, prices, sold-out states, selectors, Shopify image
URLs, CSS custom properties; (2) live Muse browser inspection by parent agent (desktop 1919×998,
click-tested themes/cursor/transitions — see browser-inspection.md); (3) Playwright headless for
this build's own QA (reference screenshots via Playwright were not relied on; served-HTML + live
browser are the ground truth, same fallback pattern as SOLEA).

## Type / feeling
Single-page merch/apparel store for design studio ++hellohello (Montevideo, Uruguay). Swiss-grotesk
editorial brutalism: one colour, huge type, staggered product grid, playful designer-in-joke product
names. Homepage = hero + product grid + footer only.

## Visual language
- Font: NeueHaasGroteskTextPro (served woff2, weights 400 / 700-as-Medium / 800-as-Bold), Arial fallback in the font stack. Clone uses the same family-name stack with Inter Tight as the loaded fallback (the reference font files are not redistributed).
- Colours (from served CSS): `--color-white: #ede4dd` (warm cream used as the "white"), `--color-cream: #ede4dd`, `--color-red: #ff0001`, black #000. Tailwind v4 build on the reference too.
- Themes: Red (default) cream bg + #ff0001 type; Dark black bg + cream type; Light cream bg + black type. Switched by 3 circular dots in the header; photos unchanged.
- Type scale: wordmark ~18.5vw / 250–300px at desktop, footer slogan ~6vw, body small bold sans.

## Structure (homepage)
1. Preloader — black, centre product photo cycling fast, giant red counter bottom-left 000→100, seconds only, first visit only.
2. Fixed transparent header — red "++" left; Shop (underlined) / Bag (n) / theme dots right.
3. Hero — "OUTFIT®" gigantic heavy grotesk, thin rule, 4-col info strip: OUTFIT | WHY + paragraph | VISIT ++ WEBSITE / SHIPPING & RETURNS | © 2026.
4. Product grid — 4-col staggered editorial (uneven offsets, big gaps), 13 products, Gridlocked + Hello Week 001 wide (2-col). Card: 2 photos, alt wipes in on hover (clip-path, vertical split mid-transition), title marquee on hover (name repeated 3×), name left / price right / APPAREL below. No filters/sort/search.
5. Footer — thick rule, "Made to be worn. Or judged. Or both." + giant ©26 (© in ring), WHY paragraph larger, thin rule, 6 link columns, BACK TO TOP.

## Motion language
No pinned sections, no horizontal scroll, no parallax, no 3D/canvas/video. Normal vertical scroll;
images fade in on enter; hover = alt-image wipe + title marquee + custom cursor (large solid-red
"VIEW MORE" disc). Page transition = full-screen #ff0001 overlay with white scrambled/glitching
"OUTFIT" lettering, then reveal. Product pages: "Return to Shop", title, price, description,
colour/size selectors where present, quantity, Add to Bag / Sold out. Bag page: giant "YOUR BAG"
(O of YOUR contains circular "Screensaver" image), red rule, huge empty state "Not even one thing?
That's sad."

## Products (served HTML, verified per product page)
Off by Design $36.50 · Kerned Confidence $25 · Specimen No. HH01 $30 · Grid System Go $30 ·
Neutral Grotesk $30 · Red Dot Not Award $20 · Gridlocked $25 · Hello Week 001 $30 ·
Hello Week 002 $30 · Monochrome Manifest $30 · Positive Space $30 · Whitespace Matters $33 ·
Command + K $15. Sold out: Neutral, Gridlocked, Hello 001/002, Positive Space, Command + K,
Specimen, Grid System Go. Available: Off by Design (Black, S–2XL), Red Dot (Black/Red),
Monochrome, Whitespace (S–2XL), Kerned. Descriptions captured verbatim in src/data/products.ts.

## Mapping → allowed components
See COMPONENT-PLAN.md / COMPONENTS.md. SplitText (wordmark/headings), BlurText (descriptions),
TextGenerateEffect (WHY), FadeContent (cards), AnimatedContent (shipping blocks); preloader,
VIEW MORE cursor, scramble transition, marquee/wipe, theme dots = documented own glue (no library
equivalent). 3D: none — reference has none, none invented.
