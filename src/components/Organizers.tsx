import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";
import type { Organizer, SectionBase } from "@/data/workshop";

export function People() {
  const groups = [workshop.sections.programChair, workshop.sections.organizers];
  if (groups.every((group) => group.status === "hidden")) return null;

  return (
    <Section id="people" eyebrow={workshop.acronym} title="People">
      <div className="space-y-12">
        {groups.map((group) => (
          <PeopleGroup key={group.id} section={group} />
        ))}
      </div>
    </Section>
  );
}

function PeopleGroup({ section }: { section: SectionBase & { items: Organizer[] } }) {
  if (section.status === "hidden") return null;

  return (
    <div id={section.id} role="group" aria-labelledby={`${section.id}-heading`} className="scroll-mt-36">
      <h3 id={`${section.id}-heading`} className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
        {section.title}
      </h3>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? `${section.title} details are forthcoming.`} />
      ) : (
        <div className="grid max-w-4xl gap-5 sm:grid-cols-2">
          {section.items.map((organizer) => (
            <article
              key={organizer.name}
              className="rounded-xl border border-gray-200 p-6 dark:border-trueGray-700"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
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
              </h4>
              <p className="mt-2 font-medium text-indigo-600 dark:text-indigo-400">
                {organizer.role}
              </p>
              {organizer.affiliation && (
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  {organizer.affiliation}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
