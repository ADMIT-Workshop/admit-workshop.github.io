import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function Acknowledgements() {
  const section = workshop.sections.acknowledgements;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Acknowledgements are forthcoming."} />
      ) : (
        <div className="max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
          <p>{section.summary}</p>
          <a
            href={section.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            {section.link.label}
            <span aria-hidden="true">&nbsp;↗</span>
          </a>
        </div>
      )}
    </Section>
  );
}
