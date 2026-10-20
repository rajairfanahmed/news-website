import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    imageUrl?: string;
    href: string;
    variant?: "grid" | "list" | "hero" | "compact";
    className?: string;
}

export function ArticleCard({
    title,
    excerpt,
    category,
    author,
    date,
    imageUrl,
    href,
    variant = "grid",
    className,
}: ArticleCardProps) {
    // Variant Styles
    if (variant === "hero") {
        return (
            <Link href={href} className={cn("group block relative w-full h-[600px] overflow-hidden rounded-lg", className)}>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <span className="text-accent-gold font-sans font-bold text-sm tracking-widest uppercase mb-3">
                        {category}
                    </span>
                    <h2 className="text-white font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 group-hover:underline underline-offset-4 decoration-accent">
                        {title}
                    </h2>
                    <p className="text-white/80 font-sans text-lg md:text-xl max-w-2xl mb-6 line-clamp-2">
                        {excerpt}
                    </p>
                    <div className="flex items-center text-white/60 text-sm font-sans space-x-4">
                        <span>{author}</span>
                        <span>•</span>
                        <span>{date}</span>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === "list") {
        return (
            <Link href={href} className={cn("group flex flex-col md:flex-row gap-6 items-start py-6 border-b border-border/50", className)}>
                {imageUrl && (
                    <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-md bg-surface-2">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <div className="flex-1">
                    <span className="text-accent font-sans font-bold text-xs tracking-wider uppercase mb-2 block">
                        {category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary mb-3 leading-snug group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="font-sans text-text-secondary text-base mb-4 line-clamp-2">
                        {excerpt}
                    </p>
                    <div className="flex items-center text-text-muted text-xs font-medium space-x-3">
                        <span>{author}</span>
                        <span>•</span>
                        <span>{date}</span>
                    </div>
                </div>
            </Link>
        );
    }

    // Default Grid
    return (
        <Link href={href} className={cn("group flex flex-col h-full", className)}>
            {imageUrl && (
                <div className="aspect-[3/2] overflow-hidden rounded-md mb-4 bg-surface-2 relative">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} className="text-primary" />
                    </div>
                </div>
            )}
            <div className="flex flex-col flex-1">
                <span className="text-accent font-sans font-bold text-xs tracking-wider uppercase mb-2">
                    {category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary mb-2 leading-tight group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="font-sans text-text-secondary text-sm mb-4 line-clamp-3">
                    {excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between text-xs text-text-muted">
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
            </div>
        </Link>
    );
}
