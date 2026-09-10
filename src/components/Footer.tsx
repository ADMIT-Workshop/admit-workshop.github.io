import Link from "next/link";
import { Container } from "@/components/Container";
import { visibleNavigation, workshop } from "@/data/workshop";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-trueGray-800">
      <Container>
        <div className="grid gap-10 py-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <Link
              href="/#top"
              aria-label="ADMIT Workshop home"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              {workshop.acronym}
            </Link>
            <p className="mt-3 max-w-md leading-7 text-gray-600 dark:text-gray-300">
              {workshop.fullTitle}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Workshop at {workshop.event.name}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-3">
              {visibleNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 py-6 text-sm text-gray-500 dark:border-trueGray-800 dark:text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {workshop.acronym} Workshop
          </p>
          <p>
            Based on the MIT-licensed{" "}
            <a
              href="https://github.com/web3templates/nextly-template"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              Nextly template
            </a>{" "}
            by{" "}
            <a
              href="https://web3templates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
            >
              Web3Templates
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
