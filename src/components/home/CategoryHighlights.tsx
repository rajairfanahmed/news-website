import Link from "next/link";
import { Container } from "@/components/ui/Container";

const CATEGORIES = [
    "Finance", "Politics", "Culture", "Design", "Future", "Space"
];

export function CategoryHighlights() {
    return (
        <section className="py-24 border-t border-foreground/5 bg-foreground text-background">
            <Container>
                <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat}
                            href={`/categories/${cat.toLowerCase()}`}
                            className="font-syne font-black text-4xl md:text-7xl uppercase stroke-text-white hover:text-accent hover:stroke-text hover:text-shadow-glow hover:border-0 transition-all duration-300 hover-trigger"
                            style={{ WebkitTextStroke: "1px currentColor" }}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
