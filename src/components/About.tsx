import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function About() {
  const section = workshop.sections.about;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Details are forthcoming."} />
      ) : (
        <div className="max-w-4xl space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </Section>
  );
}
