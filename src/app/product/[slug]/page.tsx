import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import ProductDetail from "@/components/site/ProductDetail";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = getProduct(slug);
  return p ? { title: `${p.name} | OUTFIT®`, description: p.description } : {};
}
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = getProduct(slug);
  if (!p) notFound();
  return <ProductDetail p={p} />;
}
