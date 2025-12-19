import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRIGHTEDGE - Digital Design Creators",
  description: "From Concept to Creation — Beautiful design has the power to captivate audiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

