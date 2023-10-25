import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, updateTodoAction } from "../redux/features/todoSlice";

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();
    return (
        <li className={clsx({ checked: todo.completed })}>
            <span
                onClick={() => dispatch(
                    updateTodoAction({ ...todo, completed: !todo.completed })
                )}
            >
                {todo.title}
            </span>
                <span className="close"
                onClick={() => dispatch(deleteTodoAction(todo.id))}>x</span>
        </li>
    );
};

export default ListItem;
