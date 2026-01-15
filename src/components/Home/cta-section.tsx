import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
            Ready to transform your partnerships?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Join thousands of organizations already collaborating more
            effectively.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
