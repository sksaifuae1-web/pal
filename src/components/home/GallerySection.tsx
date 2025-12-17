import SectionHeading from "@/components/ui/SectionHeading";

const GallerySection = () => {
  const galleryItems = [
    { emoji: "🐕", label: "Rescued Dogs" },
    { emoji: "🐈", label: "Community Cats" },
    { emoji: "🍲", label: "Feeding Drive" },
    { emoji: "💉", label: "Vaccination Camp" },
    { emoji: "🏥", label: "Medical Aid" },
    { emoji: "🤗", label: "Volunteer Day" },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Our Impact"
          title="Glimpses of Our Work"
          description="Every day, our volunteers make a difference in the lives of community animals."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl overflow-hidden relative group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-sage-light to-cream flex items-center justify-center">
                <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
              </div>
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-semibold text-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
