import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Topics() {
  const section = workshop.sections.topics;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Topics are forthcoming."} />
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((topic) => (
            <li
              key={topic}
              className="rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-700 dark:border-trueGray-700 dark:bg-trueGray-900 dark:text-gray-200"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
