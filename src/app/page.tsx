import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ImportantDates } from "@/components/ImportantDates";
import { News } from "@/components/News";
import { Organizers } from "@/components/Organizers";
import { Participation } from "@/components/Participation";
import { Program } from "@/components/Program";
import { Speakers } from "@/components/Speakers";
import { Venue } from "@/components/Venue";
import { workshopStructuredData } from "@/data/structured-data";
import { workshop } from "@/data/workshop";

export const metadata: Metadata = {
  title: workshop.seo.title,
  description: workshop.seo.description,
  alternates: {
    canonical: workshop.seo.siteUrl,
  },
  openGraph: {
    type: "website",
    url: workshop.seo.siteUrl,
    siteName: `${workshop.acronym} Workshop`,
    locale: "en_GB",
    title: workshop.seo.title,
    description: workshop.seo.description,
    images: [
      {
        url: workshop.seo.image.path,
        width: workshop.seo.image.width,
        height: workshop.seo.image.height,
        alt: workshop.seo.image.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: workshop.seo.title,
    description: workshop.seo.description,
    images: [{ url: workshop.seo.image.path, alt: workshop.seo.image.alt }],
  },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workshopStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <News />
      <About />
      <Speakers />
      <ImportantDates />
      <Participation />
      <Program />
      <Organizers />
      <Venue />
      <Contact />
    </main>
  );
}
