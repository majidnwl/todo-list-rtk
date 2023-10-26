import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactionAction } from "../redux/features/transactionsSlice";

const AddTransaction = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 0 && +amount != 0) {
            dispatch(addTransactionAction({ text, amount }));
            setAmount(0);
            setText('');
        } else {
            alert('Kindly enter valid inputs')
        }
    };
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">
                    Add transaction
                </button>
            </form>
        </>
    );
};

export default AddTransaction;
