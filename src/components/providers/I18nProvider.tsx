"use client";

import { useEffect } from "react";
import "@/i18n";

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // i18n is initialized in the imported file
  }, []);

  return <>{children}</>;
};

export default I18nProvider;

