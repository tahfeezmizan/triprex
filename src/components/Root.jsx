import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <span className="loading loading-spinner text-error"></span>
                    : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;

