import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-animals.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community animals being cared for"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 text-primary fill-primary/50" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Pure Animal Lovers
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Every Animal Deserves{" "}
            <span className="text-primary">Love & Care</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-slide-up animation-delay-100">
            PAL Welfare Foundation is dedicated to helping community animals 
            and building a compassionate family through love, awareness, and 
            collective action. Together, we create a world where no animal 
            is left behind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            <Link to="/volunteer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium group"
              >
                Become a Volunteer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/30 rounded-full px-8 h-14 text-base font-medium"
              >
                Learn About Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in animation-delay-300">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                500+
              </p>
              <p className="text-sm text-primary-foreground/70">Animals Helped</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                100+
              </p>
              <p className="text-sm text-primary-foreground/70">Active Volunteers</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                50+
              </p>
              <p className="text-sm text-primary-foreground/70">Campaigns Run</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
