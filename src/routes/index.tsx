import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Home/hero";
import { StatsSection } from "@/components/Home/stats-section";
import { FeaturesSection } from "@/components/Home/feature-section";
import { ValueProps } from "@/components/Home/value-props";
import { CTASection } from "@/components/Home/cta-section";
import { Footer } from "@/components/Footer/Footer";
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
