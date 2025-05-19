import {createSlice} from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        pedidoId: null,
        descripcion: null,
        precio: null,
        talla: null,
        userId: null
        // categoria: "recibidos"
    },
    reducers: {
        create: (state, action) => {
            state.pedidoId = action.payload.pedidoId;
            state.descripcion = action.payload.descripcion;
            state.precio = action.payload.precio;
            state.talla = action.payload.talla;
            state.userId = action.payload.userId
        },
        remove: (state, action)  => {
            state.pedidoId = null;
            state.descripcion = null;
            state.precio = null;
            state.talla = null;
            state.pedidoId = null;
        }
    }
});

export const {create, remove} = orderSlice.actions;