import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        uid: null,
        displayName: null,
        logged: false,
        email: null,
    },
    reducers: {
        register: (state, action) => {
            state.uid = action.payload.uid;
            state.eamail = action.payload.email;
            state.displayName = action.payload.displayName;
        },
        login: (state, action) => {
            state.uid = action.payload.uid;
            state.logged = true;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.uid = null,
            state.logged = false;
            state.displayName = null;
            state.email = null;
        }
    }
})

export const { register, login, logout } = authSlice.actions;