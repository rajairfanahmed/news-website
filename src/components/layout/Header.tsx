"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
    { href: "/news", label: "News" },
    { href: "/categories/politics", label: "Politics" },
    { href: "/categories/tech", label: "Technology" },
    { href: "/categories/opinion", label: "Opinion" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "px-4 md:px-8" : "px-0"
            )}
        >
            <div
                className={cn(
                    "mx-auto transition-all duration-500 flex items-center justify-between p-4",
                    isScrolled
                        ? "max-w-5xl bg-background/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
                        : "container bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="relative z-50 group hover-trigger">
                    <span className="font-syne font-bold text-xl md:text-2xl tracking-tighter text-foreground group-hover:text-accent transition-colors">
                        DIGITAL<span className="text-accent">.</span>CHRONICLE
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 bg-background/50 px-8 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-manrope font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:text-shadow-glow transition-all hover-trigger"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                    <Button variant="primary" className="rounded-full px-6 font-syne font-bold hover-trigger bg-accent text-black hover:bg-white">
                        Subscribe
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="p-2 -mr-2 text-foreground hover-trigger"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Full Screen Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-500",
                    isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <nav className="flex flex-col space-y-8 text-center">
                    {NAV_LINKS.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-syne font-black text-5xl text-foreground hover:text-accent transition-colors hover-trigger",
                                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
