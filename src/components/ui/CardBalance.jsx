export default function CardBalance({ text, money }) {
  return (
    <div className="mt-2 grid grid-cols-5 items-center justify-center gap-6">
      <div className="col-span-2 flex flex-col gap-2">
        <h1 className="font-medium text-primary/50 ">{text} :</h1>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <h1 className="flex justify-end font-medium text-secondary">
          Rp {money},00
        </h1>
      </div>
      <div className="flex flex-col gap-2 text-primary">
        <div className="flex justify-end">
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
      </div>
    </div>
  );
}
