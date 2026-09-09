import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Contact() {
  const section = workshop.sections.contact;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice
          message={section.tbaMessage ?? "Contact information is forthcoming."}
          detail={section.summary}
          link={workshop.links.officialWorkshop}
        />
      ) : (
        <div className="max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
          {section.summary && <p>{section.summary}</p>}
          {section.email && (
            <a
              href={`mailto:${section.email}`}
              className="mt-4 inline-flex font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              {section.email}
            </a>
          )}
        </div>
      )}
    </Section>
  );
}
