import { Card } from "@/components/ui/card";
import { Server, Database, Cog, LineChart } from "lucide-react";

const microservices = [
  {
    name: "Donor Registry Service",
    icon: Server,
    description: "Manages donor profiles, medical history, and availability status",
    tech: ["Cloud Functions", "Firestore", "Cloud Storage"],
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Recipient Waitlist Service",
    icon: Database,
    description: "Handles recipient registration, priority scoring, and waitlist management",
    tech: ["App Engine", "Cloud SQL", "Pub/Sub"],
    gradient: "from-accent/10 to-accent/5",
  },
  {
    name: "Matchmaking & Notifications",
    icon: Cog,
    description: "AI-powered matching engine with real-time notification system",
    tech: ["Vertex AI", "Matching Engine", "Cloud Messaging"],
    gradient: "from-success/10 to-success/5",
  },
];

export const Architecture = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <LineChart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Microservices Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">System Components</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three core microservices working together to deliver life-saving matches
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {microservices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-elegant-xl transition-smooth group"
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
