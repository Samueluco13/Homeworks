import { create } from "../../orderSlice";
import {useCollection} from "../../useCollection"

export const createOrder = (descripcion, precio, talla, userId) => {
    const {add} = useCollection("pedidos");
    return async(dispatch) => {
        try{
            let newPedido = {descripcion, precio, talla, userId}
            const pedi = await add(newPedido);
            console.log("A ver: ", pedi);
            if(pedi){
                dispatch(create({pedidoId: pedi.id, descripcion, precio, talla, userId}))
            }
            else return;
        }catch(error){
            console.log("Error al crear un pedido - ", error)
        }
    }
}