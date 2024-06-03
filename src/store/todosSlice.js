import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// санк
// redux-thunk
// dispatch(fetchTodos())
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await axios.get("https://dummyjson.com/todos");
    return response.data;
});

// dispatch(deleteTodo(1))
export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (todoId) => {
        const response = await axios.delete(`https://dummyjson.com/todos/${todoId}`)
        return response.data;
    }
)

// dispatch(createTodo({userId: 1, todo: "Learn Redux", completed: false}))

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
                console.log(action.error)
                state.error = action.error.message;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.error = null;
                state.items = action.payload.todos;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                console.log(action.payload)
                const found = state.items.findIndex(el => el.id === action.payload.id);
                if (found > -1) {
                    state.items.splice(found, 1)
                }
            }) 
    },
});

export const todosReducer = todosSlice.reducer;
export const { addTodo, removeTodo } = todosSlice.actions;

// Redux Toolkit Query