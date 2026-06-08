import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { CTASection } from "@/components/site/CTASection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Out of Box — Creative Studio & Digital Solutions" },
      { name: "description", content: "A multidisciplinary creative studio for branding, design, film and digital experiences. Think Outside The Box." },
      { property: "og:title", content: "Out of Box — Creative Studio" },
      { property: "og:description", content: "Branding, graphic design, film, social media and web — crafted for brands that want to stand out." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
