import { create } from "../../orderSlice";

export const createOrder = (orderId, descripcion, precio, talla, productId, userId) => {
    return async(dispatch) => {
        try{
                dispatch(create({orderId, descripcion, precio, talla, productId, userId}));
        }catch(error){
            console.log("Error al crear un pedido - ", error)
        }
    }
}