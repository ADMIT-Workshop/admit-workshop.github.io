import Image from "next/image";
import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Speakers() {
  const section = workshop.sections.speakers;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Keynote speakers are forthcoming."} />
      ) : (
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((speaker) => (
            <article
              key={speaker.name}
              className="w-fit max-w-full text-center"
            >
              {speaker.image && (
                <Image
                  src={speaker.image}
                  alt={`Portrait of ${speaker.name}`}
                  width={192}
                  height={192}
                  className="mx-auto mb-6 h-48 w-48 rounded-full object-cover"
                />
              )}
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
              {speaker.affiliations.map((affiliation) => {
                const singleRole = affiliation.roles?.length === 1;

                return (
                  <p
                    key={affiliation.name}
                    className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300"
                  >
                    {affiliation.roles?.map((role) => (
                      <span
                        key={role}
                        className={singleRole ? undefined : "block"}
                      >
                        {role}
                        {singleRole && ", "}
                      </span>
                    ))}
                    <span
                      className={`${singleRole ? "" : "block "}font-medium text-gray-800 dark:text-gray-200`}
                    >
                      {affiliation.name}
                    </span>
                  </p>
                );
              })}
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
