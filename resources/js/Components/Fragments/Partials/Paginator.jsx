import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
  const prevUrl = meta?.links[0]?.url;
  const nextUrl = meta?.links[meta?.links.length - 1]?.url;
  const currentPage = meta?.current_page;

  return (
    <div className="btn-group">
      {prevUrl && (
        <Link
          href={prevUrl}
          className="btn btn-sm bg-steel-blue/70 hover:bg-slate-300 border-0 hover:text-slate-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      )}
      {currentPage && (
        <Link
          className="btn btn-sm bg-steel-blue/70 hover:bg-slate-300 border-0 hover:text-slate-600"
        >
          {currentPage}
        </Link>
      )}
      {nextUrl && (
        <Link
          href={nextUrl}
          className="btn btn-sm bg-steel-blue/70 hover:bg-slate-300 border-0 hover:text-slate-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Paginator;
