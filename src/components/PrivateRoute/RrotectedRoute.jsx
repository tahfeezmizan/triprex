import React from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Navigate } from 'react-router-dom';

const RrotectedRoute = () => {
    const { user } = UseAuth();

    if (user) {
        children
    }
    return <Navigate to="login"></Navigate>
};

export default RrotectedRoute;