import { Database, Brain, Bell, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Database,
    title: "Data Intake",
    description: "Secure collection of donor and recipient information through Cloud Functions and Firestore",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "AI Matching",
    description: "Vertex AI analyzes medical and demographic data to find optimal matches using advanced embeddings",
    color: "text-accent",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Real-time alerts sent to medical facilities and recipients when matches are found",
    color: "text-success",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description: "Continuous tracking and analytics through BigQuery and Cloud Monitoring",
    color: "text-primary",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our cloud-based system leverages Google Cloud Platform to ensure secure, scalable, and intelligent organ matching
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant-xl transition-smooth hover:-translate-y-1 border-border/50"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/10 to-primary/5' : 'from-accent/10 to-accent/5'} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
