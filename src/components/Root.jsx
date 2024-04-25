import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;


git init  
>> git add .
>> git commit -m "Setup basic project, install some packages, create routes"     
>> git branch -M main                                                            
>> git remote add origin https://github.com/programming-hero-web-course-4/B9A10-client-side-tahfeezmizan.git