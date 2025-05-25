import {createSlice} from "@reduxjs/toolkit"

export const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        mensaje: null,
        userId: null,
        pedidoId: null
    },
    reducers: {
        create: (state, action) => {
            state.mensaje = action.payload.mensaje;
            state.userId = action.payload.userId;
            state.pedidoId = action.payload.pedidoId;
        },
        remove: (state, action) => {
            state.mensaje = null;
            state.userId = null;
            state.pedidoId = null;
        }
    }
})
export const {create, remove} = notificationSlice.actions;