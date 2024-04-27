import React from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Navigate } from 'react-router-dom';

const RotectedRoute = ({children}) => {
    const { user } = UseAuth();

    if (user) {
        return children
    }
    return <Navigate to="login"></Navigate>
};

export default RotectedRoute;