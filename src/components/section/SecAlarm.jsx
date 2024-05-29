export default function SecAlarm() {
  return (
    <section>
      <div className=" flex w-full flex-col items-center justify-center gap-6">
        <h1 className="text-xl font-bold text-primary md:text-2xl">
          Thursday, May 23, 2024
        </h1>
        <h1 className="text-5xl font-bold text-secondary md:text-7xl">
          7:57:54 PM
        </h1>
      </div>

      <form className="mt-6" action="">
        <h2 className="text-lg font-medium text-primary">Set alarm time</h2>
        <div className="grid gap-3 md:grid-cols-2 md:gap-6">
          <div>
            <label className="text-sm text-primary" htmlFor="hours">
              Hours
            </label>
            <div className="mt-2 rounded-lg border-[1.5px] border-primary px-2 py-3">
              <select
                className="mx-auto text-lg font-bold text-secondary"
                name="hours"
                id="hours"
              >
                <option value="">6 PM</option>
                <option value="">7 PM</option>
                <option value="">8 PM</option>
                <option value="">9 PM</option>
                <option value="">10 PM</option>
                <option value="">11 PM</option>
                <option value="">12 PM</option>
                <option value="">1 PM</option>
                <option value="">2 PM</option>
                <option value="">3 PM</option>
                <option value="">4 PM</option>
                <option value="">5 PM</option>
                <option value="">6 AM</option>
                <option value="">7 AM</option>
                <option value="">8 AM</option>
                <option value="">9 AM</option>
                <option value="">10 AM</option>
                <option value="">11 AM</option>
                <option value="">12 AM</option>
                <option value="">1 AM</option>
                <option value="">2 AM</option>
                <option value="">3 AM</option>
                <option value="">4 AM</option>
                <option value="">5 AM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm text-primary" htmlFor="minutes">
              Minutes
            </label>
            <div className="mt-2 rounded-lg border-[1.5px] border-primary px-2 py-3">
              <select
                className="mx-auto text-lg font-bold text-secondary"
                name="minutes"
                id="minutes"
              >
                <option value="">00</option>
                <option value="">05</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
                <option value="">25</option>
                <option value="">30</option>
                <option value="">35</option>
                <option value="">40</option>
                <option value="">45</option>
                <option value="">50</option>
                <option value="">55</option>
              </select>
            </div>
          </div>
        </div>
        <input
          className="mt-6 w-full rounded-lg border-[1.5px] border-primary px-2 py-3 placeholder-primary/50"
          type="text"
          placeholder="Alarm name"
        />

        <button className="mt-6 w-full rounded-lg bg-primary py-3 font-semibold text-white">
          Set Alarm
        </button>
      </form>
      <hr className="mt-6 border-t border-primary/50" />

      <div className="mx-auto flex items-center justify-between rounded-lg border-[1.5px] border-primary px-4 py-3 text-center">
        <h1 className="text-sm font-semibold text-primary md:text-lg">
          Alarm name
        </h1>
        <h1 className="text-xl font-bold text-secondary md:text-3xl">
          06.00 PM
        </h1>
        <h1 className="text-sm font-semibold text-primary md:text-lg">
          Friday, May 24
        </h1>
      </div>
    </section>
  );
}
