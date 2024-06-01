import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// санк
// redux-thunk
// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    console.log("Fetching...");
    const response = await axios.get("https://dummyjson.com/todos");
    return response.data;
});

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        // dispatch(addTodo("Learn Redux"))
        addTodo: (state, action) => {
            // return {
            //     ...state,
            //     items: [action.payload, ...state.items]
            // }
            console.log("Action Payload: ", action.payload);
            const newTodo = {
                id: Date.now(),
                todo: action.payload,
                completed: false,
            };
            console.log(newTodo);
            state.items.unshift(newTodo);
        },
        // dispatch(removeTodo(2))
        removeTodo: (state, action) => {
            console.log("~", action.payload);
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.error = null;
                state.items = action.payload.todos;
                console.log(state.items);
            });
    },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, removeTodo } = todosSlice.actions;
