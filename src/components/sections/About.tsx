"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const values = [
    { icon: Target, titleKey: "about.mission.title", descKey: "about.mission.description" },
    { icon: Lightbulb, titleKey: "about.vision.title", descKey: "about.vision.description" },
    { icon: Users, titleKey: "about.team.title", descKey: "about.team.description" },
  ];

  return (
    <section id="about" className="section-padding bg-background-section" ref={ref}>
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm uppercase tracking-wider" suppressHydrationWarning>
            {t("about.label")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-4 mb-6" suppressHydrationWarning>
            {t("about.title")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed" suppressHydrationWarning>
            {t("about.description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-soft transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-secondary mb-3" suppressHydrationWarning>{t(value.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed" suppressHydrationWarning>{t(value.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
