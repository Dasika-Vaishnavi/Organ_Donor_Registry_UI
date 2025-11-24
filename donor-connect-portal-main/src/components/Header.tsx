import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shadow-elegant">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="font-semibold text-lg hidden sm:inline-block">LifeLink Registry</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#architecture" className="text-sm font-medium hover:text-primary transition-colors">
              Architecture
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="gradient-hero text-white border-0 hover:scale-105 transition-smooth">
              Register
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-border">
            <a href="#how-it-works" className="block text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#architecture" className="block text-sm font-medium hover:text-primary transition-colors">
              Architecture
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
