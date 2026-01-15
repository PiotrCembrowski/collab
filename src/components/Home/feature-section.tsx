import { Users } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Users className="h-4 w-4" />
              <span>Collaboration</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-6 text-balance">
              Faster coordination. More innovation.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The platform for seamless partnerships. Let your teams focus on
              delivering value instead of managing complexity with automated
              workflows, real-time communication, and integrated collaboration
              tools.
            </p>
          </div>
          <div className="relative aspect-video bg-accent rounded-sm overflow-hidden">
            <img
              src="/business-team-collaboration-workspace-dashboard-in.jpg"
              alt="Collaboration workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
