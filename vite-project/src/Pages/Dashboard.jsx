import { useSelector } from "react-redux"
import { logoutAuth } from "../Slices/Thunks/logoutAuth"
import { useDispatch } from "react-redux"

export const Dashboard = () => {
    const {displayName, email, status} = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const handleLogOut = async () => {
        await dispatch(logoutAuth())
        console.log(email, "|", status)
    }

    return (
        <>
            <h1>Dashboard</h1>
            <hr />
            <h3>Estás logueado</h3>
            <p><strong>User Name:</strong> {displayName}</p>
            <p><strong>Email:</strong> {email}</p>
            <button onClick={handleLogOut}> Cerrar sesión </button>
        </>
    )
}