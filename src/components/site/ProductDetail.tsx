/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { money } from "@/data/products";
import { useStore } from "@/context/store";
import BlurText from "@/components/reactbits/BlurText/BlurText";

export default function ProductDetail({ p }: { p: Product }) {
  const { go, add } = useStore();
  const [size, setSize] = useState(p.sizes?.[Math.min(1, (p.sizes?.length ?? 1) - 1)]);
  const [color, setColor] = useState(p.colors?.[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  return (
    <main className="px-4 md:px-6 pt-24 md:pt-32">
      <a href="/" onClick={(e) => { e.preventDefault(); go("/"); }} className="text-sm font-bold uppercase tracking-wide hover:underline">← Return to Shop</a>
      <div className="grid md:grid-cols-2 gap-10 mt-8 items-start">
        <div className="space-y-5">
          {p.images.map((src, i) => (
            <div key={src} data-cursor={i === 0 ? "view" : undefined} className="relative overflow-hidden bg-[#dcd2c8]" style={{ aspectRatio: "242/240" }}>
              <Image src={src} alt={`${p.name} ${i === 0 ? "front" : "alternate view"}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority={i === 0} />
            </div>
          ))}
        </div>
        <div className="md:sticky md:top-28">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[.92] tracking-tight">{p.name}</h1>
          <p className="mt-5 text-3xl md:text-4xl font-extrabold">{money(p.price)}</p>
          <BlurText delay={40} text={p.description} className="mt-6 max-w-md text-lg md:text-xl font-semibold leading-snug" />
          {p.colors && (
            <fieldset className="mt-8"><legend className="text-xs font-bold uppercase tracking-wider mb-2">Color</legend>
              <div className="flex gap-2">{p.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} aria-pressed={color === c} className={`px-4 py-2 border-2 text-sm font-bold ${color === c ? "border-current bg-[var(--fg)] text-[var(--bg)]" : "border-current"}`}>{c}</button>))}
              </div></fieldset>
          )}
          {p.sizes && (
            <fieldset className="mt-6"><legend className="text-xs font-bold uppercase tracking-wider mb-2">Size</legend>
              <div className="flex flex-wrap gap-2">{p.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} aria-pressed={size === s} className={`min-w-11 px-3 py-2 border-2 text-sm font-bold ${size === s ? "border-current bg-[var(--fg)] text-[var(--bg)]" : "border-current"}`}>{s}</button>))}
              </div></fieldset>
          )}
          <div className="mt-8 flex items-center gap-4">
            <label className="text-xs font-bold uppercase tracking-wider" htmlFor="qty">Qty</label>
            <div className="flex items-center border-2 border-current">
              <button aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 font-bold">−</button>
              <span id="qty" aria-live="polite" className="min-w-8 text-center font-bold">{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty(Math.min(9, qty + 1))} className="px-3 py-2 font-bold">+</button>
            </div>
          </div>
          {p.soldOut ? (
            <p className="mt-8 inline-block bg-[var(--fg)] text-[var(--bg)] px-8 py-4 text-base font-extrabold uppercase tracking-wide">Sold out</p>
          ) : (
            <button onClick={() => { add({ slug: p.slug, name: p.name, price: p.price, image: p.images[0], size, color, qty }); setAdded(true); setTimeout(() => go("/bag"), 450); }}
              className="mt-8 bg-[#ff0001] text-white px-10 py-4 text-base font-extrabold uppercase tracking-wide hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4">
              {added ? "Added ✓" : "Add to Bag"}
            </button>
          )}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide opacity-80">Apparel — OUTFIT® by ++hellohello</p>
        </div>
      </div>
    </main>
  );
}
