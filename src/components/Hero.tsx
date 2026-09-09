import { Container } from "@/components/Container";
import { workshop } from "@/data/workshop";

export function Hero() {
  return (
    <section id="top" className="pt-0 pb-16 sm:pt-4 sm:pb-24">
      <Container className="flex flex-col items-start">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          {workshop.fullTitle}.
        </h1>
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
              Room {workshop.venue.room}, {workshop.venue.name},{" "}
              {workshop.venue.city}
            </dd>
          </div>
        </dl>

        <a
          href={workshop.event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 text-sm font-bold tracking-wider text-indigo-600 uppercase hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-400"
        >
          WORKSHOP AT HIPEAC27
          <span aria-hidden="true">&nbsp;↗</span>
        </a>
      </Container>
    </section>
  );
}
