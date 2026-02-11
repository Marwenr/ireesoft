"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const techCategories = [
  { key: "frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { key: "backend", technologies: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"] },
  { key: "mobile", technologies: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { key: "cloud", technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"] },
];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="technologies" className="section-padding bg-background-section" ref={ref}>
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-primary font-medium text-sm uppercase tracking-wider" suppressHydrationWarning>
            {t("technologies.label")}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mt-4 mb-6" suppressHydrationWarning>
            {t("technologies.title")}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed" suppressHydrationWarning>
            {t("technologies.description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              <h3 className="font-heading font-semibold text-xl text-secondary mb-2" suppressHydrationWarning>{t(`technologies.categories.${category.key}.title`)}</h3>
              <p className="text-muted-foreground text-sm mb-6" suppressHydrationWarning>{t(`technologies.categories.${category.key}.description`)}</p>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-accent-soft border border-accent/20 rounded-xl text-sm font-medium text-secondary hover:bg-accent/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
