import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    'todos': []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        listItems: (state, action) => {
            state.todos = action.payload
        },
        addItem: (state, action) => {
            // state.todos = [...state.todos, action.payload]
            state.todos.push(action.payload);
        },
        updateItem: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload.id) {
                    return action.payload
                } else {
                    return todo;
                }
            })
        },
        deleteItem: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }
})

export const { listItems, addItem, updateItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;

export const deleteTodoAction = (id) => async dispatch => {
    axios.delete(`http://localhost:8000/todos/${id}`)
    .then(res => {
        dispatch(deleteItem(id));
    })
}

export const updateTodoAction = (todo) => async dispatch => {
    axios.put(`http://localhost:8000/todos/${todo.id}`, todo)
        .then(res => {
            dispatch(updateItem(res.data));
        })
}
export const listTodosAction = () => async dispatch => {
    axios.get('http://localhost:8000/todos')
        .then(res => {
            dispatch(listItems(res.data));
        })
}
export const addTodoAction = (todo) => async dispatch => {
    axios.post('http://localhost:8000/todos', todo)
        .then(res => {
            dispatch(addItem(res.data))
        })
}