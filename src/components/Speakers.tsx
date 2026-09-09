import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Speakers() {
  const section = workshop.sections.speakers;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Speakers are forthcoming."} />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((speaker) => (
            <article
              key={speaker.name}
              className="rounded-xl border border-gray-200 p-6 dark:border-trueGray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {speaker.href ? (
                  <a
                    href={speaker.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {speaker.name}
                  </a>
                ) : (
                  speaker.name
                )}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {speaker.affiliation}
              </p>
              {speaker.talkTitle && (
                <p className="mt-4 font-medium text-gray-800 dark:text-gray-100">
                  {speaker.talkTitle}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
