import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { ProductDetails } from '../pages/ProductDetails'

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={
                <PrivateRoute roles={"usuario"} > 
                    <Dashboard/>
                </PrivateRoute>
            } />
            <Route path='/product-details/:id' element={
                <PrivateRoute roles={"usuario"} > 
                    <ProductDetails/>
                </PrivateRoute>
            } />
        </Routes>
    )
}
