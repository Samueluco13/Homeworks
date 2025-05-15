import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { errorSlice } from "./errorSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        error: errorSlice.reducer
    }
});