import React from 'react'
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Header = () => {
    return (
        <header className='header'>
            <h1>SWAPI</h1>
            <nav className='navigation'>  
                <ul className="navigation-list">
                    <li><NavLink exact to="/">Root</NavLink> </li>
                    <li><NavLink to="/people">People</NavLink></li> 
                    <li><NavLink to="/graphic">Graphic</NavLink></li>
                </ul> 
            </nav>
        </header>
    )
} 