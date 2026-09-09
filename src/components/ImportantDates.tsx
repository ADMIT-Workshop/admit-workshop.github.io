import { Section } from "@/components/Section";
import { TbaNotice } from "@/components/TbaNotice";
import { workshop } from "@/data/workshop";

export function ImportantDates() {
  const section = workshop.sections.importantDates;

  if (section.status === "hidden") return null;

  return (
    <Section id={section.id} eyebrow={section.eyebrow} title={section.title}>
      {section.status === "tba" ? (
        <TbaNotice message={section.tbaMessage ?? "Dates are forthcoming."} />
      ) : (
        <div className="max-w-4xl">
          <dl className="divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-trueGray-700 dark:border-trueGray-700">
            {section.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-2 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:items-center"
              >
                <dt className="font-semibold text-gray-900 dark:text-white">
                  {item.label}
                </dt>
                <dd className="text-gray-600 dark:text-gray-300 sm:text-right">
                  {item.status === "tba" ? (
                    "To be announced"
                  ) : (
                    <>
                      {item.date}
                      {item.time && ` · ${item.time}`}
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          {section.note && (
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {section.note}
            </p>
          )}
        </div>
      )}
    </Section>
  );
}
