import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <menu className='menu'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about-us">About Us</a>
            </menu>
        </div>
    );
};

export default Header;