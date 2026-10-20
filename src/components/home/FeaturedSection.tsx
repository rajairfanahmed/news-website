"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
    { id: 1, title: "Synthetic Dreams", category: "Tech", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60" },
    { id: 2, title: "Urban Decay", category: "Culture", image: "https://images.unsplash.com/photo-1518005020951-ecc8e1209b12?w=800&auto=format&fit=crop&q=60" },
    { id: 3, title: "Silence", category: "Opinion", image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&auto=format&fit=crop&q=60" },
    { id: 4, title: "Neon Nights", category: "Photo", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=60" },
];

export function FeaturedSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-32 bg-background relative" ref={containerRef}>
            <Container>
                <div className="flex justify-between items-end mb-20 border-b border-foreground/10 pb-8">
                    <h2 className="font-syne font-bold text-6xl md:text-8xl text-foreground">
                        TRENDING
                    </h2>
                    <div className="hidden md:block font-manrope font-bold text-accent uppercase tracking-widest text-sm mb-4">
                        Top Stories
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
                    {ARTICLES.map((article, index) => (
                        <Link key={article.id} href={`/article/${article.id}`} className="group block relative hover-trigger">
                            <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5 bg-white/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <motion.img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs font-manrope font-bold text-muted-foreground uppercase tracking-widest mb-2 block">0{index + 1} / {article.category}</span>
                                    <h3 className="font-syne font-bold text-3xl md:text-4xl leading-[0.9] group-hover:text-accent transition-colors">
                                        {article.title}
                                    </h3>
                                </div>
                                <ArrowUpRight className="text-foreground -translate-y-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
