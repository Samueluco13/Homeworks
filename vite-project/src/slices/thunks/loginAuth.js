import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {login} from "../authSlice";
import {clearError} from "../errorSlice";
import {handleError} from "./error";

export const loginAuth = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(clearError());
            const response = await signInWithEmailAndPassword(auth, email, password);
            if(response){
                console.log("Usuario logueado", response);
                const {email} = response.user;
                dispatch(login({email}));
            }
        } catch (error) {
            dispatch(handleError(error));
            console.error("Error al iniciar sesion", error);
        }
    }
}