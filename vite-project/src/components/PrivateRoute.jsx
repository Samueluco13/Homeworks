import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    const {logged} = useSelector((state) => state.auth) //Toma el estado de logueo de authSlice

    if (logged === false) {
        return <Navigate to={"/"} />
    }

    return children;
}
