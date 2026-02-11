"use client";

import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { href: "#about", label: t("footer.aboutUs") },
    { href: "#services", label: t("nav.services") },
    { href: "#approach", label: t("footer.ourApproach") },
  ];

  const exploreLinks = [
    { href: "#technologies", label: t("nav.technologies") },
    { href: "#why-us", label: t("footer.whyChooseUs") },
    { href: "#contact", label: t("footer.contact") },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
      <div className="container-narrow py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">I</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">IREESOFT</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-md mb-6 leading-relaxed" suppressHydrationWarning>
              {t("footer.description")}
            </p>
            <div className="flex flex-col gap-3 text-secondary-foreground/70 text-sm">
              <a href="mailto:contact@ireesoft.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                contact@ireesoft.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Tunisia
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4" suppressHydrationWarning>{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-white transition-colors text-sm" suppressHydrationWarning>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4" suppressHydrationWarning>{t("footer.explore")}</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-secondary-foreground/70 hover:text-white transition-colors text-sm" suppressHydrationWarning>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm" suppressHydrationWarning>
            {t("footer.copyright", { year: currentYear })}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors text-sm" suppressHydrationWarning>{t("footer.privacy")}</a>
            <a href="#" className="text-secondary-foreground/50 hover:text-white transition-colors text-sm" suppressHydrationWarning>{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
