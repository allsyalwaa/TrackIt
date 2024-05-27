/* eslint-disable react/prop-types */
export default function CardAbout({ text }) {
  return (
    <div className="flex items-center gap-4">
      <div className="size-6 flex-shrink-0 rounded-full bg-primary"></div>
      <p className="text- text-lg font-medium text-primary">{text}</p>
    </div>
  );
}
