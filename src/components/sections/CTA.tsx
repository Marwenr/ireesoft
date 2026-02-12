"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding relative overflow-hidden items-center" ref={ref}>
      <div className="absolute inset-0 cta-gradient -z-10" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 -z-10" />

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
            <MessageSquare size={16} />
            <span>{t("cta.badge")}</span>
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {t("cta.title")}
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-white/80 text-lg leading-relaxed mb-10">
            {t("cta.description")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 group" asChild>
              <a href="mailto:contact@ireesoft.com">
                <Mail className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                {t("cta.button")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:ml-0 rtl:mr-2" />
              </a>
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white group" asChild>
              <a href="https://wa.me/21655054019" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                {t("WhatsApp")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:ml-0 rtl:mr-2" />
              </a>
            </Button>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="text-white/60 text-sm mt-8">
            {t("cta.responseTime")}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
