import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinCTA = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-foreground/5" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary-foreground/70">
            Be Part of the Change
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary-foreground leading-tight">
            Join Our Family of{" "}
            <span className="text-accent">Animal Lovers</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Apply and join forces in our passionate mission by becoming a member 
            of our animal welfare family today. Your compassion can make a real 
            difference in the lives of community animals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium group"
              >
                Apply as Volunteer
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/support">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 h-14 text-base font-medium"
              >
                Other Ways to Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
