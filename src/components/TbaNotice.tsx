interface TbaNoticeProps {
  message: string;
  detail?: string;
  link?: {
    label: string;
    href: string;
  };
}

export function TbaNotice({
  message,
  detail,
  link,
}: Readonly<TbaNoticeProps>) {
  return (
    <div className="max-w-3xl rounded-xl border border-dashed border-gray-300 bg-white p-6 dark:border-trueGray-700 dark:bg-trueGray-900">
      <p className="font-semibold text-gray-800 dark:text-gray-100">
        To be announced
      </p>
      <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
        {message}
      </p>
      {detail && (
        <p className="mt-3 leading-7 text-gray-500 dark:text-gray-400">
          {detail}
        </p>
      )}
      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          {link.label}
          <span aria-hidden="true">&nbsp;↗</span>
        </a>
      )}
    </div>
  );
}
