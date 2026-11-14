/* eslint-disable @next/next/no-html-link-for-pages, react-hooks/set-state-in-effect -- internal links use <a> with preventDefault to run the reference's red scramble page-transition; localStorage/preloader hydration setState is intentional */
"use client";
import Image from "next/image";
import { money } from "@/data/products";
import { useStore } from "@/context/store";

export default function BagPage() {
  const { bag, remove, go } = useStore();
  const total = bag.reduce((a, b) => a + b.price * b.qty, 0);
  return (
    <main className="px-4 md:px-6 pt-24 md:pt-32">
      <h1 className="text-[17vw] md:text-[13vw] leading-[.85] font-black tracking-tighter">
        Y<span className="relative inline-block h-[.72em] w-[.72em] mx-[.02em] overflow-hidden rounded-full align-baseline -translate-y-[.04em]">
          <Image src="/preloader/image-02.jpg" alt="Screensaver" fill sizes="20vw" className="object-cover" />
        </span>UR BAG
      </h1>
      <div className="border-t-[3px] border-current mt-6" />
      {bag.length === 0 ? (
        <div className="py-16 md:py-24">
          <p className="text-[9vw] md:text-[5.5vw] leading-[.95] font-extrabold tracking-tight">Not even one thing?<br />That&rsquo;s sad.</p>
          <a href="/" onClick={(e) => { e.preventDefault(); go("/"); }} className="inline-block mt-10 bg-[#ff0001] text-white px-8 py-4 font-extrabold uppercase tracking-wide hover:opacity-85">Return to Shop</a>
        </div>
      ) : (
        <div className="py-10 grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <ul className="divide-y border-y border-current">
            {bag.map((item, i) => (
              <li key={`${item.slug}-${item.size}-${item.color}-${i}`} className="flex gap-5 py-5 items-center">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden bg-[#dcd2c8]"><Image src={item.image} alt={item.name} fill sizes="112px" className="object-cover" /></div>
                <div className="flex-1">
                  <p className="text-xl font-extrabold">{item.name}</p>
                  <p className="text-sm font-semibold uppercase opacity-80">{[item.color, item.size].filter(Boolean).join(" · ") || "Apparel"} × {item.qty}</p>
                  <button onClick={() => remove(i)} className="mt-2 text-sm font-bold underline underline-offset-4">Remove</button>
                </div>
                <p className="text-xl font-extrabold">{money(item.price * item.qty)}</p>
              </li>
            ))}
          </ul>
          <div className="border-2 border-current p-6">
            <p className="flex justify-between text-xl font-extrabold"><span>Total</span><span>{money(total)}</span></p>
            <p className="mt-2 text-sm font-semibold opacity-80">Shipping calculated at checkout.</p>
            <button className="mt-6 w-full bg-[#ff0001] text-white py-4 font-extrabold uppercase tracking-wide hover:opacity-85" onClick={() => alert("Demo clone — checkout is not connected. Your bag is saved on this device.")}>Checkout</button>
            <a href="/" onClick={(e) => { e.preventDefault(); go("/"); }} className="block text-center mt-4 font-bold underline underline-offset-4">Continue shopping</a>
          </div>
        </div>
      )}
    </main>
  );
}
