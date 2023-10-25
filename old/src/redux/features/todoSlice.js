import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id == action.payload) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;