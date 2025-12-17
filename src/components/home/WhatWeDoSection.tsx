import { Heart, Users, Megaphone, HandHeart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Heart,
    title: "Rescue Support",
    description:
      "We coordinate and support rescue operations for injured, abandoned, and distressed community animals, ensuring they receive immediate care and attention.",
  },
  {
    icon: Users,
    title: "Community Feeding",
    description:
      "Our volunteers regularly feed community animals across neighborhoods, ensuring no animal goes hungry and building trust within local communities.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description:
      "We educate communities about animal rights, responsible pet ownership, and the importance of compassion towards all living beings.",
  },
  {
    icon: HandHeart,
    title: "Medical Assistance",
    description:
      "We connect injured animals with veterinary care, organize vaccination drives, and provide essential medical support to those in need.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Our Mission"
          title="What We Do"
          description="Through dedicated volunteers and community partnerships, we work tirelessly to improve the lives of community animals and foster a culture of compassion."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
