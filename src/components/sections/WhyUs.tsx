"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, HeartHandshake, TrendingUp, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const reasonKeys = [
  { icon: Award, key: "quality" },
  { icon: Zap, key: "performance" },
  { icon: HeartHandshake, key: "support" },
  { icon: TrendingUp, key: "scalable" },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  const listItems = (t("whyUs.list", { returnObjects: true }) as string[]) || [];

  return (
    <section id="why-us" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm uppercase tracking-wider" suppressHydrationWarning>
              {t("whyUs.label")}
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-4 mb-6" suppressHydrationWarning>
              {t("whyUs.title")}
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed mb-8" suppressHydrationWarning>
              {t("whyUs.description")}
            </motion.p>
            <motion.ul initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-4">
              {listItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium" suppressHydrationWarning>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasonKeys.map((reason, index) => (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-soft transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-secondary mb-2" suppressHydrationWarning>{t(`whyUs.reasons.${reason.key}.title`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed" suppressHydrationWarning>{t(`whyUs.reasons.${reason.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
