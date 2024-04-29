import React, { useEffect, useState } from 'react';
import { CiLogout } from 'react-icons/ci';
import { TbUserEdit } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import UseAuth from '../../Hook/UseAuth';
import './Navbar.css'

const Navbar = () => {
    const { logOut, user } = UseAuth();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    console.log(theme)

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/alltouristspot'>All Tourists Spot</NavLink></li>
        {/* <li><NavLink to='/countrycategories'>Country</NavLink></li> */}
        {user?.email ?
            <> <li><NavLink to='/addtourisspot'>Add Tourists Spot</NavLink></li>
                <li><NavLink to='/mylist'>My List</NavLink></li>
            </> : ''
        }
    </>

    return (
        <div className="navMenu py-2">
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto navbar ">
                <div className="navbar-start">
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
                <div className="navbar-end z-[1000]">
                    <label className="cursor-pointer grid place-items-center ">
                        <input
                            onChange={handleToggle}
                            type="checkbox"

                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>

                    {user?.email ?
                        <div className="dropdown dropdown-end" data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {/* <Tooltip anchorSelect=".my-anchor-element" place="top">
                                    </Tooltip> */}
                                    <img
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user?.displayName.toUpperCase()}
                                        alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    <Tooltip id="my-tooltip" place='right' />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-4 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <p className="text-xl text-center font-bold capitalize mb-3">{user.displayName}</p>
                                    <NavLink to="/profile" className="profileLink text-xl mb-3 flex items-center hover:bg-blue-300"><span className=""><TbUserEdit /></span>Profile</NavLink>
                                </li>
                                <li>
                                    <button onClick={logOut} className="logout text-xl mb-3 flex items-center"><span className=""><CiLogout /></span> LogOut</button>
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