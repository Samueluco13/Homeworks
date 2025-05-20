import { create } from "../../orderSlice";
import {useCollection} from "../../useCollection"

export const createOrder = (descripcion, precio, talla, productId, userId) => {
    const {add} = useCollection("pedidos");
    return async(dispatch) => {
        try{
            let newPedido = {descripcion, precio, talla, productId, userId};
            const order = await add(newPedido);
            console.log("A ver: ", order);
            if(order){
                dispatch(create({orderId: order.id, descripcion, precio, talla, productId, userId}));
            }
            else return;
        }catch(error){
            console.log("Error al crear un pedido - ", error)
        }
    }
}