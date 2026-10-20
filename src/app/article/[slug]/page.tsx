import { ReadingProgress } from "@/components/article/ReadingProgress";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Share2, Bookmark } from "lucide-react";

const ARTICLES: Record<string, {
    title: string;
    category: string;
    author: string;
    date: string;
    image: string;
    content: string;
}> = {
    "future-of-digital-journalism": {
        title: "The Future of Digital Journalism is Here",
        category: "Technology",
        author: "Sarah Jenkins",
        date: "Oct 24, 2026",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000",
        content: `
      <p>The landscape of media is shifting beneath our feet. As artificial intelligence becomes ubiquitous, the role of the human journalist is evolving. We are entering an era where trust, voice, and perspective are the currencies of value.</p>
      
      <h3>The Trust Deficit</h3>
      <p>In a world flooded with synthetic content, verifying truth is the ultimate service. Readers are no longer looking for just information; they are seeking verification, context, and wisdom.</p>
      
      <h3>Immersive Storytelling</h3>
      <p>Text is no longer enough. The modern story is a multi-sensory experience. It involves data visualization, audio soundscapes, and interactive elements that allow the reader to explore the narrative.</p>
      
      <h3>Conclusion</h3>
      <p>The future is bright for those who adapt. But it requires a steadfast commitment to the old values: accuracy, fairness, and independence.</p>
    `
    },
    "future": {
        title: "The Architecture of Tomorrow",
        category: "Vision",
        author: "Elena Rostova",
        date: "Oct 25, 2026",
        image: "https://images.unsplash.com/photo-1518005020951-ecc8e1209b12?auto=format&fit=crop&q=80&w=2000",
        content: `
      <p>Tomorrow's cities are being written in code as much as concrete. Urban spaces now incorporate responsive kinetic architecture that adapts dynamically to ambient climate patterns.</p>
      <h3>Decentralized Infrastructure</h3>
      <p>Smart grids and decentralized water reclamation hubs are shifting the civic paradigm from centralized dependence to distributed resilience.</p>
    `
    },
    "1": {
        title: "Synthetic Dreams: Generative Realism",
        category: "Tech",
        author: "Marcus Chen",
        date: "Oct 22, 2026",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60",
        content: `
      <p>Neural diffusion networks have crossed the threshold into hyper-realistic real-time simulation. The boundaries between computational imagination and optical reality have dissolved.</p>
    `
    },
    "2": {
        title: "Urban Decay & Cultural Resurgence",
        category: "Culture",
        author: "Amara Diallo",
        date: "Oct 20, 2026",
        image: "https://images.unsplash.com/photo-1518005020951-ecc8e1209b12?w=800&auto=format&fit=crop&q=60",
        content: `
      <p>Inside abandoned brutalist monoliths across Europe, an underground counter-culture movement is redefining social spaces and collective art installations.</p>
    `
    },
    "3": {
        title: "The Sound of Total Silence",
        category: "Opinion",
        author: "Julian Vance",
        date: "Oct 18, 2026",
        image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&auto=format&fit=crop&q=60",
        content: `
      <p>In a hyper-stimulated notification economy, silence has transformed into the single rarest luxury good on planet Earth.</p>
    `
    },
    "4": {
        title: "Neon Nights: Tokyo Nocturnes",
        category: "Photo",
        author: "Kenji Sato",
        date: "Oct 15, 2026",
        image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&auto=format&fit=crop&q=60",
        content: `
      <p>A cinematic nocturnal visual essay capturing the iridescent reflections of Shibuya and Shinjuku during midnight downpours.</p>
    `
    }
};

export function generateStaticParams() {
    return [
        { slug: "future" },
        { slug: "1" },
        { slug: "2" },
        { slug: "3" },
        { slug: "4" },
        { slug: "future-of-digital-journalism" },
        { slug: "demo" }
    ];
}

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = ARTICLES[slug] || {
        title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        category: "Featured Editorial",
        author: "Dispatch Staff",
        date: "Oct 2026",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000",
        content: `
          <p>This is a featured editorial for <strong>${slug}</strong>.</p>
          <p>Exploring the intersections of culture, design, and high-velocity reporting.</p>
        `
    };

    return <ArticleView article={article} />;
}

function ArticleView({ article }: { article: any }) {
    return (
        <>
            <ReadingProgress />
            <article className="min-h-screen pb-20">
                <div className="relative h-[60vh] min-h-[500px] w-full mb-12">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <Container className="absolute bottom-0 left-0 right-0 pb-12">
                        <span className="bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                            {article.category}
                        </span>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-text-primary leading-[1.1] mb-6 max-w-4xl drop-shadow-sm">
                            {article.title}
                        </h1>
                        <div className="flex items-center space-x-6 text-text-primary font-medium">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                                <span>{article.author}</span>
                            </div>
                            <span>{article.date}</span>
                        </div>
                    </Container>
                </div>

                <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="hidden lg:block lg:col-span-2 sticky top-24 h-fit">
                        <div className="flex flex-col space-y-4">
                            <Button variant="ghost" size="icon" className="rounded-full bg-surface-1 hover:bg-surface-2 transition-colors">
                                <Share2 size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full bg-surface-1 hover:bg-surface-2 transition-colors">
                                <Bookmark size={20} />
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-8">
                        <div
                            className="prose-content text-lg md:text-xl text-text-secondary leading-relaxed font-serif"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-border">
                            <h4 className="font-bold text-lg mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Journalism", "Tech", "Future", "Culture"].map(tag => (
                                    <span key={tag} className="bg-surface-1 px-3 py-1 rounded-full text-sm hover:bg-surface-2 cursor-pointer transition-colors">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
        </>
    );
}
