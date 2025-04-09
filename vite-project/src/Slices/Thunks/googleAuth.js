// src/Slices/Thunks/loginWithGoogle.js
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/config'
import { login } from '../authSlice'

export const googleAuth = () => {
    return async (dispatch) => {
    try {
        const result = await signInWithPopup(auth, provider)

        const {email} = result.user
        console.log(email)
        dispatch(login({email}))

    } catch (error) {
        console.error(" Error al iniciar sesión con Google:", error)
        console.error("📩 error.message:", error?.message)
        throw new Error(error?.message || "No se pudo iniciar sesión con Google.")
    }
    }
}
