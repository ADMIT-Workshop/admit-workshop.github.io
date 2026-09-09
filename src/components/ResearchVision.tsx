import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function ResearchVision() {
  const section = workshop.sections.researchVision;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Details are forthcoming."} />
      ) : (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <div className="rounded-xl border-l-4 border-indigo-600 bg-white p-6 text-xl font-semibold leading-8 text-gray-800 shadow-sm dark:bg-trueGray-900 dark:text-gray-100">
            {section.principle}
          </div>
          <div className="space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
