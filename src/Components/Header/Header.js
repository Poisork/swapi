import React from 'react'
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import { withTranslation } from 'react-i18next';
 

const Header = ({i18n,t}) => {
    const languages = ['en','ru'] 
    const handleChange = ({target: {value}}) => { 
        i18n.changeLanguage(value)
    } 
    return (
        <header className='header'>
            <h1>SWAPI</h1>
            <div>
                <p>{t('set_lang')}</p>
                <select 
                    value={i18n.language}
                    onChange={handleChange}
                >
                    {languages.map((lang,i) => (
                        <option key={i} value={lang}>
                            {lang}
                        </option>
                    ))}
                </select>
            </div>
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

export default withTranslation()(Header)