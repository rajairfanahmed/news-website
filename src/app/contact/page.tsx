import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <Section>
            <Container className="max-w-xl">
                <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" className="w-full p-2 border border-border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" className="w-full p-2 border border-border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea className="w-full p-2 border border-border rounded-md h-32" />
                    </div>
                    <Button>Send Message</Button>
                </form>
            </Container>
        </Section>
    );
}
