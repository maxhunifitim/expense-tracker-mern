import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  let income = 0;
  let expense = 0;

  amounts.map((amount) =>
    amount > 0 ? (income += amount) : (expense -= amount)
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
