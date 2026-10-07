"use client";

import { useEffect, useState } from "react";
import { workshop } from "@/data/workshop";

const pad = (n: number) => String(n).padStart(2, "0");

function formatRemaining(ms: number) {
  const total = Math.floor(ms / 1000);
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export function SubmissionCountdown() {
  const { deadlineIso } = workshop.submission;
  const section = workshop.sections.participation;
  const deadline = Date.parse(deadlineIso);
  // Rendered only after mount so the static HTML never disagrees with the client clock.
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (now !== null && now >= deadline) return null;

  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
      <a
        href={`#${section.id}`}
        className="text-sm font-bold tracking-wider text-indigo-600 uppercase underline underline-offset-4 hover:text-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-400"
      >
        Submit a contribution
        <span aria-hidden="true">&nbsp;↓</span>
      </a>
      <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 tabular-nums dark:text-gray-400">
        {now === null ? (
          <>Deadline {workshop.submission.deadlineLabel}</>
        ) : (
          <>
            Closes in{" "}
            <time dateTime={deadlineIso} className="text-gray-900 dark:text-white">
              {formatRemaining(deadline - now)}
            </time>
          </>
        )}
      </span>
    </div>
  );
}
