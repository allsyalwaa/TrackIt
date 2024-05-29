export default function CardFinancial({ text, money }) {
  return (
    <div className=" md:text-normal mx-auto mt-2 grid grid-cols-2 text-sm">
      <h1 className="font-medium text-primary/50 ">{text} :</h1>

      <p className="flex justify-end font-medium text-primary">Rp {money},00</p>
    </div>
  );
}
