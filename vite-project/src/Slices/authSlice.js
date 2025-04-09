import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "checking",
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
        },
        login: (state, action) => {
            state.status = 'authenticated'
            state.email = action.payload.email
        },
        logout: (state, action) => {
            state.status = "not authenticated",
            state.email = null
        },
        checkingCredentials: (state, action) => {
            console.log("checking")
        }
    }
})

export const {register, login, logout, checkingCredentials} = authSlice.actions