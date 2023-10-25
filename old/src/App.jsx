import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/todos")
    //         .then((res) => {
    //             setTodos(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //         .finally(() => {});
    // }, []);

    return (
        <>
            <Header setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
}








