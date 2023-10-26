import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Balance = () => {
    const transactions = useSelector((state) => state.transaction.transactions);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        let value = 0;
        for (let i = 0; i < transactions.length; i++) {
            value += +transactions[i].amount;
        }
        setBalance(value);
    }, [transactions]);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </>
    );
};

export default Balance;
