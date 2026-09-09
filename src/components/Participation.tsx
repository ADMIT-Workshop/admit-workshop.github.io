import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Participation() {
  const section = workshop.sections.participation;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice
          message={section.tbaMessage ?? "Participation details are forthcoming."}
          link={workshop.links.officialWorkshop}
        />
      ) : (
        <div className="max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
          {section.summary && <p>{section.summary}</p>}
          {section.submissionHref && (
            <a
              href={section.submissionHref}
              className="mt-5 inline-flex rounded-md bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500"
            >
              Submission information
            </a>
          )}
        </div>
      )}
    </Section>
  );
}
