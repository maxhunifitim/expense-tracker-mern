import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    // console.log("GET_TRANSACTIONS ", getTransactions());
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} {...transaction} />
        ))}
      </ul>
    </>
  );
};
