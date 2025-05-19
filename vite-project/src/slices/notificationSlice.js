import {createSlice} from "@reduxjs/toolkit"

export const notificationSlice = createSlice({
    name: "noti",
    initialState: {
        mensaje: null,
        userId: null
    },
    reducers: {
        createNoti: (state, action) => {
            state.mensaje = action.payload.mensaje;
            state.userId = action.payload.userId;
        }
    }
})