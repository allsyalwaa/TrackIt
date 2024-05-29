import Chart from "../../assets/chart.svg";
import AddBalance from "../ui/AddBalance";
import AddTransaction from "../ui/AddTransaction";
import ButtonPlus from "../ui/ButtonPlus";
import CardBalance from "../ui/CardBalance";
import CardFinancial from "../ui/CardFinancial";
import CardTransactions from "../ui/CardTransactions";

import { useState } from "react";

export default function SecMoneyCalculator() {
  const [isBalancePopupOpen, setIsBalancePopupOpen] = useState(false);
  const [isTransactionPopupOpen, setIsTransactionPopupOpen] = useState(false);

  const handleOpenBalancePopup = () => {
    setIsBalancePopupOpen(true);
  };
  const handleOpenTransactionPopup = () => {
    setIsTransactionPopupOpen(true);
  };

  const handleCloseBalancePopup = () => {
    setIsBalancePopupOpen(false);
  };
  const handleCloseTransactionPopup = () => {
    setIsTransactionPopupOpen(false);
  };

  return (
    <section>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">
            Financial records
          </h1>
          <h2 className="mt-2 text-sm font-semibold text-secondary">
            May 2024
          </h2>
          <div className="mt-4 grid items-center gap-6 md:grid-cols-3 md:justify-center">
            <div>
              <img className="h-20" src={Chart} alt="" />
            </div>
            <div className="col-span-2">
              <CardFinancial text="Income" money="5.000.000" />
              <CardFinancial text="Expenditure" money="5.000.000" />
              <CardFinancial text="Total" money="5.000.000" />
            </div>
          </div>
        </div>
        <div className="relative h-auto rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">Balance</h1>

          <CardBalance text="Balance name" money="5.000.000" />
          <CardBalance text="Balance name" money="5.000.000" />

          <button
            onClick={handleOpenBalancePopup}
            className="mt-3 flex justify-end md:absolute md:bottom-4 md:right-4"
          >
            <ButtonPlus />
          </button>
          {isBalancePopupOpen && (
            <AddBalance onClose={handleCloseBalancePopup} />
          )}
        </div>
      </div>

      <div className="relative mt-3 h-auto rounded-lg border-[1.5px] border-primary p-4 md:h-80">
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

          <button
            onClick={handleOpenTransactionPopup}
            className="flex justify-end md:absolute md:bottom-4 md:right-4"
          >
            <ButtonPlus />
          </button>
          {isTransactionPopupOpen && (
            <AddTransaction onClose={handleCloseTransactionPopup} />
          )}
        </div>
      </div>
    </section>
  );
}
