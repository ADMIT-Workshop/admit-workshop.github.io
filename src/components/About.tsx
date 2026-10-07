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
        <>
          <div className="max-w-4xl space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={workshop.links.officialWorkshop.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm font-bold tracking-wider text-indigo-600 uppercase hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-400"
          >
            Workshop at {workshop.event.name}
            <span aria-hidden="true">&nbsp;↗</span>
          </a>
        </>
      )}
    </Section>
  );
}
