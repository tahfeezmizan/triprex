import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { TbUserEdit } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import './Navbar.css'

const Navbar = () => {
    const { logOut, user } = UseAuth();

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/alltouristspot'>All Tourists Spot</NavLink></li>
        {/* <li><NavLink to='/About'>About</NavLink></li> */}
        {user?.email ?
            <> <li><NavLink to='/addtourisspot'>Add Tourists Spot</NavLink></li>
                <li><NavLink to='/mylist'>My List</NavLink></li>
            </> : ''

        }
        {/* <li><NavLink to='/blog'>Blog</NavLink></li> */}
        {/* <li><NavLink to='/contact'>Contact</NavLink></li> */}
    </>
    // absolute left-0 right-0 top-0 z-50 
    return (
        <div className="navMenu py-2">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto  navbar">
                <div data-aos="fade-right" data-aos-duration="1300" className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl uppercase Sitelogo">
                        {/* <img src={sitelogo} className="w-28" alt="" /> */}
                        <h2 className="text-3xl">TripRex</h2>
                    </NavLink>
                </div>
                <div data-aos="fade-down" data-aos-duration="1300" className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 felx">
                        {links}
                    </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="1300" className="navbar-end z-[1000]">
                    {user?.email ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="text-xl text-center font-bold capitalize mb-3">{user.displayName}</p>
                                    <NavLink to="/profile" className="profileLink text-xl mb-3 flex items-center hover:bg-blue-300"><span className="text-blue-600"><TbUserEdit /></span>Profile</NavLink>
                                </li>
                                <li>
                                    <button onClick={logOut} className="text-xl mb-3 flex items-center hover:bg-blue-300"><span className="text-blue-600"><CiLogout /></span> LogOut</button>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="flex gap-4">
                            <NavLink className="btn btn-outline bg-primaryColor font-semibold text-base" to="/login">Login</NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;