import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Package,
  HandHeart,
  Megaphone,
  ArrowRight,
  Utensils,
  Stethoscope,
  Users,
} from "lucide-react";

const supportWays = [
  {
    icon: Utensils,
    title: "Provide Animal Food",
    description:
      "Donate dog food, cat food, or contribute funds specifically for feeding programs. Regular nutrition is essential for the health of community animals.",
    action: "Donate Food",
  },
  {
    icon: Stethoscope,
    title: "Medical Aid & Supplies",
    description:
      "Help us provide veterinary care, vaccinations, and medical supplies to injured or sick animals. Your support can save lives.",
    action: "Support Medical Care",
  },
  {
    icon: Users,
    title: "Volunteer Your Time",
    description:
      "Join our volunteer network to help with feeding rounds, rescue coordination, awareness campaigns, and community outreach.",
    action: "Become a Volunteer",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    description:
      "Share our posts, talk to your community, educate others about animal welfare. Awareness is the first step toward change.",
    action: "Share Our Mission",
  },
];

const partnerOptions = [
  {
    title: "Individual Supporter",
    description: "Regular contributions to support our ongoing programs",
    features: [
      "Monthly or one-time contributions",
      "Updates on how your support helps",
      "Recognition on our supporter wall",
    ],
  },
  {
    title: "Corporate Partner",
    description: "CSR partnerships for businesses and organizations",
    features: [
      "Sponsor specific programs or campaigns",
      "Employee volunteer opportunities",
      "Brand visibility and CSR reporting",
    ],
  },
  {
    title: "Community Partner",
    description: "Local groups and RWAs working with us",
    features: [
      "Coordinate local feeding programs",
      "Host awareness sessions",
      "Joint community initiatives",
    ],
  },
];

const Support = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary">
              Support Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Help Us Help <span className="text-primary">Them</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Even the smallest contribution can make a difference in the life 
              of a community animal. There are many ways to support our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="How You Can Help"
            title="Ways to Support Our Mission"
            description="Choose how you'd like to contribute to the welfare of community animals."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {supportWays.map((way, index) => (
              <div
                key={way.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <way.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                <Button
                  variant="outline"
                  className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                >
                  {way.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-accent-foreground/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-accent-foreground leading-relaxed mb-6 italic">
              "Every act of compassion toward an animal, no matter how small, 
              creates ripples of kindness that extend far beyond what we can see."
            </blockquote>
            <p className="text-accent-foreground/70">
              — The PAL Foundation Team
            </p>
          </div>
        </div>
      </section>

      {/* Partner Options */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Partnership Opportunities"
            title="Become a PAL Partner"
            description="Join us as a long-term partner and help create sustainable change for community animals."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerOptions.map((option, index) => (
              <div
                key={option.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 flex flex-col"
              >
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {option.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="w-full rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary-foreground/70">
                  Direct Support
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-primary-foreground">
                  Make a Donation
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  Your financial contribution directly supports rescue operations, 
                  medical care, feeding programs, and awareness campaigns. Every 
                  rupee makes a difference.
                </p>
                <p className="text-sm text-primary-foreground/60 mb-6">
                  PAL Welfare Foundation is a registered non-profit. All donations 
                  are used exclusively for animal welfare activities.
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
                <h3 className="font-display text-xl font-semibold mb-6 text-primary-foreground">
                  Donation Options
                </h3>
                <div className="space-y-4">
                  <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl text-lg font-medium">
                    <HandHeart className="mr-2 w-5 h-5" />
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-14 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl text-lg font-medium"
                  >
                    <Package className="mr-2 w-5 h-5" />
                    Sponsor Food Supplies
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/50 mt-4 text-center">
                  Contact us for bank transfer details or other payment options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">
              Our Commitment to Transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe in complete transparency with our supporters. All 
              contributions are tracked and used exclusively for animal welfare 
              activities. We regularly share updates about our work, the animals 
              we've helped, and how funds are utilized. Your trust is our 
              responsibility.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
