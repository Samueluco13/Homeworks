import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { checkingCredentials } from '../authSlice'
import { login } from '../authSlice'

export const loginAuth = (email, password) =>{
    return async (dispatch) => {
        dispatch(checkingCredentials()) //Despacha la funcion de "carga"
        try{
            const response = await signInWithEmailAndPassword(auth, email, password) //Espera a que firebase tome las credenciales e intente loggear al user

            if(response){
                const {displayName, email} = response.user //Si el login es correcto, toma el email y el display name del usuario logueado
                dispatch(login({displayName, email})) //Despacha la funcion "login" con estos atributos
                //ES NECESARIO PONER LOS ATRIBUTOS ENTRE LLAVES
            }            
            
        } catch{
            throw new Error("Login failed") //Manejo del error
        }
    }
}