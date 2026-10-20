import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "dark";
}

export function Section({
    className,
    variant = "default",
    children,
    ...props
}: SectionProps) {
    const variants = {
        default: "bg-background py-16 md:py-24",
        muted: "bg-surface-1 py-16 md:py-24",
        dark: "bg-primary text-white py-16 md:py-24",
    };

    return (
        <section className={cn(variants[variant], className)} {...props}>
            {children}
        </section>
    );
}
