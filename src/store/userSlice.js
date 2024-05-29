import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            phone: ""
        }
    },
    reducers: {
        // dispatch(setUserName("Igor"))
        setUserName: (state, action) => {
            state.user.name = action.payload
        },
        // dispatch(setUserData(
        //     { name: "Igor", email: "XQqoH@example.com", phone: "1234567890", profile: "public" }
        // ))
        setUserData: (state, action) => {
            state.user = action.payload
        }
    }
})

export const userReducer = userSlice.reducer
export const { setUserName, setUserData } = userSlice.actions