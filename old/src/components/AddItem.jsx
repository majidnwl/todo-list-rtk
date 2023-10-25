import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddItem = ({ setTodos }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");

    const addTodoItem = () => {
        if (title.trim().length > 0) {
            const todo = { id: uuidv4(), title, completed: false };
            dispatch(addTodo(todo));
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
            <span className="addBtn" onClick={addTodoItem}>
                Add
            </span>
        </>
    );
};

export default AddItem;
