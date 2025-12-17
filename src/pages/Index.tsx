import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import AboutPreview from "@/components/home/AboutPreview";
import JoinCTA from "@/components/home/JoinCTA";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <AboutPreview />
      <JoinCTA />
      <TestimonialsSection />
      <GallerySection />
    </Layout>
  );
};

export default Index;
