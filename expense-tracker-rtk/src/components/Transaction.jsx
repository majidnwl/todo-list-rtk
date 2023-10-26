import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransactionAction } from "../redux/features/transactionsSlice";

const Transaction = ({ transaction }) => {
    const dispatch = useDispatch();
    return (
        <li className={+transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}{" "}
            <span>
                {+transaction.amount > 0 ? "" : "-"}$
                {Math.abs(transaction.amount)}
            </span>
            <button
                className="delete-btn"
                onClick={() =>
                    dispatch(deleteTransactionAction(transaction.id))
                }
            >
                x
            </button>
        </li>
    );
};

export default Transaction;
