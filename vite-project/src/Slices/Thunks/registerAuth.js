import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/config'
import { setUser } from '../authSlice'

export const registerAuth = (displayname, email, password) => {
    return async (dispatch) =>{
        const response = await createUserWithEmailAndPassword(auth, email, password) //Espera a que firebase cree correctamente el usuario
        let displayName = displayname //Crea una variable con el displayName que se le pasa como parametro
        if (response){
            await updateProfile(auth.currentUser, { //Actualiza el perfil que se acaba de crear con un username y una pfp
                displayName, //Settea el displayName con la variable antes creada
                photoURL: "https://unavatar.io/user1"
            })
            console.log(auth.currentUser) //Muestra el usuario en consola
            const {email} = response.user; //Toma el correo del ususario recien creado
            dispatch(setUser({email})) //Despacha la acción de redux "register" tomando como parametro el correo antes tomado
        }else{
            console.log("Error al registrar")
            throw new Error("Register failed") //Manejo de error
        }
    }
}
