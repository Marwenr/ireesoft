import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ireesoft.com"),
  alternates: {
    canonical: "https://www.ireesoft.com",
  },
  title: {
    default: "IREESOFT",
    template: "%s | IREESOFT",
  },
  description:
    "IREESOFT - Website vitrine de société de développement logiciel. Découvrez nos services de développement de logiciels et nos solutions technologiques innovantes.",
  keywords: [
    "développement logiciel",
    "software development",
    "IREESOFT",
    "société de développement",
    "développement web",
    "solutions logicielles",
  ],
  authors: [{ name: "IREESOFT" }],
  creator: "IREESOFT",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.ireesoft.com/",
    siteName: "IREESOFT",
    title: "IREESOFT - Société de Développement Logiciel",
    description:
      "IREESOFT - Website vitrine de société de développement logiciel. Découvrez nos services de développement de logiciels et nos solutions technologiques innovantes.",
    images: [
      {
        url: "https://www.ireesoft.com/logo-navbar.svg",
        width: 1200,
        height: 630,
        alt: "IREESOFT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IREESOFT - Société de Développement Logiciel",
    description:
      "IREESOFT - Website vitrine de société de développement logiciel. Découvrez nos services de développement de logiciels et nos solutions technologiques innovantes.",
    images: ["https://www.ireesoft.com/logo-navbar.svg"],
    creator: "@ireesoft",
  },
  verification: {
    google: "your-google-verification-code", // À remplacer par votre code de vérification Google
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-navbar.svg",
    shortcut: "/logo-navbar.svg",
    apple: "/logo-navbar.svg",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
