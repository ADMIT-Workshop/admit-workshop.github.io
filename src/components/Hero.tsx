import { Container } from "@/components/Container";
import { workshop } from "@/data/workshop";

export function Hero() {
  return (
    <section id="top" className="py-16 sm:py-24">
      <Container className="flex flex-col items-start">
        <a
          href={workshop.event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold tracking-wider text-indigo-600 uppercase hover:text-indigo-500 dark:text-indigo-400"
        >
          Workshop at {workshop.event.name}
          <span aria-hidden="true">&nbsp;↗</span>
        </a>

        <h1 className="mt-6 text-6xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl lg:text-8xl">
          {workshop.acronym}
        </h1>
        <p className="mt-5 max-w-4xl text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-100 sm:text-3xl">
          {workshop.fullTitle}
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          {workshop.tagline}
        </p>

        <dl className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-5 dark:border-trueGray-700">
            <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Date
            </dt>
            <dd className="mt-2 font-medium text-gray-900 dark:text-white">
              <time dateTime={workshop.schedule.dateIso}>
                {workshop.schedule.date}
              </time>
            </dd>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 dark:border-trueGray-700">
            <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Time
            </dt>
            <dd className="mt-2 font-medium text-gray-900 dark:text-white">
              {workshop.schedule.time}
            </dd>
          </div>
          <div className="rounded-xl border border-gray-200 p-5 dark:border-trueGray-700">
            <dt className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Venue
            </dt>
            <dd className="mt-2 font-medium text-gray-900 dark:text-white">
              Room {workshop.venue.room}, {workshop.venue.city}
            </dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={workshop.links.officialWorkshop.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            {workshop.links.officialWorkshop.label}
          </a>
          <a
            href="#about"
            className="rounded-md border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 dark:border-trueGray-600 dark:text-gray-200"
          >
            Explore the workshop
          </a>
        </div>
      </Container>
    </section>
  );
}
