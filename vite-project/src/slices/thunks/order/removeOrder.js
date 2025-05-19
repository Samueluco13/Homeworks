import { remove } from "../../orderSlice";
import { useCollection } from "../../useCollection"


export const removeOrder = (pedidoId, descripcion, precio, talla, userId) => {
    const {dltDoc} = useCollection("pedidos");
    return async(dispatch) => {
        try{
            let elim = await dltDoc(pedidoId);
            console.log("Supuesto: ", elim)
            if(elim){
                dispatch(remove({pedidoId, descripcion, precio, talla, userId}));
            }else return;
        }catch(error){
            console.log("Error al eliminar pedido - ", error)
        }
    }
}