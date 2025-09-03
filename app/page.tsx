"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WhyUsSection } from "@/components/why-us-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { JournalsSection } from "@/components/journals-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <CapabilitiesSection />
      <JournalsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
