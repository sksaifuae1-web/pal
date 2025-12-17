import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Megaphone, Heart, Shield, Users, BookOpen, AlertTriangle } from "lucide-react";

const campaigns = [
  {
    icon: Heart,
    title: "Rescue Awareness",
    description:
      "We spread information about how to help injured or distressed animals, emergency contacts, and proper rescue protocols. Knowledge saves lives.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Community Feeding Programs",
    description:
      "Regular feeding drives ensure community animals don't go hungry. We organize and coordinate feeding schedules across different localities.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Animal Protection Education",
    description:
      "We educate communities about laws protecting animals, how to report cruelty, and the legal rights of community animals.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "School & College Outreach",
    description:
      "Our volunteers visit educational institutions to teach young minds about compassion, responsible behavior towards animals, and the importance of coexistence.",
    color: "accent",
  },
  {
    icon: AlertTriangle,
    title: "Anti-Cruelty Campaigns",
    description:
      "We actively work to raise awareness about animal cruelty, its legal consequences, and how bystanders can intervene safely.",
    color: "primary",
  },
  {
    icon: Megaphone,
    title: "Social Media Advocacy",
    description:
      "Through our social channels, we share stories, tips, and information that helps spread the message of compassion to a wider audience.",
    color: "accent",
  },
];

const awarenessTopics = [
  {
    title: "Why Community Animals Matter",
    content:
      "Community animals are an integral part of our urban ecosystem. They help control rodent populations, provide companionship to many, and teach us the value of coexistence. When we care for them, we create safer, more compassionate neighborhoods.",
  },
  {
    title: "The Reality of Street Life",
    content:
      "Street animals face hunger, disease, accidents, and sometimes cruelty daily. Many are abandoned pets who never learned to survive on their own. Understanding their struggles is the first step toward helping them.",
  },
  {
    title: "What You Can Do",
    content:
      "Simple actions like keeping water outside your home, not honking at animals crossing roads, reporting animal abuse, and educating others can make a significant difference. Change starts with small, consistent actions.",
  },
];

const Campaigns = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary">
              Our Campaigns
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Raising <span className="text-primary">Awareness</span> for Change
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We raise awareness for community animals and encourage responsible 
              action through our campaigns. Education is the foundation of 
              lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="What We Campaign For"
            title="Our Focus Areas"
            description="Through targeted campaigns, we address the most pressing issues facing community animals."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                    campaign.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary/20"
                      : "bg-accent/10 group-hover:bg-accent/20"
                  }`}
                >
                  <campaign.icon
                    className={`w-7 h-7 ${
                      campaign.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {campaign.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {campaign.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Content */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Understanding the Issue"
            title="Why This Matters"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {awarenessTopics.map((topic, index) => (
              <div
                key={topic.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50"
              >
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {topic.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Posts Placeholder */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="From Our Social Media"
            title="Recent Updates"
            description="Follow our journey and stay updated with our latest activities."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-2xl bg-gradient-to-br from-sage-light to-cream overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">
                    {["🐕", "🐈", "❤️", "🙏", "🍲", "💉", "🏥", "🤗"][item - 1]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Follow us on Instagram for more updates
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Placeholder */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-4 text-primary-foreground/70">
              Coming Soon
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-primary-foreground">
              Blog & Stories
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We're working on a dedicated space to share stories of rescue, 
              recovery, and hope. Soon, you'll be able to read about the 
              animals we've helped and the volunteers making it happen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
