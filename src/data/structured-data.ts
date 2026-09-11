import { workshop } from "@/data/workshop";

const siteUrl = workshop.seo.siteUrl;
const eventId = `${siteUrl}#workshop`;

// Keep structured facts in sync with the same data rendered on the page.
export const workshopStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: `${workshop.acronym} Workshop`,
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}#webpage`,
      url: siteUrl,
      name: workshop.seo.title,
      description: workshop.seo.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}#website` },
      mainEntity: { "@id": eventId },
    },
    {
      "@type": "EducationEvent",
      "@id": eventId,
      name: `${workshop.acronym} Workshop — ${workshop.fullTitle}`,
      alternateName: `${workshop.acronym} Workshop`,
      description: workshop.tagline,
      url: siteUrl,
      sameAs: workshop.links.officialWorkshop.href,
      image: new URL(workshop.seo.image.path, siteUrl).href,
      // Publish a machine-readable date only once the workshop day is confirmed.
      ...(workshop.schedule.dateIso && {
        startDate: workshop.schedule.dateIso,
      }),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      inLanguage: "en",
      superEvent: {
        "@type": "Event",
        name: workshop.event.name,
        url: workshop.event.href,
      },
      ...(workshop.sections.venue.status === "published" && {
        location: {
          "@type": "Place",
          name: `${workshop.venue.name}, Room ${workshop.venue.room}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: workshop.venue.address,
            addressLocality: workshop.venue.city,
            postalCode: workshop.venue.postalCode,
            addressCountry: workshop.venue.country,
          },
        },
      }),
      ...(workshop.sections.organizers.status === "published" && {
        organizer: workshop.sections.organizers.items.map((organizer) => ({
          "@type": "Person",
          name: organizer.name,
          url: organizer.href,
          affiliation: {
            "@type": "Organization",
            name: organizer.affiliation,
          },
        })),
      }),
    },
  ],
};
