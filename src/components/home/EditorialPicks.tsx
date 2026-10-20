import { Container } from "@/components/ui/Container";

const PICKS = [
    { title: "The Death of Privacy", author: "Dr. A. Vance", role: "Editor" },
    { title: "Mars Colonization: A Scam?", author: "Elon M.", role: "Visionary" },
    { title: "Why We Scroll", author: "Sarah J.", role: "Psychologist" }
];

export function EditorialPicks() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <h2 className="font-syne font-black text-5xl md:text-6xl text-foreground leading-none mb-6">
                            EDITORS<br /><span className="text-accent">CHOICE</span>
                        </h2>
                        <p className="font-manrope text-muted-foreground">
                            Curated perspectives from the sharpest minds in the industry. No filter.
                        </p>
                    </div>

                    <div className="lg:col-span-7 flex flex-col divide-y divide-foreground/10">
                        {PICKS.map((pick, i) => (
                            <div key={i} className="py-8 group hover-trigger cursor-pointer">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-syne font-bold text-3xl md:text-4xl text-foreground group-hover:text-accent transition-colors">
                                        {pick.title}
                                    </h3>
                                    <span className="font-manrope text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                                        0{i + 1}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-foreground/10" />
                                    <span className="font-manrope font-bold text-sm text-foreground">{pick.author}</span>
                                    <span className="font-manrope text-xs text-muted-foreground">// {pick.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
