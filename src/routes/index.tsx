import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { ValueProps } from "@/components/value-props";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import "../App.css";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <StatsSection />
          <FeaturesSection />
          <ValueProps />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
