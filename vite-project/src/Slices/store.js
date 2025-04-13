import {configureStore} from '@reduxjs/toolkit'
import { authSlice } from './authSlice'
import {firebaseSlice} from './firebaseSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        firebase: firebaseSlice.reducer
    }
})