import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Heart, Target, Eye, Users, Sparkles, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every animal with love and empathy, recognizing their inherent worth and right to live free from suffering.",
  },
  {
    icon: Shield,
    title: "Responsibility",
    description:
      "We take ownership of our mission, ensuring accountability in every rescue, every campaign, and every interaction.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "We believe lasting change comes from within communities. We empower local volunteers to become advocates for animal welfare.",
  },
  {
    icon: Eye,
    title: "Awareness",
    description:
      "Education is our tool for transformation. We spread knowledge about animal rights and responsible coexistence.",
  },
  {
    icon: Target,
    title: "Action-Oriented",
    description:
      "We don't just talk about change—we create it. Every day, our volunteers are on the ground making a tangible difference.",
  },
  {
    icon: Sparkles,
    title: "Hope",
    description:
      "We believe in the power of collective goodness. Every small act of kindness creates ripples of positive change.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              We Are <span className="text-primary">PAL</span> Foundation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pure Animal Lovers united by a single mission: to create a world 
              where every community animal is treated with dignity and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* What PAL Means */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary">
                Our Identity
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                What Does PAL Mean?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground text-2xl font-display">PAL</strong> is 
                  more than just a name—it represents who we are:{" "}
                  <strong className="text-primary">Pure Animal Lovers</strong>.
                </p>
                <p>
                  We chose this name because it reflects our core belief: that 
                  loving animals purely, without condition or expectation, is 
                  the foundation of meaningful change. Like a true "pal" or 
                  friend, we stand by community animals through every challenge.
                </p>
                <p>
                  Our foundation was born from the passion of individuals who 
                  refused to look away from the suffering of street animals. 
                  What started as small acts of feeding and rescue has grown 
                  into a movement of compassion that continues to expand every day.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="font-display text-8xl text-primary/30">P</span>
              </div>
              <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="font-display text-8xl text-accent/30">A</span>
              </div>
              <div className="aspect-square rounded-2xl bg-sage-light flex items-center justify-center col-span-2">
                <span className="font-display text-8xl text-primary/30">L</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              subtitle="Our Philosophy"
              title="Why We Work for Community Animals"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Community animals—the stray dogs, street cats, and other animals 
                that share our neighborhoods—are often invisible to society. They 
                face hunger, illness, and mistreatment daily. At PAL Welfare 
                Foundation, we believe these animals are not problems to be 
                ignored but lives to be protected.
              </p>
              <p>
                Our philosophy is simple: every creature deserves compassion. 
                We don't discriminate based on breed, appearance, or perceived 
                value. A injured street dog deserves the same care and attention 
                as any pet. This belief drives everything we do.
              </p>
              <p>
                We also believe that animal welfare is community welfare. When 
                we care for the animals around us, we build stronger, more 
                compassionate neighborhoods. Children learn empathy, adults 
                find purpose, and communities become more humane places to live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Aims */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Mission"
            title="What We Aim to Achieve"
            description="Through dedicated action and community engagement, we work toward these fundamental goals."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Save & Protect
              </h3>
              <p className="text-muted-foreground">
                Rescue injured and abandoned animals, provide medical care, 
                and ensure they find safe environments to thrive.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Spread Awareness
              </h3>
              <p className="text-muted-foreground">
                Educate communities about animal rights, responsible behavior, 
                and the importance of compassion toward all living beings.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                Build Community
              </h3>
              <p className="text-muted-foreground">
                Create a network of volunteers and supporters who work together 
                to make animal welfare a shared responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
              >
                <value.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2 text-primary-foreground">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every Contribution Matters */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary">
              Your Role
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              Every Small Contribution Matters
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                You don't need to be wealthy, influential, or have special 
                skills to make a difference. Sometimes, the smallest acts 
                create the biggest impact.
              </p>
              <p>
                Leaving water outside your home for thirsty strays. Feeding 
                the community dog that lives near your workplace. Speaking up 
                when you witness cruelty. Sharing our posts to spread awareness. 
                Every action, no matter how small, contributes to a larger wave 
                of compassion.
              </p>
              <p className="font-display text-xl text-foreground italic">
                "The greatness of a community is most accurately measured by 
                the compassionate actions of its members."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
