import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { workshop } from "@/data/workshop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(workshop.seo.siteUrl),
  title: workshop.seo.title,
  description: workshop.seo.description,
  keywords: workshop.seo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: workshop.seo.siteUrl,
    siteName: workshop.acronym,
    title: workshop.seo.title,
    description: workshop.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
