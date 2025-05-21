import { create } from "../../orderSlice";

export const createOrder = (orderId, descripcion, precio, talla, productId, userId, clasificacion) => {
    return async(dispatch) => {
        try{
                dispatch(create({orderId, descripcion, precio, talla, productId, userId, clasificacion}));
        }catch(error){
            console.log("Error al crear un pedido - ", error)
        }
    }
}