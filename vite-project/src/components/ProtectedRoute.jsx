import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LibraryContext } from "../Context/LibraryContext";

export const ProtectedRoute = ({ children}) => {
    const { currentUser } = useContext(LibraryContext);

    if (!currentUser) {
        return <Navigate to="/login" replace />; //El replace elimina el historial
    }
    return children;
};