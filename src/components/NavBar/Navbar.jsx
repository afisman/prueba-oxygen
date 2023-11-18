import React from 'react';
import { GoArrowSwitch } from "react-icons/go";


import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='navBar_box'>
                <div className='navBar_icon'>
                    <p>
                        <GoArrowSwitch />
                    </p>
                </div>
                <div className='navBar_title'>
                    <h1>
                        unit converter
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar