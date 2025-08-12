import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PlansSection } from "@/components/plans-section"
import { EnvironmentSection } from "@/components/environment-section"
import { GamesSection } from "@/components/games-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { InteractiveFeatures } from "@/components/interactive-features"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <EnvironmentSection />
      <GamesSection />
      <EventsSection />
      <ContactSection />
      <ScrollToTop />
      <InteractiveFeatures />
    </main>
  )
}
