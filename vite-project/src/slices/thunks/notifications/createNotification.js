import {create} from "../../notificationSlice"

export const createNotification = (mensaje, userId, pedidoId) => {
    return async (dispatch) => {
        try{
            dispatch(create({mensaje, userId, pedidoId}))
        }catch(error){
            console.log("Error al crear una notificacion: ", error)
        }
    }
}