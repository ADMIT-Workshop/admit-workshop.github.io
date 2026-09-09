import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Program() {
  const section = workshop.sections.program;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      intro={section.summary}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "The program is forthcoming."} />
      ) : (
        <ol className="max-w-4xl divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-trueGray-700 dark:border-trueGray-700">
          {section.items.map((entry) => (
            <li
              key={`${entry.time}-${entry.title}`}
              className="grid gap-2 p-5 sm:grid-cols-[8rem_1fr]"
            >
              <time className="font-semibold text-indigo-600 dark:text-indigo-400">
                {entry.time}
              </time>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {entry.title}
                </h3>
                {entry.speaker && (
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {entry.speaker}
                  </p>
                )}
                {entry.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {entry.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
