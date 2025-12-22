import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { GenealogySection } from "@/components/genealogy-section"
import { LandmarksSection } from "@/components/landmarks-section"
import { LegendsSection } from "@/components/legends-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <GenealogySection />
      <LandmarksSection />
      <LegendsSection />
      <FooterSection />
    </main>
  )
}
