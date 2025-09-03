"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WhyUsSection } from "@/components/why-us-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import PhotoCarousel from "@/components/photo-carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <PhotoCarousel />
      <CapabilitiesSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
