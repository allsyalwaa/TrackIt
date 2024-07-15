import { rupiahFormat } from "../../../utils";
export default function CardFinancial({ text, money, type = "income" }) {
  return (
    <div className=" md:text-normal mx-auto mt-2 flex justify-between text-sm">
      <h1 className="font-medium text-primary/50 ">{text} :</h1>

      <p
        className={`flex justify-end font-medium  
          ${type === "income" && "text-primary"}  
          ${type === "expenditure" && "text-[#EE0C00]"}
          `}
      >
        {rupiahFormat(money)}
      </p>
    </div>
  );
}
