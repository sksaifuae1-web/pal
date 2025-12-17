interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {subtitle && (
        <span
          className={`inline-block text-sm font-medium tracking-wider uppercase mb-3 ${
            light ? "text-primary-foreground/70" : "text-primary"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
