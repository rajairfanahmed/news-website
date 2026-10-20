import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function TermsPage() {
    return (
        <Section>
            <Container className="prose-content">
                <h1 className="text-4xl font-serif font-bold mb-6">Terms of Service</h1>
                <p>By using The Digital Chronicle, you agree to these terms.</p>
                <p>Last updated: 2026</p>
            </Container>
        </Section>
    );
}
