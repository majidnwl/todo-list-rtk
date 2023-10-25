import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { listTodosAction } from "../redux/features/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    useEffect(() => {
        dispatch(listTodosAction());
    }, []);

    return (
        <ul id="myUL">
            {todos.map((todo) => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
