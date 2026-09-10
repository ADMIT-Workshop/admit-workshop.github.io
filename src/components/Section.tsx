import type { ReactNode } from "react";
import { Container } from "@/components/Container";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  intro?: string;
  muted?: boolean;
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  intro,
  muted = false,
}: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-36 py-12 sm:py-16 ${
        muted ? "bg-gray-50 dark:bg-trueGray-800/40" : ""
      }`}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            {eyebrow}
          </p>
          <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold tracking-tight text-gray-800 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
