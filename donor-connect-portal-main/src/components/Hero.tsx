import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-subtle">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-elegant animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium">AI-Powered Organ Matching</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Save Lives Through
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Intelligent Matching
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            A cloud-based organ donor registry powered by Google Cloud Platform and Vertex AI, 
            connecting donors with recipients through advanced machine learning algorithms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button size="lg" className="gradient-hero text-white border-0 shadow-elegant hover:shadow-elegant-xl hover:scale-105 transition-smooth group">
              Register as Donor
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-card/80 backdrop-blur-sm hover:bg-card shadow-elegant hover:shadow-elegant-xl transition-smooth">
              Join Waitlist
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Registered Donors</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">1,200+</div>
              <div className="text-sm text-muted-foreground">Successful Matches</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-success">98%</div>
              <div className="text-sm text-muted-foreground">Match Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
