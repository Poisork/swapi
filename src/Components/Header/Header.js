import React from 'react'
import {NavLink} from 'react-router-dom'
import './navigation.scss'
import {withTranslation} from 'react-i18next'
import T from 'prop-types'

const Header = ({i18n, t = () => {}}) => {
  const languages = ['en', 'ru']
  const handleChange = ({target: {value}}) => {
    i18n.changeLanguage(value)
  }
  return (
    <header className='header'>
      <h1>SWAPI</h1>
      <div>
        <p>{t('set_lang')}</p>
        <select value={i18n.language} onChange={handleChange}>
          {languages.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li>
            <NavLink exact to='/'>
              {t('Root')}
            </NavLink>
          </li>
          <li>
            <NavLink to='/entity'>{t('Entities')}</NavLink>
          </li>
          <li>
            <NavLink to='/graphs'>{t('Graphs')}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  i18n: T.object,
  t: T.func,
}

export default withTranslation()(Header)
