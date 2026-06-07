import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/luxury/Navigation";
import Footer from "@/components/luxury/Footer";
import Preloader from "@/components/luxury/Preloader";

export const metadata: Metadata = {
  title: "LUXE Café Anand | FashionTV Café | Where Fashion Meets Flavor",
  description: "Experience luxury dining at LUXE Café Anand (FashionTV Café), Gujarat. Indulge in wood-fired Neapolitan pizza, signature mocktails, specialty coffees, and live music nights in an high-fashion editorial setting.",
  keywords: ["Luxe Cafe Anand", "FashionTV Cafe", "FTV Cafe Anand", "Best Cafe in Anand", "Luxury Cafe Gujarat", "Neapolitan Pizza Anand", "Luxe Cafe Shaan Mall"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="bg-matte-black text-warm-ivory font-sans min-h-screen flex flex-col antialiased relative">
        {/* Ambient Luxury Lighting Layers */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/3.5 blur-[160px] ambient-light-spot-1" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold-hover/3 blur-[180px] ambient-light-spot-2" />
          <div className="absolute top-[40%] right-[-20%] w-[45vw] h-[45vw] rounded-full bg-gold/2.5 blur-[150px] ambient-light-spot-1" />
        </div>

        {/* Luxury preloader seq */}
        <Preloader />
        
        {/* Floating Nav Header */}
        <Navigation />
        
        {/* Main Content Body */}
        <main className="flex-grow flex flex-col relative z-10">{children}</main>
        
        {/* Luxury Footer */}
        <Footer />
      </body>
    </html>
  );
}
