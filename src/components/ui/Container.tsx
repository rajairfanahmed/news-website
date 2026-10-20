import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

export function Container({
    as: Component = "div",
    className,
    children,
    ...props
}: ContainerProps) {
    return (
        <Component
            className={cn("w-full max-w-[1440px] mx-auto px-4 md:px-6", className)}
            {...props}
        >
            {children}
        </Component>
    );
}
