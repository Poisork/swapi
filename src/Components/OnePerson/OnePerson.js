import React from 'react'
import './OnePerson.scss'
import {PropTypes as T} from 'prop-types'
import {withTranslation} from 'react-i18next'

const OnePerson = ({person, t}) => {
  return (
    <div className='one-person-wrapper'>
      <div>
        <p>{t('name')}</p>
        {t(person.name)}
      </div>
      <div>
        <p>{t('birth_year')}</p>
        {person.birth_year}
      </div>
      <div>
        <p>{t('created')}</p>
        {person.created}
      </div>
      <div>
        <p>{t('edited')}</p>
        {person.edited}
      </div>
      <div>
        <p>{t('eye_color')}</p>
        {t(person.eye_color)}
      </div>
      <div>
        <p>{t('films')}</p>
        {person.films.toString()}
      </div>
      <div>
        <p>{t('gender')}</p>
        {t(person.gender)}
      </div>
      <div>
        <p>{t('hair_color')}</p>
        {person.hair_color}
      </div>
      <div>
        <p>{t('height')}</p>
        {person.height}
      </div>
      <div>
        <p>{t('homeworld')}</p>
        {person.homeworld}
      </div>
      <div>
        <p>{t('mass')}</p>
        {person.mass}
      </div>
      <div>
        <p>{t('skin_color')}</p>
        {person.skin_color}
      </div>
      <div>
        <p>{t('species')}</p>
        {person.species.toString()}
      </div>
      <div>
        <p>{t('starships')}</p>
        {person.starships.toString()}
      </div>
      <div>
        <p>{t('url')}</p>
        {person.url}
      </div>
      <div>
        <p>{t('vehicles')}</p>
        {person.vehicles.toString()}
      </div>
    </div>
  )
}

OnePerson.propTypes = {
  person: T.object,
  t: T.func,
}

export default React.memo(withTranslation()(OnePerson))
