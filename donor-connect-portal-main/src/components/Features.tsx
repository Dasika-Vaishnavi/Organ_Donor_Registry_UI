import { Shield, Zap, Globe, Lock, Cloud, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "IAM-based access control and HIPAA-compliant data handling",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Instant data capture and matching with Cloud Functions",
  },
  {
    icon: Cloud,
    title: "AI-Powered",
    description: "Vertex AI embeddings for intelligent similarity matching",
  },
  {
    icon: Globe,
    title: "Scalable Architecture",
    description: "Built on GKE and App Engine for unlimited growth",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "End-to-end encryption and secure storage buckets",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "BigQuery integration for comprehensive reporting",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Built on Google Cloud</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure ensuring reliability, security, and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
