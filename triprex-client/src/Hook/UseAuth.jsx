import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';

const UseAuth = () => {
    const allContextData = useContext(AuthContext);
    return allContextData
};

export default UseAuth;