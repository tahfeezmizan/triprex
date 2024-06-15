import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
    

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

