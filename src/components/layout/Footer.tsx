import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Footer() {
    return (
        <footer className="bg-foreground text-background pt-24 pb-8 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div className="md:col-span-2">
                        <h3 className="font-syne font-bold text-3xl mb-8">Stay Ahead <br /> of the Curve.</h3>
                        <form className="flex gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-b border-background/20 text-background placeholder:text-background/40 py-2 flex-grow focus:outline-none focus:border-accent font-manrope font-bold uppercase tracking-wider"
                            />
                            <Button variant="ghost" className="text-accent hover:text-white uppercase font-bold tracking-widest text-xs hover:bg-transparent p-0">
                                Submit
                            </Button>
                        </form>
                    </div>

                    <div>
                        <ul className="space-y-4 font-manrope text-sm font-medium opacity-60">
                            <li><Link href="/about" className="hover:text-accent transition-colors hover-trigger">About</Link></li>
                            <li><Link href="/careers" className="hover:text-accent transition-colors hover-trigger">Careers</Link></li>
                            <li><Link href="/legal" className="hover:text-accent transition-colors hover-trigger">Legal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-4 font-manrope text-sm font-medium opacity-60">
                            <li><Link href="/instagram" className="hover:text-accent transition-colors hover-trigger">Instagram</Link></li>
                            <li><Link href="/twitter" className="hover:text-accent transition-colors hover-trigger">Twitter / X</Link></li>
                            <li><Link href="/linkedin" className="hover:text-accent transition-colors hover-trigger">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Massive Footer Type */}
                <div className="border-t border-background/10 pt-8">
                    <h1 className="font-syne font-black text-[12vw] leading-[0.8] tracking-tighter text-center select-none text-transparent stroke-text hover:text-accent transition-colors duration-700 cursor-default">
                        CHRONICLE.
                    </h1>
                    <div className="flex justify-between mt-8 text-[10px] font-manrope uppercase tracking-widest opacity-40">
                        <span>© 2026 Digital Chronicle</span>
                        <span>Designed by Antigravity</span>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    );
}
