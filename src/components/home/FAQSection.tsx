"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "How do I access premium articles?",
        answer: "Premium articles are available to subscribers. You can view 3 free articles per month before subscribing.",
    },
    {
        question: "Can I share my subscription?",
        answer: "Yes, our Family Plan allows up to 4 accounts under one subscription.",
    },
    {
        question: "Do you have a mobile app?",
        answer: "Yes, The Digital Chronicle app is available on iOS and Android for seamless reading on the go.",
    },
    {
        question: "What is your cancellation policy?",
        answer: "You can cancel anytime from your account settings. Your access will continue until the end of the billing period.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section>
            <Container className="max-w-3xl">
                <h2 className="font-serif text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="border border-border rounded-lg overflow-hidden">
                            <button
                                className="w-full flex items-center justify-between p-5 text-left bg-background hover:bg-surface-1 transition-colors"
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <span className="font-medium text-lg text-text-primary">{faq.question}</span>
                                {index === openIndex ? (
                                    <Minus className="text-primary flex-shrink-0 ml-4" size={20} />
                                ) : (
                                    <Plus className="text-primary flex-shrink-0 ml-4" size={20} />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "bg-surface-1 px-5 text-text-secondary transition-all duration-300 ease-in-out overflow-hidden",
                                    index === openIndex ? "max-h-40 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                                )}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
