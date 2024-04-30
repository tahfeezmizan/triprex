import React from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RotectedRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const location = useLocation()
    const navigate = useNavigate()

    // console.log(location);
    // console.log(navigate);

    // if (loading) {
    //     return <span className="loading loading-spinner text-error text-5xl"></span>
    // }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default RotectedRoute;