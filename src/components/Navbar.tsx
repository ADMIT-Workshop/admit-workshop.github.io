"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { visibleNavigation, workshop } from "@/data/workshop";

export function Navbar() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/95 dark:border-trueGray-800 dark:bg-trueGray-900/95">
      <Disclosure as="nav" className="container mx-auto px-8 py-5 xl:px-0">
        {({ open, close }) => (
          <>
            <div className="flex items-center justify-between">
              <Link
                href="/#top"
                className="flex items-baseline gap-3 text-indigo-600 dark:text-indigo-400"
              >
                <span className="text-2xl font-bold">{workshop.acronym}</span>
                <span className="hidden text-sm font-medium text-gray-500 dark:text-gray-400 sm:inline">
                  {workshop.event.name}
                </span>
              </Link>

              <div className="flex items-center gap-5">
                <Disclosure.Button
                  aria-label="Toggle navigation"
                  className="rounded-md p-2 text-gray-500 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-gray-300 lg:hidden"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
              </div>
            </div>

            <ul className="mt-5 hidden flex-wrap gap-x-6 gap-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600 dark:border-trueGray-800 dark:text-gray-300 lg:flex">
              {visibleNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-indigo-600 focus:text-indigo-600 focus:outline-none dark:hover:text-indigo-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Disclosure.Panel className="mt-5 border-t border-gray-100 pt-4 dark:border-trueGray-800 lg:hidden">
              <ul className="grid gap-1 sm:grid-cols-2">
                {visibleNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => close()}
                      className="block rounded-md px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-trueGray-800 dark:hover:text-indigo-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
