import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Support Us", path: "/support" },
    { name: "Contact", path: "/contact" },
    { name: "Volunteer", path: "/volunteer" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary fill-primary/30" />
              </div>
              <div>
                <span className="font-display text-xl font-semibold">
                  PAL Welfare Foundation
                </span>
                <p className="text-xs text-background/60">Pure Animal Lovers</p>
              </div>
            </div>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              Dedicated to the welfare of community animals through compassion, 
              awareness, and collective action. Together, we build a more caring world 
              for every creature who shares our streets and neighborhoods.
            </p>
            <p className="text-sm font-display italic text-primary">
              "For the love of community animals."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@palfoundation.in"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@palfoundation.in</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} PAL Welfare Foundation. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              A community-animal welfare NGO • Registered Non-Profit Organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
