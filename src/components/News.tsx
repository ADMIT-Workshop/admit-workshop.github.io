import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function News() {
  const section = workshop.sections.news;

  if (section.status === "hidden") return null;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      muted
    >
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Updates are forthcoming."} />
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {section.items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 dark:border-trueGray-700 dark:bg-trueGray-900"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                {item.summary}
              </p>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  Read more about {item.title}<span aria-hidden="true">&nbsp;↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
