import { createSlice } from "@reduxjs/toolkit";

const counterSlice  = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        incrementbyValue: (state, action) => {
            state.count += action.payload
        },
        decrementByValue: (state, action) => {
            state.count -= action.payload
        }
    }
})

export const {incrementbyValue, decrementByValue} = counterSlice.actions;

export default counterSlice.reducer;