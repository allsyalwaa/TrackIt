import { useState, useEffect } from "react";
import AddBalance from "../ui/AddBalance";
import AddTransaction from "../ui/AddTransaction";
import ButtonPlus from "../ui/ButtonPlus";
import CardBalance from "../ui/CardBalance";
import CardFinancial from "../ui/CardFinancial";
import CardTransactions from "../ui/CardTransactions";
import SecChart from "./Chart";
import {
  getFinance,
  getBalance,
  getTransaction,
} from "../../utils/fetchdata/MoneyCalculatorService";

export default function SecMoneyCalculator() {
  const [finance, setFinance] = useState({
    income: 0,
    expenditure: 0,
  });
  const [balance, setBalance] = useState([]);
  const [transaction, setTransaction] = useState([]);

  const [isLoadingFinance, setIsLoadingFinance] = useState(true);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const [isLoadingTransaction, setIsLoadingTransaction] = useState(true);

  useEffect(() => {
    getFinance().then((data) => {
      setFinance(data);
      setIsLoadingFinance(false);
    });
  }, []);

  useEffect(() => {
    getBalance().then((data) => {
      setBalance(data);
      setIsLoadingBalance(false);
    });
  }, []);

  useEffect(() => {
    getTransaction().then((data) => {
      const sortedTransactions = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      setTransaction(sortedTransactions);
      setIsLoadingTransaction(false);
    });
  }, []);

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

  const handleDeleteTransaction = (transactionId) => {
    setTransaction(
      transaction.filter((transaction) => transaction.id !== transactionId),
    );
  };

  return (
    <section>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">
            Financial records
          </h1>
          <h2 className="mt-2 text-sm font-semibold text-secondary">
            {finance.month} {finance.year}
          </h2>
          <div className="mt-4 flex flex-col items-center justify-between lg:flex-row">
            {isLoadingFinance ? (
              <p className="w-full text-start text-sm text-primary">
                Loading...
              </p>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col rounded-lg border-[1.5px] border-primary p-4">
          <h1 className="text-xl font-semibold text-primary">Balance</h1>
          {isLoadingBalance ? (
            <p className="text-sm text-primary">Loading...</p>
          ) : balance.length > 0 ? (
            balance.map((balance) => (
              <CardBalance
                key={balance.id}
                text={balance.name}
                money={balance.money}
              />
            ))
          ) : (
            <p className="text-sm text-primary">No balance found</p>
          )}
          <ButtonPlus
            onClick={handleOpenBalancePopup}
            className={"ml-auto mt-auto"}
          />
          {isBalancePopupOpen && (
            <AddBalance onClose={handleCloseBalancePopup} />
          )}
        </div>
        <div className="flex h-auto flex-col  rounded-lg border-[1.5px] border-primary py-4 md:col-span-2 md:h-72">
          <h1 className="px-4 text-xl font-semibold text-primary">
            Transactions
          </h1>
          <div className=" mt-2 flex h-full flex-col gap-2 overflow-auto px-4">
            {isLoadingTransaction ? (
              <p className="text-center text-sm text-primary">Loading...</p>
            ) : transaction.length > 0 ? (
              transaction.map((transaction) => (
                <CardTransactions
                  key={transaction.name + transaction.id}
                  text1={transaction.name}
                  text2={transaction.balance_name}
                  money={transaction.money}
                  transactionId={transaction.id}
                  onDelete={handleDeleteTransaction}
                />
              ))
            ) : (
              <p className="text-center text-sm text-primary">
                No transactions found
              </p>
            )}
            <ButtonPlus
              onClick={handleOpenTransactionPopup}
              className="sticky bottom-0 ml-auto mt-auto shrink-0"
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
