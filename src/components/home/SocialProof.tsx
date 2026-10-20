import { Container } from "@/components/ui/Container";

export function SocialProof() {
    return (
        <section className="py-24 bg-background border-y border-foreground/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-8 border border-foreground/5 hover:border-accent/50 transition-colors group">
                            <p className="font-syne text-2xl font-bold mb-6 text-foreground">
                                "Radically different. Finally, a platform that respects the reader's intelligence."
                            </p>
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <div className="w-10 h-10 bg-accent rounded-full" />
                                <div>
                                    <span className="block font-manrope font-bold text-sm">Alex R.</span>
                                    <span className="block font-manrope text-xs text-muted-foreground">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export function FAQSection() {
    return (
        <section className="py-24 bg-foreground text-background">
            <Container>
                <h2 className="font-syne font-black text-6xl mb-16 text-center text-transparent stroke-text-white" style={{ WebkitTextStroke: "1px white" }}>Queries.</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {["Subscription Model", "Privacy Protocol", "Editorial Standards"].map((q) => (
                        <div key={q} className="border-b border-background/20 py-6 flex justify-between items-center hover-trigger cursor-pointer group">
                            <span className="font-syne font-bold text-2xl group-hover:text-accent transition-colors">{q}</span>
                            <span className="text-xl">+</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
