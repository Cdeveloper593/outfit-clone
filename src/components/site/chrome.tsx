/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useStore, type Theme } from "@/context/store";

/* ---- Transition overlay: red wipe + scrambled OUTFIT (own glue) ---- */
export function TransitionOverlay() {
  const { transitioning, scramble } = useStore();
  if (!transitioning) return null;
  return (
    <div aria-hidden className="fixed inset-0 z-[90] flex items-center justify-center bg-[#ff0001]">
      <span className="text-[18vw] leading-none font-extrabold tracking-tighter text-[#ede4dd] select-none">{scramble}</span>
    </div>
  );
}

/* ---- Preloader: black, cycling photo, red counter 000→100 (own glue) ---- */
export function Preloader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [n, setN] = useState(0);
  const [img, setImg] = useState(1);
  useEffect(() => {
    if (pathname !== "/") return;
    if (sessionStorage.getItem("outfit-preloaded")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { sessionStorage.setItem("outfit-preloaded", "1"); return; }
    setShow(true);
    const start = performance.now();
    const iv = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / 2100);
      setN(Math.floor(t * 100)); setImg(1 + Math.floor(t * 5.99));
      if (t >= 1) { clearInterval(iv); sessionStorage.setItem("outfit-preloaded", "1"); setTimeout(() => setShow(false), 180); }
    }, 40);
    return () => clearInterval(iv);
  }, [pathname]);
  if (!show) return null;
  return (
    <div aria-hidden className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/preloader/image-0${img}.jpg`} alt="" className="w-[30vw] max-w-[220px] md:w-[12vw] aspect-square object-cover" />
      <span className="absolute bottom-4 left-4 text-[#ff0001] font-extrabold leading-none text-[22vw] md:text-[13rem] tracking-tighter">{String(n).padStart(3, "0")}</span>
    </div>
  );
}

/* ---- Custom cursor: red VIEW MORE disc over product imagery (own glue) ---- */
export function ViewCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current; if (!el) return;
    let x = -200, y = -200, tx = -200, ty = -200, raf = 0;
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      const t = (e.target as HTMLElement).closest?.("[data-cursor='view']");
      el.style.opacity = t ? "1" : "0";
    };
    const loop = () => { x += (tx - x) * .22; y += (ty - y) * .22; el.style.left = `${x}px`; el.style.top = `${y}px`; raf = requestAnimationFrame(loop); };
    window.addEventListener("pointermove", move, { passive: true }); raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} aria-hidden style={{ opacity: 0 }} className="pointer-events-none fixed z-[80] hidden md:flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0001] text-center text-[11px] font-bold tracking-[.14em] text-white transition-opacity duration-200 [animation:cursor-pulse_1.6s_ease-in-out_infinite]">VIEW<br />MORE</div>;
}

/* ---- Header ---- */
const DOTS: { id: Theme; cls: string; label: string }[] = [
  { id: "dark", cls: "bg-black border border-black", label: "Dark theme" },
  { id: "light", cls: "bg-[#ede4dd] border border-current", label: "Light theme" },
  { id: "red", cls: "bg-[#ff0001] border border-[#ff0001]", label: "Red theme" },
];
export function Header() {
  const { count, go, theme, setTheme } = useStore(); const pathname = usePathname();
  const nav = (href: string) => (e: React.MouseEvent) => { e.preventDefault(); go(href); };
  return (
    <header className="fixed inset-x-0 top-0 z-[70] flex items-start justify-between px-4 py-3 md:px-6 md:py-4 bg-transparent">
      <a href="/" onClick={nav("/")} aria-label="OUTFIT home" className="text-4xl md:text-5xl font-extrabold leading-[.8] tracking-tighter text-[#ff0001]">++</a>
      <nav aria-label="Shop" className="flex items-center gap-5 md:gap-8 text-sm md:text-base font-bold">
        <a href="/" onClick={nav("/")} aria-current={pathname === "/" ? "page" : undefined} className={pathname === "/" || pathname.startsWith("/product") ? "underline underline-offset-4" : ""}>Shop</a>
        <a href="/bag" onClick={nav("/bag")} aria-current={pathname === "/bag" ? "page" : undefined} className={pathname === "/bag" ? "underline underline-offset-4" : ""}>Bag ({count})</a>
        <div className="flex items-center gap-2" role="group" aria-label="Colour theme">
          {DOTS.map((d) => (
            <button key={d.id} onClick={() => setTheme(d.id)} aria-label={d.label} aria-pressed={theme === d.id}
              className={`relative h-[18px] w-[18px] rounded-full ${d.cls} focus-visible:outline-2 focus-visible:outline-offset-2`}>
              {theme === d.id && <span className="absolute inset-0 m-auto h-[5px] w-[5px] rounded-full bg-current ring-2 ring-[var(--bg)]" />}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

/* ---- Menu overlay content is inside footer columns on reference; header Menu mirrors mobile ---- */
export function Footer() {
  const { go } = useStore();
  const nav = (href: string) => (e: React.MouseEvent) => { e.preventDefault(); go(href); };
  const ext = [
    ["Work", "https://www.hellohello.is/work"], ["Services", "https://www.hellohello.is/services"],
    ["About", "https://www.hellohello.is/about"], ["Careers", "https://www.hellohello.is/careers"],
  ] as const;
  const socials = [
    ["Dribbble", "https://dribbble.com/hellohelloteam"], ["Instagram", "https://www.instagram.com/hellohelloteam"],
    ["LinkedIn", "https://www.linkedin.com/company/hellohello"], ["Twitter (X)", "https://twitter.com/hellohelloteam"],
  ] as const;
  return (
    <footer className="px-4 md:px-6 pb-8 mt-24">
      <div className="border-t-[6px] border-current pt-8 flex flex-wrap items-start justify-between gap-8">
        <p className="text-[11.5vw] md:text-[6.2vw] leading-[.92] font-extrabold tracking-tight">Made to be worn.<br />Or judged. Or both.</p>
        <p aria-hidden className="text-[26vw] md:text-[13vw] leading-[.8] font-extrabold tracking-tighter"><span className="inline-flex items-center justify-center rounded-full border-[.06em] border-current align-baseline text-[.52em] h-[1.15em] w-[1.15em] -translate-y-[.35em]">C</span>26</p>
      </div>
      <p className="mt-24 md:mt-36 max-w-3xl text-2xl md:text-4xl font-bold leading-tight">Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.</p>
      <div className="border-t border-current mt-14 pt-5 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm font-semibold leading-relaxed">
        <div><p>++hellohello</p><p>All rights reserved © 2026</p></div>
        <div><p>Libertad 2529</p><p>Office 102</p><p>Montevideo, Uruguay</p></div>
        <div><a href="https://www.hellohello.is/privacy-policy" target="_blank" rel="noreferrer" className="hover:underline">Privacy Policy</a></div>
        <ul>{socials.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="hover:underline">{l}</a></li>)}</ul>
        <ul>{ext.map(([l, h]) => <li key={l}><a href={h} target="_blank" rel="noreferrer" className="hover:underline">{l}</a></li>)}</ul>
        <div><a href="https://www.hellohello.is/contact" target="_blank" rel="noreferrer" className="hover:underline">Let&rsquo;s talk</a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block mt-6 uppercase tracking-wide hover:underline">Back to top ↑</button></div>
      </div>
    </footer>
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { destroy: () => void; raf: (t: number) => void } | null = null; let raf = 0; let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.11 }) as unknown as typeof lenis;
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    });
    return () => { cancelled = true; cancelAnimationFrame(raf); lenis?.destroy(); };
  }, []);
  return <>{children}</>;
}
