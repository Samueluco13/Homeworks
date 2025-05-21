import { useCollection } from '../slices/useCollection'
import { moveOrder } from '../slices/thunks/order/moveOrder';
import {useDispatch} from 'react-redux'

export const moveOrderTo = () => {

    const dispatch = useDispatch();

    const {update} = useCollection("pedidos")

    const handleMoveTo = async (id, clasificacion) => {
        const actualizaciones = {clasificacion: clasificacion}
        try{
            const actualizado = await update(id, actualizaciones)
            console.log(actualizado);
            console.log(actualizado.data());
            if(actualizado){
                try{
                    const laActualizacion = dispatch(moveOrder(clasificacion));
                    console.log(laActualizacion);
                }catch(error){
                    console.log("Error en la actualizacion de redux: ", error);
                }
            }
        }catch(error){
            console.log("Error al actualziar desde firebase: ", error);
        }
    }

    return {handleMoveTo}
}
