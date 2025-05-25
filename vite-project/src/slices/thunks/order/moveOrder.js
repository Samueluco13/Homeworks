import {moveTo} from "../../orderSlice.js"

export const moveOrder = (clasificacion) => {
    return async (dispatch) => {
        dispatch(moveTo({clasificacion}))
    }
}