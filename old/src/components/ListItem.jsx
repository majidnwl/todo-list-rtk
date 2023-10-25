import axios from "axios";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/features/todoSlice";

const ListItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className={clsx({ checked: todo.completed == true })}>
            <span onClick={() => dispatch(updateTodo(todo.id))}>{todo.title}</span>
            <span
                className="close"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                x
            </span>
        </li>
    );
};

export default ListItem;
