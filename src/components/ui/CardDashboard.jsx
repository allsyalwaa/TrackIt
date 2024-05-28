export default function CardDashboard({ text1, text2, image }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary p-3">
      <h3 className="text-xl font-bold text-primary">{text1}</h3>
      {<img className="h-20" src={image} alt="" />}
      <p className="text-center text-sm font-medium text-primary/50">{text2}</p>
    </div>
  );
}
