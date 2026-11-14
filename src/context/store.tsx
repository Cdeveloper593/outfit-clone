/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Theme = "red" | "dark" | "light";
export type BagItem = { slug: string; name: string; price: number; image: string; size?: string; color?: string; qty: number };
type Ctx = {
  theme: Theme; setTheme: (t: Theme) => void;
  bag: BagItem[]; add: (i: BagItem) => void; remove: (idx: number) => void; count: number;
  go: (href: string) => void; transitioning: boolean; scramble: string;
};
const StoreCtx = createContext<Ctx | null>(null);
const CHARS = "OUTFIT®ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#++";
export function StoreProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("red");
  const [bag, setBag] = useState<BagItem[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const [scramble, setScramble] = useState("OUTFIT");
  const router = useRouter(); const pathname = usePathname(); const busy = useRef(false);
  useEffect(() => {
    try {
      const t = localStorage.getItem("outfit-theme") as Theme | null; if (t) setThemeState(t);
      const b = localStorage.getItem("outfit-bag"); if (b) setBag(JSON.parse(b));
    } catch { /* ignore */ }
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem("outfit-theme", theme); } catch { /* ignore */ } }, [theme]);
  useEffect(() => { try { localStorage.setItem("outfit-bag", JSON.stringify(bag)); } catch { /* ignore */ } }, [bag]);
  const setTheme = (t: Theme) => setThemeState(t);
  const add = useCallback((item: BagItem) => setBag((prev) => {
    const idx = prev.findIndex((p) => p.slug === item.slug && p.size === item.size && p.color === item.color);
    if (idx >= 0) { const next = [...prev]; next[idx] = { ...next[idx], qty: next[idx].qty + item.qty }; return next; }
    return [...prev, item];
  }), []);
  const remove = useCallback((idx: number) => setBag((prev) => prev.filter((_, i) => i !== idx)), []);
  const go = useCallback((href: string) => {
    if (href === pathname || busy.current) { if (href !== pathname) router.push(href); return; }
    if (href.startsWith("http")) { window.location.href = href; return; }
    busy.current = true; setTransitioning(true);
    let frame = 0;
    const iv = setInterval(() => {
      frame++;
      setScramble("OUTFIT".split("").map((c, i) => (frame > 6 && i < frame - 5 ? c : CHARS[Math.floor(Math.random() * CHARS.length)])).join(""));
      if (frame === 7) router.push(href);
      if (frame >= 13) { clearInterval(iv); setTransitioning(false); setScramble("OUTFIT"); busy.current = false; }
    }, 55);
  }, [pathname, router]);
  return <StoreCtx.Provider value={{ theme, setTheme, bag, add, remove, count: bag.reduce((a, b) => a + b.qty, 0), go, transitioning, scramble }}>{children}</StoreCtx.Provider>;
}
export function useStore() { const c = useContext(StoreCtx); if (!c) throw new Error("store"); return c; }
