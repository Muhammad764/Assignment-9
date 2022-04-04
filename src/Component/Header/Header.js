import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-lg font-medium'>
            <NavLink className='px-5 {({ isActive }) => (isActive ? "text-cyan-500" : "text-black")}' to='/'>Home</NavLink >
            <NavLink className='px-5 {({ isActive }) => (isActive ? "text-cyan-500" : "text-black")}' to='/review'>Review</NavLink>
            <NavLink className='px-5' to='/dashboard'>Dashboard</NavLink>
            <NavLink className='px-5' to='/blogs'>Blogs</NavLink>
            <NavLink  to='/about'>About</NavLink>
        </div>
    );
};

export default Header;