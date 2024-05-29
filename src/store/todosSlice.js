import { createSlice } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        // dispatch(addTodo("Learn Redux"))
        addTodo: (state, action) => {
            state.items.unshift(action.payload)
        }    
    }
})