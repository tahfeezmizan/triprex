import React from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const RotectedRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation()
    console.log(location)

    // if (loading) {
    //     return <span className="loading loading-spinner text-error"></span>
    // }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default RotectedRoute;