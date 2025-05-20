import { create } from "../../orderSlice";

export const createOrder = (orderId, descripcion, precio, talla, productId, userId, estado) => {
    return async(dispatch) => {
        try{
                dispatch(create({orderId, descripcion, precio, talla, productId, userId, estado}));
        }catch(error){
            console.log("Error al crear un pedido - ", error)
        }
    }
}