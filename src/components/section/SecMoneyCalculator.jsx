import Chart from "../../assets/chart.svg";
import ButtonPlus from "../ui/ButtonPlus";
import CardBalance from "../ui/CardBalance";
import CardTransactions from "../ui/CardTransactions";

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

          <CardBalance text="Balance name" money="5.000.000" />
          <CardBalance text="Balance name" money="5.000.000" />

          <div className="absolute right-4 top-[136px]">
            <ButtonPlus />
          </div>
        </div>
      </div>

      <div className="relative mt-3 h-80 rounded-lg border-[1.5px] border-primary p-4">
        <h1 className="text-xl font-semibold text-primary">Transactions</h1>
        <div className="mt-2 flex flex-col gap-2">
          <CardTransactions
            text1="Transaction name"
            text2="Balance name"
            money="5.000.000"
          />
          <CardTransactions
            text1="Transaction name"
            text2="Balance name"
            money="5.000.000"
          />
          <CardTransactions
            text1="Transaction name"
            text2="Balance name"
            money="5.000.000"
          />

          <div className="absolute bottom-4 right-4">
            <ButtonPlus />
          </div>
        </div>
      </div>
    </section>
  );
}
