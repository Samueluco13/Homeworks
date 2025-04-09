import { useSelector } from "react-redux"
import { logoutAuth } from "../Slices/Thunks/logoutAuth"
import { useDispatch } from "react-redux"

export const Dashboard = () => {
    const {email, status} = useSelector((state) => state.auth)

    console.log(email, "|", status)

    const dispatch = useDispatch()


    const handleLogOut = async () => {
        await dispatch(logoutAuth())
        console.log(email, "|", status)
    }


    return (
        <>
            <h1>Dashboard</h1>
            <hr />
            <h3>Estás logueado, tu correo es:</h3>
            <p><strong>Email:</strong> {email}</p>
            <button onClick={handleLogOut}> Cerrar sesión </button>
        </>
    )
}
