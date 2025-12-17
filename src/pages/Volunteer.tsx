import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, CheckCircle } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNumber: "",
    aadharNumber: "",
    existingMember: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.whatsappNumber.trim())) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = "Aadhar/Identity number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNumber.trim())) {
      newErrors.aadharNumber = "Please enter a valid 12-digit Aadhar number";
    }

    if (!formData.existingMember) {
      newErrors.existingMember = "Please select an option";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Application Submitted!",
      description: "Thank you for joining our family. We'll contact you soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="section-padding min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground animate-slide-up">
                Welcome to the PAL Family!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 animate-slide-up animation-delay-100">
                Your application has been received. Our team will review your 
                information and contact you via WhatsApp within 3-5 days to 
                discuss next steps.
              </p>
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft animate-slide-up animation-delay-200">
                <p className="text-sm text-muted-foreground mb-2">
                  Application submitted for:
                </p>
                <p className="font-display text-xl font-semibold text-foreground">
                  {formData.fullName}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Join Our Team
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Become a <span className="text-primary">PAL Volunteer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Apply and join forces in our passionate mission by becoming a 
              member of our animal welfare family today. Your compassion can 
              change lives.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50">
              <h2 className="font-display text-2xl font-semibold mb-2 text-foreground">
                Volunteer Application
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill in your details below to join our volunteer network.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className={`h-12 rounded-xl ${
                      errors.fullName ? "border-destructive" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                  <Input
                    id="whatsappNumber"
                    type="tel"
                    placeholder="Enter your 10-digit mobile number"
                    value={formData.whatsappNumber}
                    onChange={(e) =>
                      handleInputChange("whatsappNumber", e.target.value)
                    }
                    className={`h-12 rounded-xl ${
                      errors.whatsappNumber ? "border-destructive" : ""
                    }`}
                  />
                  {errors.whatsappNumber && (
                    <p className="text-sm text-destructive">
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                {/* Aadhar Number */}
                <div className="space-y-2">
                  <Label htmlFor="aadharNumber">Aadhar Number *</Label>
                  <Input
                    id="aadharNumber"
                    type="text"
                    placeholder="Enter your 12-digit Aadhar number"
                    value={formData.aadharNumber}
                    onChange={(e) =>
                      handleInputChange("aadharNumber", e.target.value)
                    }
                    className={`h-12 rounded-xl ${
                      errors.aadharNumber ? "border-destructive" : ""
                    }`}
                  />
                  {errors.aadharNumber && (
                    <p className="text-sm text-destructive">
                      {errors.aadharNumber}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Your identity information is kept confidential and used only 
                    for volunteer verification.
                  </p>
                </div>

                {/* Existing Member */}
                <div className="space-y-2">
                  <Label htmlFor="existingMember">
                    Are you already part of any animal welfare group? *
                  </Label>
                  <Select
                    value={formData.existingMember}
                    onValueChange={(value) =>
                      handleInputChange("existingMember", value)
                    }
                  >
                    <SelectTrigger
                      className={`h-12 rounded-xl ${
                        errors.existingMember ? "border-destructive" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border rounded-xl">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.existingMember && (
                    <p className="text-sm text-destructive">
                      {errors.existingMember}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-lg font-medium"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Submit Application
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                  Why Volunteer With Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Make a Real Difference
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Your actions directly impact the lives of community 
                        animals in need.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Join a Caring Community
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Connect with like-minded individuals who share your 
                        passion for animal welfare.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Flexible Involvement
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Contribute based on your availability—every bit of 
                        help counts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-6">
                <h4 className="font-display text-lg font-semibold mb-3 text-foreground">
                  What Happens Next?
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    We review your application within 3-5 days
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    Our team contacts you via WhatsApp
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    We add you to our volunteer network
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    You receive updates about activities and opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;
