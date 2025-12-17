import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Being part of PAL has given me a sense of purpose. Every rescued animal, every life saved, reminds me why compassion matters.",
    author: "Priya Sharma",
    role: "Volunteer since 2022",
  },
  {
    quote:
      "The dedication of PAL volunteers is inspiring. They truly embody the meaning of 'Pure Animal Lovers' in everything they do.",
    author: "Rahul Mehta",
    role: "Community Partner",
  },
  {
    quote:
      "PAL Foundation showed me that one person can make a difference. Now, I help feed over 30 community dogs every week.",
    author: "Anita Desai",
    role: "Feeding Program Lead",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Voices of Compassion"
          title="Stories from Our Community"
          description="Hear from the dedicated volunteers and supporters who make our mission possible."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
