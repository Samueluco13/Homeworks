import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase/config'
import { setUser } from '../authSlice'

export const googleAuth = () => {
    return async (dispatch) => {
    try {
        const result = await signInWithPopup(auth, provider)

        const {displayName, email} = result.user
        console.log(result.user)
        dispatch(setUser({displayName, email}))

    } catch (error) {
        console.error(" Error al iniciar sesión con Google:", error)
        console.error("📩 error.message:", error?.message)
        throw new Error(error?.message || "No se pudo iniciar sesión con Google.")
    }
    }
}
