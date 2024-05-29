export default function CardTransactions({ text1, text2, money }) {
  return (
    <div className="rounded-lg border-[1.5px] border-primary/50 p-2">
      <div className="mx-auto  grid grid-cols-2 items-center md:justify-between">
        <div className="flex flex-col gap-1 md:gap-0">
          <h1 className="text-sm font-medium text-primary">{text1}</h1>
          <p className="text-xs font-medium text-primary/50 md:mt-2">{text2}</p>
          <h1 className="flex font-medium text-secondary md:hidden">
            Rp {money},00
          </h1>
        </div>
        <div className="flex justify-end gap-3">
          <h1 className="hidden justify-end font-medium text-secondary md:flex">
            Rp {money},00
          </h1>
          <div className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"
              />
            </svg>
          </div>
          <div className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}