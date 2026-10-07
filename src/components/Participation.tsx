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
    >
      {section.status === "tba" ? (
        <TbaNotice
          message={section.tbaMessage ?? "Participation details are forthcoming."}
          link={workshop.links.officialWorkshop}
        />
      ) : (
        <div className="max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
          {section.summary && <p>{section.summary}</p>}
          <ul className="mt-4 list-disc space-y-2 pl-6">
            {section.contributionTypes.map((type) => (
              <li key={type.title}>
                <strong>{type.title}:</strong> {type.description}
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-4">
            <p>
              Please submit a <strong>one-page PDF presentation proposal</strong>{" "}
              containing the presentation title, author name(s) and
              affiliation(s), and a short description of the challenge, insight,
              or lesson you would like to discuss.
            </p>
            <p>
              No template is required. There are <strong>no formal proceedings</strong>,
              and previously published or presented material is welcome.
            </p>
            <p>
              Please designate one author as the presenter when submitting. To
              encourage broad participation and networking, we generally aim
              for each person to present at most one contribution.
            </p>
            <p>
              Presentations are <strong>onsite in Glasgow</strong>; remote
              presentations will not be available.
            </p>
          </div>
          <div className="mt-5 flex flex-col items-start gap-5">
            {section.cfpPdfHref && (
              <a
                href={section.cfpPdfHref}
                className="text-sm font-bold tracking-wider text-indigo-600 uppercase hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-400"
              >
                CFP PDF
                <span aria-hidden="true">&nbsp;↗</span>
              </a>
            )}
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
          </div>
        </div>
      )}
    </Section>
  );
}
