import { Card } from "@/components/ui/card";

const values = [
  {
    title: "Unified Communication",
    description:
      "Connect all stakeholders in one secure platform with real-time messaging, video conferencing, and document sharing.",
    image: "/business-handshake-agreement-partnership.jpg",
  },
  {
    title: "Smart Workflows",
    description:
      "Automate routine tasks and approvals to streamline cross-organizational processes and reduce friction.",
    image: "/digital-workflow-automation-business-process.jpg",
  },
  {
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with granular permissions, audit logs, and compliance tools to protect sensitive data.",
    image: "/data-security-protection-compliance-lock.jpg",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-foreground mb-4 text-balance">
            A comprehensive approach for collaborative success
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-background border-border"
            >
              <div className="aspect-[3/2] bg-accent overflow-hidden">
                <img
                  src={value.image || "/placeholder.svg"}
                  alt={value.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
