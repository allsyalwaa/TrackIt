import AddBalance from "../ui/AddBalance";
import AddTransaction from "../ui/AddTransaction";
import ButtonPlus from "../ui/ButtonPlus";
import CardBalance from "../ui/CardBalance";
import CardFinancial from "../ui/CardFinancial";
import CardTransactions from "../ui/CardTransactions";

import SecChart from "./Chart";

import { useState } from "react";

export default function SecMoneyCalculator() {
  const finance = {
    income: 1_000_000,
    expenditure: 2_00_000,
  };
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
          <div className="mt-4 flex flex-col items-center justify-between lg:flex-row">
            <div className="w-1/2">
              <SecChart
                income={finance.income}
                expenditure={finance.expenditure}
              />
            </div>
            <div className="w-full">
              <CardFinancial text="Income" money={finance.income} />
              <CardFinancial
                text="Expenditure"
                type="expenditure"
                money={finance.expenditure}
              />
              <CardFinancial
                text="Total"
                money={finance.income - finance.expenditure}
              />
            </div>
          </div>
        </div>
        <div className="relative h-auto rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">Balance</h1>

          <CardBalance text="Balance name" money="5.000.000" />
          <CardBalance text="Balance name" money="5.000.000" />

          <ButtonPlus
            onClick={handleOpenBalancePopup}
            className={"ml-auto mt-4"}
          />

          {isBalancePopupOpen && (
            <AddBalance onClose={handleCloseBalancePopup} />
          )}
        </div>

        <div className="relative h-auto rounded-lg border-[1.5px] border-primary p-4 md:col-span-2 md:h-80">
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

            <ButtonPlus
              onClick={handleOpenTransactionPopup}
              className="ml-auto"
            />
            {isTransactionPopupOpen && (
              <AddTransaction onClose={handleCloseTransactionPopup} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
