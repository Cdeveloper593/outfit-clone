import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/store";
import { Footer, Header, Preloader, SmoothScroll, TransitionOverlay, ViewCursor } from "@/components/site/chrome";

const haas = Inter_Tight({ variable: "--font-haas", subsets: ["latin"], weight: ["400", "500", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "OUTFIT® by ++hellohello",
  description: "Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.",
  metadataBase: new URL("https://outfit.hellohello.is"),
  openGraph: { title: "OUTFIT® by ++hellohello", description: "Made to be worn. Or judged. Or both.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="red" className={`${haas.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <StoreProvider>
          <SmoothScroll>
            <Preloader />
            <TransitionOverlay />
            <ViewCursor />
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </StoreProvider>
      </body>
    </html>
  );
}
