import {createSlice} from "@reduxjs/toolkit"

export const notificationSlice = createSlice({
    name: "notifications",
    initialState: {
        mensaje: null,
        userId: null,
        pedidoId: null,
        notiCounter: 0
    },
    reducers: {
        create: (state, action) => {
            state.mensaje = action.payload.mensaje;
            state.userId = action.payload.userId;
            state.pedidoId = action.payload.pedidoId;
            state.notiCounter += 1;
        },
        remove: (state, action) => {
            state.mensaje = null;
            state.userId = null;
            state.pedidoId = null;
            state.notiCounter -= 1;
        }
    }
})
export const {create, remove} = notificationSlice.actions;