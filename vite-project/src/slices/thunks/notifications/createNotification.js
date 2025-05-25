import {create} from "../../notificationSlice"

export const createNotification = (mensaje, userId, pedidoId) => {
    return async (dispatch) => {
        dispatch(create({mensaje, userId, pedidoId}));
    }
}