"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Layers, Wrench, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import aboutImage from "@/assets/about-team.jpg";

const serviceKeys = [
  { icon: Globe, key: "web" },
  { icon: Smartphone, key: "mobile" },
  { icon: Layers, key: "custom" },
  { icon: Wrench, key: "maintenance" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="services" className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <img src={aboutImage.src} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm uppercase tracking-wider" suppressHydrationWarning>
            {t("services.label")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-4 mb-6" suppressHydrationWarning>
            {t("services.title")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed" suppressHydrationWarning>
            {t("services.description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceKeys.map((service, index) => {
            const features = (t(`services.${service.key}.features`, { returnObjects: true }) as string[]) || [];
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-secondary mb-3" suppressHydrationWarning>{t(`services.${service.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6" suppressHydrationWarning>{t(`services.${service.key}.description`)}</p>
                <ul className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <li key={feature} className="px-3 py-1.5 bg-primary-soft rounded-full text-sm text-primary font-medium" suppressHydrationWarning>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
