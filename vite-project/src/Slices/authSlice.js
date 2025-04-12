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
        setUser: (state, action) => {
            state.displayName = action.payload.displayName
            state.email = action.payload.email
        },
        login: (state, action) => {
            state.status = 'authenticated'
            state.displayName = action.payload.displayName
            state.email = action.payload.email
        },
        logout: (state, action) => {
            state.status = "not authenticated",
            state.displayName = null,
            state.email = null
        },
        checkingCredentials: (state, action) => {
            console.log("checking")
        }
    }
})

export const {setUser, login, logout, checkingCredentials} = authSlice.actions