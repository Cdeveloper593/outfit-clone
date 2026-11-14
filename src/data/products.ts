export type Product = {
  slug: string; name: string; price: number; description: string;
  images: [string, string]; soldOut: boolean; wide?: boolean;
  colors?: string[]; sizes?: string[]; offset: number;
};
const img = (s: string): [string, string] => [`/images/${s}-1.jpg`, `/images/${s}-2.jpg`];
export const WHY = "Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.";
export const products: Product[] = [
  { slug: "off-by-design", name: "Off by Design", price: 36.5, description: "A soft reminder that not everything needs to be bold and urgent. Syntax break approved.", images: img("off-by-design"), soldOut: false, colors: ["Black"], sizes: ["S", "M", "L", "XL", "2XL"], offset: 0 },
  { slug: "kerned-confidence-1", name: "Kerned Confidence", price: 25, description: "Designed with enough spacing to keep your thoughts aligned. Perfect for grid minds and shady days.", images: img("kerned-confidence-1"), soldOut: false, offset: 14 },
  { slug: "specimen-no-hh01", name: "Specimen No. HH01", price: 30, description: "Minimal warmth, maximum context. Featuring our signature red patch—because contrast isn't optional, it's a lifestyle.", images: img("specimen-no-hh01"), soldOut: true, offset: 5 },
  { slug: "grid-system-go", name: "Grid System Go", price: 30, description: "One backpack. Infinite modules. Perfectly aligned for designers on the move (or on the run from deadlines).", images: img("grid-system-go"), soldOut: true, offset: 20 },
  { slug: "neutral-grotesk", name: "Neutral Grotesk", price: 30, description: "Says hello so you don’t have to. Swiss type, street energy, social anxiety certified.", images: img("neutral-grotesk"), soldOut: true, offset: 2 },
  { slug: "red-dot-not-award-1", name: "Red Dot Not Award", price: 20, description: "Keep your head warm and your design principles warmer. Pantone? Nah, this is ++ red.", images: img("red-dot-not-award-1"), soldOut: false, colors: ["Black", "Red"], offset: 16 },
  { slug: "gridlocked", name: "Gridlocked", price: 25, description: "Reflects more than light—reflects your design beliefs. Built on Contrast, Grid, Typeface, and Spacing. Obviously.", images: img("gridlocked"), soldOut: true, wide: true, offset: 6 },
  { slug: "hello-week-001", name: "Hello Week 001", price: 30, description: "Your week just got kerned. Comes with enough negative space to calm down even your most chaotic Mondays.", images: img("hello-week-001"), soldOut: true, wide: true, sizes: ["S", "M", "L", "XL", "2XL"], offset: 10 },
  { slug: "hello-week-002", name: "Hello Week 002", price: 30, description: "Because even your inner sun deserves PTO. Let the grid rest (just this once).", images: img("hello-week-002"), soldOut: true, sizes: ["S", "M", "L", "XL", "2XL"], offset: 0 },
  { slug: "monochrome-manifest-1", name: "Monochrome Manifest", price: 30, description: "A whisper in black-on-black. For everything you bold enough to carry.", images: img("monochrome-manifest-1"), soldOut: false, offset: 18 },
  { slug: "positive-space", name: "Positive Space", price: 30, description: "Bold. Basic. Necessary. This tote brings balance to your busy layout (and your groceries).", images: img("positive-space"), soldOut: true, offset: 7 },
  { slug: "whitespace-matters-1", name: "Whitespace Matters", price: 33, description: "Minimal enough to say everything. Maximum respect for negative space.", images: img("whitespace-matters-1"), soldOut: false, sizes: ["S", "M", "L", "XL", "2XL"], offset: 13 },
  { slug: "command-k", name: "Command + K", price: 15, description: "Form follows function—and function follows your keys. Designed to never ghost you, even when you forget your password.", images: img("command-k"), soldOut: true, offset: 3 },
];
export const money = (n: number) => `$${n.toFixed(2)}`;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
