# Live browser inspection — summary (parent agent, 2026-11-14 09:00 EST, 1919×998)

Full report integrated into ANALYSIS.md. Key facts:
- Single-page merch store for ++hellohello (Montevideo). Homepage = hero + product grid + footer only. 13 products, all "APPAREL".
- Preloader: full-screen black, small product photo cycles rapidly centre, large bold bright-red counter bottom-left (000 → 024/032 → 074…), clears in seconds, no replay on internal nav.
- Header: fixed, transparent, no blur. Left bold red "++" → /. Right: "Shop" (underlined), "Bag (0)", 3 circular theme dots (black, white/outlined, red); active dot = centre dot + ring.
- Hero: warm beige bg (~#EDE7DB), vivid pure-red type (default). Gigantic "OUTFIT®" heavy condensed all-caps, ~full viewport width, letters ~250–300px, thin red rule. 4-col info strip, small bold red: OUTFIT / WHY + paragraph / VISIT ++ WEBSITE + SHIPPING & RETURNS / © 2026.
- Themes: Red default = beige + bright red. Dark = pure black + warm cream. Light = beige + black. Bg/text only, not photos.
- Grid: 4-col staggered/masonry editorial, large empty gaps, uneven offsets. Card: 2 images (alt wipes in on hover), name left / price right / APPAREL below; title repeated 3× in DOM = marquee on hover. No filters/sort/search.
- Product order/prices (browser): Off by Design $36.50, Kerned Confidence $25, Specimen No. HH01 $30, Grid System Go $30, Neutral Grotesk $30, Red Dot Not Award $20, Gridlocked $25 (WIDE 2-col), Hello Week 001 $30 (wide/tall), Hello Week 002 $30, Monochrome Manifest $30, Positive Space $30, Whitespace Matters $33, Command + K $15.
- Hover: custom cursor — large solid-red disc "VIEW MORE" white text follows cursor over product image; alt photo wipes in (vertical split mid-transition).
- Footer: thick red rule, huge "Made to be worn. / Or judged. Or both." left, giant "©26" right (© in red ring), WHY paragraph repeated larger, thin rule, 6 link columns: ++hellohello/All rights reserved © 2026 | Libertad 2529/Office 102/Montevideo, Uruguay | Privacy Policy | Dribbble/Instagram/LinkedIn/Twitter (X) | Work/Services/About/Careers | Let's talk. BACK TO TOP exists.
- Motion: no pinned/horizontal/parallax, NO 3D/canvas/video. Normal vertical scroll, images fade in on enter. Blender 3D NOT needed.
- Page transition: full-screen bright-red overlay, large white scrambled/glitching "OUTFIT" wiping in, then new page reveals.
- Routes: /, /bag, /shipping-and-return (singular), /product/<slug> ×13.
- Bag: title "Your Bag | OUTFIT®", giant red "YOUR BAG" (O contains small circular cartoon image, alt "Screensaver"), red rule, huge red empty-state text, same footer.
- Mobile not assessed in live browser — Playwright 390×844 covers it.
