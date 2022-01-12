import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ _id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const isIncome = amount > 0;
  return (
    <li className={isIncome ? "plus" : "minus"}>
      {text}{" "}
      <span>
        {isIncome ? `+` : "-"}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(_id)}>
        x
      </button>
    </li>
  );
};
