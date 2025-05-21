import {moveTo} from "../../orderSlice.js"

export const moveOrder = (clasificacion) => {
    return async (dispatch) => {
        try{
            dispatch(moveTo({clasificacion}))
        }catch(error){
            console.log("Error el mover desde redux")
        }
    }
}