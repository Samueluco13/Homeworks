import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Slices"


export const Store = configureStore({
    reducer: {
        counter: counterReducer
    }
})