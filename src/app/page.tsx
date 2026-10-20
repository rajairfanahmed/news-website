import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { CategoryHighlights } from "@/components/home/CategoryHighlights";
import { EditorialPicks } from "@/components/home/EditorialPicks";
import { VisualStorySection } from "@/components/home/VisualStorySection";
import { SocialProof } from "@/components/home/SocialProof";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <CategoryHighlights />
      <EditorialPicks />
      <VisualStorySection />
      <SocialProof />
      <FAQSection />
    </>
  );
}
