import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google"; // Experimental Typography
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from "@/lib/lenis"; // We will create this wrapper
import { CustomCursor } from "@/components/ui/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Digital Chronicle | 2026 Edition",
  description: "A visual dominance experiment in digital journalism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(syne.variable, manrope.variable, "antialiased bg-background text-foreground font-manrope selection:bg-accent selection:text-black")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReactLenis root>
            <CustomCursor />
            <Header />
            <main className="flex-1 flex flex-col min-h-screen relative z-10">{children}</main>
            <Footer />
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
