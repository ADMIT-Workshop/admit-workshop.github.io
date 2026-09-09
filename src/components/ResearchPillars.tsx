import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function ResearchPillars() {
  const section = workshop.sections.researchPillars;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Details are forthcoming."} />
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {section.items.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-gray-200 p-6 dark:border-trueGray-700"
            >
              <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                {pillar.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                {pillar.topics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span aria-hidden="true" className="text-indigo-500">
                      •
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
