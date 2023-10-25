import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);

    let listTodos = todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />;
    });

    return <ul id="myUL">{listTodos}</ul>;
};

export default TodoList;
