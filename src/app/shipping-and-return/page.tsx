import type { Metadata } from "next";
import AnimatedContent from "@/components/reactbits/AnimatedContent/AnimatedContent";

export const metadata: Metadata = { title: "Shipping & Return Policy | OUTFIT®", description: "Shipping and returns for OUTFIT® by ++hellohello." };

const SECTIONS: [string, string[]][] = [
  ["Shipping", []],
  ["Processing Time", ["All orders are processed within 1–2 business days. Orders are not shipped on weekends or public holidays in Uruguay. During high-volume periods, shipments may be delayed slightly. Thank you for your patience."]],
  ["Shipping Rates & Delivery Estimates", ["Shipping costs are calculated at checkout based on your location. Estimated delivery times:", "Within Uruguay : 2–5 business days", "International : 7–21 business days (varies by destination and customs processing)", "Delivery times are estimates and may vary based on postal service performance."]],
  ["Order Tracking", ["Once your order has been shipped, you will receive a confirmation email with a tracking number. Tracking may take up to 24 hours to become active."]],
  ["Customs, Duties & Taxes", ["For international orders, customs duties, taxes, or other fees may apply. These charges are the buyer’s responsibility and are not included in our prices or shipping costs."]],
  ["Returns", ["We want you to be happy with your purchase. If something isn’t right, we’re here to help."]],
  ["Return Window", ["You may return items within 30 days of receiving your order. Products must be unused, in their original condition, and in original packaging. To request a return, please contact us at outfit@hellohello.is with your order number and reason for return."]],
  ["Refunds", ["Once we receive and inspect your return, we will notify you of the approval or rejection. If approved, your refund will be processed to your original payment method."]],
  ["Exchanges", ["We only replace items if they are defective or damaged. If you need to exchange an item, contact us at outfit@hellohello.is ."]],
  ["Return Shipping", ["Customers are responsible for return shipping costs unless the return is due to our error (e.g., incorrect or defective item)."]],
  ["Need Help?", ["If you have any questions about shipping or returns, please reach out to us at outfit@hellohello.is .", "This document was last updated on April 2, 2025."]],
];

export default function ShippingPage() {
  return (
    <main className="px-4 md:px-6 pt-24 md:pt-32 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-[.92] tracking-tight">Shipping &amp;<br />Return Policy</h1>
      <div className="border-t-[3px] border-current mt-8" />
      {SECTIONS.filter(([, ps]) => ps.length).map(([title, ps]) => (
        <AnimatedContent key={title} distance={28}>
          <section className="mt-12">
            <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
            {ps.map((t) => <p key={t.slice(0, 32)} className="mt-3 text-base md:text-lg font-medium leading-relaxed max-w-2xl">{t}</p>)}
          </section>
        </AnimatedContent>
      ))}
    </main>
  );
}
