export default function CardAlarm({ text, time, date }) {
  return (
    <div className="mx-auto mt-4 grid grid-cols-3 items-center rounded-lg border-[1.5px] border-primary px-4 py-3 ">
      <h1 className="text-start text-sm font-semibold text-primary md:text-lg">
        {text}
      </h1>
      <h1 className="text-center text-xl font-bold text-secondary md:text-3xl">
        {time}
      </h1>
      <h1 className="text-end text-sm font-semibold text-primary md:text-lg">
        {date}
      </h1>
    </div>
  );
}
