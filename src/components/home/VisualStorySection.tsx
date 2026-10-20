import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function VisualStorySection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0 opacity-60">
                <img
                    src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600&auto=format&fit=crop&q=80"
                    alt="Visual Story"
                    className="w-full h-full object-cover scale-110 animate-reveal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <Container className="relative z-10 text-center mix-blend-difference">
                <h2 className="font-syne font-black text-[10vw] leading-none text-white opacity-90 mb-8">
                    DYSTOPIA
                </h2>
                <p className="font-manrope text-xl text-white/80 max-w-2xl mx-auto mb-10">
                    A photographic journey into the abandoned mega-structures of the 21st century.
                </p>
                <Button className="bg-white text-black hover:bg-accent rounded-full px-8 py-6 font-syne font-bold font-lg hover-trigger border-none">
                    Enter Gallery
                </Button>
            </Container>
        </section>
    );
}
