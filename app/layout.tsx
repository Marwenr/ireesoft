import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import TooltipProvider from "@/components/providers/TooltipProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import I18nProvider from "@/components/providers/I18nProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IREESOFT | Software Development Company in Tunisia",
  description: "IREESOFT is a leading software development company in Tunisia. We build custom web applications, mobile apps, and enterprise solutions with cutting-edge technologies.",
  keywords: "software development, web development, mobile apps, Tunisia, custom solutions, IREESOFT",
  authors: [{ name: "IREESOFT" }],
  openGraph: {
    title: "IREESOFT | Software Development Company",
    description: "Transform your ideas into powerful digital solutions. Expert software development services in Tunisia.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ireesoft",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  alternates: {
    canonical: "https://ireesoft.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`} suppressHydrationWarning>
        <I18nProvider>
          <QueryProvider>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

