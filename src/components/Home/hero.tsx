import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/abstract-business-collaboration-handshake-professi.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-8 text-balance">
            The complete platform for business collaboration.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Your network's toolkit to stop configuring and start collaborating.
            Securely connect, communicate, and coordinate with business partners
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
