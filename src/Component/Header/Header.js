import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-lg font-medium'>
            <Link className='px-5' to='/'>Home</Link >
            <Link className='px-5' to='/review'>Review</Link>
            <Link className='px-5' to='/dashboard'>Dashboard</Link>
            <Link className='px-5' to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;