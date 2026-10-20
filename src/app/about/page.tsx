import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
    return (
        <Section>
            <Container>
                <h1 className="text-4xl font-serif font-bold mb-6">About The Digital Chronicle</h1>
                <p className="text-lg text-text-secondary max-w-2xl">
                    We are dedicated to truthful, in-depth journalism. Our mission is to inform, educate, and inspire our readers through rigorous reporting and compelling storytelling.
                </p>
            </Container>
        </Section>
    );
}
