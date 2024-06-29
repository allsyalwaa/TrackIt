export default function BreadCrumbs({
  data = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
  ],
}) {
  return (
    <nav className="mb-2 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {data.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <a
              href={item.link}
              className="inline-flex items-center text-xs font-medium text-primary/80 hover:text-secondary "
            >
              {index == 0 ? (
                <svg
                  className="me-2.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              ) : (
                <svg
                  className="mx-1 h-2 w-2 text-primary/80 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
