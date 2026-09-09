import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Organizers() {
  const section = workshop.sections.organizers;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Organizers are forthcoming."} />
      ) : (
        <div className="grid max-w-4xl gap-5 sm:grid-cols-2">
          {section.items.map((organizer) => (
            <article
              key={organizer.name}
              className="rounded-xl border border-gray-200 p-6 dark:border-trueGray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {organizer.href ? (
                  <a
                    href={organizer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {organizer.name}
                    <span aria-hidden="true">&nbsp;↗</span>
                  </a>
                ) : (
                  organizer.name
                )}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {organizer.affiliation}
              </p>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
