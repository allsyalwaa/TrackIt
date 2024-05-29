import Chart from "../../assets/chart.svg";

export default function SecMoneyCalculator() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">
            Financial records
          </h1>
          <h2 className="mt-2 text-sm font-semibold text-secondary">
            May 2024
          </h2>
          <div className="mt-4 grid grid-cols-3 items-center justify-center gap-6">
            <div>
              <img className="h-20" src={Chart} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-primary/50 ">Income :</h1>
              <h1 className="font-medium text-primary/50 ">Expenditure :</h1>
              <h1 className="font-medium text-primary/50 ">Total :</h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="flex justify-end font-medium text-primary">
                Rp 5.000.000,00
              </h1>
              <h1 className="flex justify-end font-medium text-[#EE0C00]">
                Rp 3.000.000,00
              </h1>
              <h1 className="flex justify-end font-medium text-secondary">
                Rp 2.000.000,00
              </h1>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">Balance</h1>

          <div className="mt-2 grid grid-cols-5 items-center justify-center gap-6">
            <div className="col-span-2 flex flex-col gap-2">
              <h1 className="font-medium text-primary/50 ">Balance name :</h1>
              <h1 className="font-medium text-primary/50 ">Balance name :</h1>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <h1 className="flex justify-end font-medium text-secondary">
                Rp 5.000.000,00
              </h1>
              <h1 className="flex justify-end font-medium text-secondary">
                Rp 5.000.000,00
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
          <div className="absolute right-4 top-[136px]">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-3 h-80 rounded-lg border-[1.5px] border-primary p-4">
        <h1 className="text-xl font-semibold text-primary">
          Financial records
        </h1>
        <div className="mt-2 flex flex-col gap-2">
          <div className="rounded-lg border-[1.5px] border-primary/50 p-2">
            <div className="grid grid-cols-2 items-center justify-between">
              <div>
                <h1 className="text-sm font-medium text-primary">
                  Transaction name
                </h1>
                <p className="mt-2 text-xs font-medium text-primary/50">
                  Balance name
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <h1 className="flex justify-end font-medium text-secondary">
                  Rp 5.000.000,00
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
          <div className="rounded-lg border-[1.5px] border-primary/50 p-2">
            <div className="grid grid-cols-2 items-center justify-between">
              <div>
                <h1 className="text-sm font-medium text-primary">
                  Transaction name
                </h1>
                <p className="mt-2 text-xs font-medium text-primary/50">
                  Balance name
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <h1 className="flex justify-end font-medium text-[#EE0C00]">
                  Rp -5.000.000,00
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
          <div className="rounded-lg border-[1.5px] border-primary/50 p-2">
            <div className="grid grid-cols-2 items-center justify-between">
              <div>
                <h1 className="text-sm font-medium text-primary">
                  Transaction name
                </h1>
                <p className="mt-2 text-xs font-medium text-primary/50">
                  Balance name
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <h1 className="flex justify-end font-medium text-secondary">
                  Rp 5.000.000,00
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
          <div className="absolute bottom-4 right-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
