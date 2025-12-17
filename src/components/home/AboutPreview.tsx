import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-sage-light overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary/30">🐕</span>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-terracotta-light overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <span className="font-display text-5xl text-accent/30">🐈</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-2xl bg-cream-dark overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-secondary/20 flex items-center justify-center">
                  <span className="font-display text-5xl text-foreground/20">🤝</span>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-sage-light overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary/30">❤️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <SectionHeading
              subtitle="About PAL Foundation"
              title="Pure Animal Lovers Working for Community Animals"
              centered={false}
            />

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">PAL</strong> stands for{" "}
                <strong className="text-primary">Pure Animal Lovers</strong> — 
                a collective of compassionate individuals united by our love for 
                community animals. We believe every stray, abandoned, and street 
                animal deserves dignity, care, and protection.
              </p>
              <p>
                Our foundation works at the grassroots level to rescue, feed, and 
                rehabilitate community animals while spreading awareness about 
                animal welfare. We are building a family of volunteers and 
                supporters who share our vision of a more compassionate world.
              </p>
              <p>
                Through small acts of kindness and collective effort, we aim to 
                create lasting change in how our society treats its most vulnerable 
                creatures.
              </p>
            </div>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 group">
                Read Our Full Story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
