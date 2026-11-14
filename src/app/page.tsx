/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import { products, WHY } from "@/data/products";
import ProductCard from "@/components/site/ProductCard";
import SplitText from "@/components/reactbits/SplitText/SplitText";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { useStore } from "@/context/store";

export default function Home() {
  const { go } = useStore();
  const nav = (href: string) => (e: React.MouseEvent) => { e.preventDefault(); go(href); };
  return (
    <main className="px-4 md:px-6 pt-24 md:pt-28">
      <h1 className="sr-only">OUTFIT® by ++hellohello — Shop</h1>
      <div aria-hidden className="select-none">
        <SplitText text="OUTFIT®" tag="span" splitType="chars" duration={0.9} delay={45} textAlign="left"
          className="block w-full whitespace-nowrap font-black leading-[.82] tracking-[-0.06em] text-[18.5vw]" />
      </div>
      <div className="border-t-[3px] border-current mt-4" />
      <section aria-label="About Outfit" className="grid grid-cols-2 md:grid-cols-4 gap-6 py-5 text-sm md:text-[15px] font-bold leading-snug">
        <p className="uppercase">Outfit</p>
        <div>
          <p className="uppercase mb-2">Why</p>
          <TextGenerateEffect words={WHY} className="font-bold text-sm md:text-[15px] leading-snug [&_span]:text-current" duration={0.4} />
        </div>
        <ul className="uppercase space-y-1">
          <li><a href="https://www.hellohello.is" target="_blank" rel="noreferrer" className="hover:underline">Visit ++ website</a></li>
          <li><a href="/shipping-and-return" onClick={nav("/shipping-and-return")} className="hover:underline">Shipping &amp; Returns</a></li>
        </ul>
        <p className="text-right md:text-left">© 2026</p>
      </section>

      <section aria-label="Products" className="mt-10 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 items-start">
          {products.map((p, i) => (
            <div key={p.slug} className={p.wide ? "lg:col-span-2" : ""} style={{ marginTop: undefined }}>
              <div className={i % 4 === 1 ? "lg:mt-16" : i % 4 === 3 ? "lg:mt-24" : i % 4 === 2 ? "lg:mt-8" : ""}>
                <ProductCard p={p} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <p className="mt-20 text-center text-xs font-semibold uppercase tracking-[.2em] opacity-70">000 — Outfit® by ++hellohello — Montevideo, Uruguay</p>
    </main>
  );
}
