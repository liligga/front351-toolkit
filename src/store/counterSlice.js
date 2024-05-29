import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 100
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        // dispatch(counterActions.incrementCounter())
        incrementCounter: (state) => {
            // return { ...state, value: state.value + 1 } - старый способ менять состояние
            // Immer - похволяет изменять состояние напрямую
            state.value += 1
        },
        decrementCounter: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        }
    }
})

export const counterReducer = counterSlice.reducer
export const { incrementCounter, decrementCounter } = counterSlice.actions
// export const counterActions = counterSlice.actions

