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
          <div className="mt-5 flex flex-wrap items-center gap-5">
            {section.submissionHref && (
              <a
                href={section.submissionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-500"
              >
                Submit via EasyChair
              </a>
            )}
            {section.cfpPdfHref && (
              <a
                href={section.cfpPdfHref}
                className="font-medium text-indigo-600 underline hover:text-indigo-500 dark:text-indigo-400"
              >
                CFP PDF (blank placeholder)
              </a>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}
