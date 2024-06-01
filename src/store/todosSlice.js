import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        // dispatch(addTodo("Learn Redux"))
        addTodo: (state, action) => {
            // return {
            //     ...state,
            //     items: [action.payload, ...state.items]
            // }
            console.log("Action Payload: ", action.payload)
            const newTodo = {
                id: Date.now(),
                name: action.payload,
                completed: false
            }
            console.log(newTodo)
            state.items.unshift(newTodo)
        },
        // dispatch(removeTodo(2))
        removeTodo: (state, action) => {
            console.log("~", action.payload)
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const todosReducer = todosSlice.reducer
export const { addTodo, removeTodo } = todosSlice.actions