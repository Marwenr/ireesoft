"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const stepKeys = [
  { icon: Search, number: "01", key: "analysis" },
  { icon: PenTool, number: "02", key: "design" },
  { icon: Code2, number: "03", key: "development" },
  { icon: Rocket, number: "04", key: "delivery" },
];

const Approach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="approach" className="section-padding bg-background-section" ref={ref}>
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm uppercase tracking-wider" suppressHydrationWarning>
            {t("approach.label")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-4 mb-6" suppressHydrationWarning>
            {t("approach.title")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed" suppressHydrationWarning>
            {t("approach.description")}
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepKeys.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 bg-background-section">
                  <div className="w-20 h-20 rounded-2xl bg-card shadow-card flex items-center justify-center mx-auto mb-6 relative border border-border/50">
                    <step.icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-xl text-secondary mb-3" suppressHydrationWarning>{t(`approach.steps.${step.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed" suppressHydrationWarning>{t(`approach.steps.${step.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
