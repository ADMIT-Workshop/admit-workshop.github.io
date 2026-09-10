import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Venue() {
  const section = workshop.sections.venue;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Venue details are forthcoming."} />
      ) : (
        <div className="grid max-w-4xl gap-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-trueGray-700 dark:bg-trueGray-900 sm:grid-cols-2 sm:p-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {workshop.venue.name}
            </h3>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
              {section.summary}
            </p>
          </div>
          <p className="leading-7 text-gray-600 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">
              Room {workshop.venue.room}
            </span>
            <br />
            {workshop.venue.name}
            <br />
            {workshop.venue.address}
            <br />
            {workshop.venue.city} {workshop.venue.postalCode}
            <br />
            {workshop.venue.country}
          </p>
        </div>
      )}
    </Section>
  );
}
