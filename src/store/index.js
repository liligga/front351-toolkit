import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./userSlice";
import { counterReducer } from "./counterSlice";
import { todosReducer } from "./todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        todos: todosReducer,
    }
})
