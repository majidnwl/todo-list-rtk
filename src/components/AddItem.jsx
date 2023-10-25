import React, { useState } from "react";
import { addTodoAction } from "../redux/features/todoSlice";
import { useDispatch } from "react-redux";

const AddItem = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const addTodo = () => {
        if (title.trim().length > 0) {
            dispatch(addTodoAction({ title, completed: false }));
            setTitle('')
        } else {
            alert('Kindly enter title')
        }
    };
    return (
        <>
            <input
                type="text"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <span className="addBtn" onClick={addTodo}>
                Add
            </span>
        </>
    );
};

export default AddItem;
