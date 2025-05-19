import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { errorSlice } from "./errorSlice";
import { orderSlice } from "./orderSlice";
import { notificationSlice } from "./notificationSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        error: errorSlice.reducer,
        order: orderSlice.reducer,
        noti: notificationSlice.reducer
    }
});