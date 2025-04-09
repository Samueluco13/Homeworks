import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { register } from '../authSlice'

export const registerAuth = (email, password) => {
    return async (dispatch) =>{
        const response = await createUserWithEmailAndPassword(auth, email, password) //Espera a que firebase cree correctamente el usuario
        if (response){
            await updateProfile(auth.currentUser, { //Actualiza el perfil que se acaba de crear con un username y una pfp
                displayName: "Usuario1",
                photoURL: "https://unavatar.io/user1"
            })
            const {email} = response.user; //Toma el correo del ususario recien creado
            dispatch(register({email})) //Despacha la acción de redux "register" tomando como parametro el correo antes tomado
        }else{
            console.log("Error al registrar")
            throw new Error("Register failed") //Manejo de error
        }
    }
}
