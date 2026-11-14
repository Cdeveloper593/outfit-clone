/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import Image from "next/image";
import type { Product } from "@/data/products";
import { money } from "@/data/products";
import { useStore } from "@/context/store";
import FadeContent from "@/components/reactbits/FadeContent/FadeContent";

export default function ProductCard({ p }: { p: Product }) {
  const { go } = useStore();
  const href = `/product/${p.slug}`;
  return (
    <FadeContent blur duration={800} className={p.wide ? "md:col-span-2" : ""}>
      <article className="group" style={{ marginTop: undefined }}>
        <a href={href} data-cursor="view" aria-label={`${p.name} — ${money(p.price)}`}
          onClick={(e) => { e.preventDefault(); go(href); }}
          className="relative block overflow-hidden bg-[#dcd2c8] focus-visible:outline-2 focus-visible:outline-offset-4"
          style={{ aspectRatio: p.wide ? "16/10" : "242/240" }}>
          <Image src={p.images[0]} alt={p.name} fill sizes={p.wide ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"} className="object-cover" />
          <Image src={p.images[1]} alt="" aria-hidden fill sizes="25vw" className="product-img-alt absolute inset-0 object-cover" />
          {p.soldOut && <span className="absolute left-3 top-3 bg-[var(--bg)] px-2 py-1 text-[11px] font-bold uppercase tracking-wider">Sold out</span>}
        </a>
        <a href={href} onClick={(e) => { e.preventDefault(); go(href); }} className="mt-3 block focus-visible:outline-2">
          <div className="flex items-baseline justify-between gap-3 text-base md:text-lg font-bold leading-tight">
            <span className="relative block overflow-hidden whitespace-nowrap max-w-[75%]">
              <span className="title-marquee-track inline-flex whitespace-nowrap">
                <span className="pr-6">{p.name}</span><span className="pr-6" aria-hidden>{p.name}</span><span className="pr-6" aria-hidden>{p.name}</span>
              </span>
            </span>
            <span>{money(p.price)}</span>
          </div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-wide opacity-80">Apparel</p>
        </a>
      </article>
    </FadeContent>
  );
}
