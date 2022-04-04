import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-lg font-medium space-x-6 shadow py-5 '>
            <NavLink className={({ isActive }) => (isActive ? "text-cyan-500" : "text-black")} to='/'>Home</NavLink >
            <NavLink className={({ isActive }) => (isActive ? "text-cyan-500" : "text-black")} to='/review'>Review</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-cyan-500" : "text-black")} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-cyan-500" : "text-black")} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-cyan-500" : "text-black")} to='/about'>About</NavLink>
        </div>
    );
};

export default Header;