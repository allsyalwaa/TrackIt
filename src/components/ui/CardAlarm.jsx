export default function CardAlarm({ text, time, date }) {
  return (
    <div className="mx-auto mt-4 flex items-center justify-between rounded-lg border-[1.5px] border-primary px-4 py-3 text-center">
      <h1 className="text-sm font-semibold text-primary md:text-lg">{text}</h1>
      <h1 className="text-xl font-bold text-secondary md:text-3xl">{time}</h1>
      <h1 className="text-sm font-semibold text-primary md:text-lg">{date}</h1>
    </div>
  );
}
