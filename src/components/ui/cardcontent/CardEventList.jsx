export default function CardEventList({ text, time }) { 
  return (
    <div className="mt-3">
      <button className="flex w-full items-center justify-between">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <p className="text-md ml-2 mr-auto font-semibold text-secondary">
          {text}
        </p>

        <p className="text-sm text-primary/50">{time}</p>
      </button>
    </div>
  );
}
