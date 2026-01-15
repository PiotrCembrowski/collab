import { Card } from "@/components/ui/card";

const stats = [
  {
    metric: "15 hours",
    description: "saved on coordination per week.",
    company: "TECHCORP",
  },
  {
    metric: "85% faster",
    description: "partnership onboarding.",
    company: "INNOVATE",
  },
  {
    metric: "250% increase",
    description: "in cross-org projects.",
    company: "NEXUS",
  },
  {
    metric: "4x faster",
    description: "decision making process.",
    company: "UNITED",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 bg-background border-border">
              <div className="space-y-4">
                <div className="text-3xl font-medium tracking-tight text-foreground">
                  {stat.metric}
                </div>
                <div className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </div>
                <div className="text-sm font-mono font-medium tracking-wider text-foreground">
                  {stat.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
