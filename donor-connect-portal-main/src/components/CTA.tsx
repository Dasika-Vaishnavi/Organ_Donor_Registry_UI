import { Button } from "@/components/ui/button";
import { Heart, Users, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
            <Heart className="w-4 h-4 text-white fill-white" />
            <span className="text-sm font-medium text-white">Make a Difference Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            One Registration Can Save Multiple Lives
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of donors and recipients using our AI-powered platform to make organ donation more efficient and accessible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant-xl hover:scale-105 transition-smooth group"
            >
              <Users className="mr-2 w-5 h-5" />
              Register as Donor
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-smooth"
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 text-white/80 text-sm">
            Trusted by medical institutions across the country
          </div>
        </div>
      </div>
    </section>
  );
};
