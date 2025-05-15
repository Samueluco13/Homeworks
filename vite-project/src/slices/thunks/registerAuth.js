import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { register } from "../authSlice";
import { clearError } from "../errorSlice";
import { handleError } from "./error";

export const registerAuth = (email, password, name) => {
    return async (dispatch) => {
        try{
            dispatch(clearError());
            const response = await createUserWithEmailAndPassword(auth, email, password); //Crea un unevo usuario
            console.log("response", response);
            const {uid, email, displayName} = response.user;
            if (response){
                await updateProfile(response.user, {
                    displayName: name
                });
                try{ // Guarda el usuario en Firestore
                    await setDoc(doc(db, "users", response.user.uid), {
                        displayName: name,
                        email: email,
                        uid: uid
                    });
                }catch (error) {
                    dispatch(handleError(error));
                    console.error("Error al guardar usuario en Firestore - ", error);
                }
                dispatch(register({ uid, email, displayName })); //Despacha la accion de registro
                console.log("Usuario registrado: ", response);
            }
        }catch (error) {
            dispatch(handleError(error));
            console.error("Error al registrar usuario", error);
        }
    }
}