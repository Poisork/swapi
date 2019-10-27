import React from 'react'
import './OnePerson.scss'
import {PropTypes as T} from 'prop-types'
import {withTranslation} from 'react-i18next'

const OnePerson = ({person, t}) => {
  return (
    <div className='one-person-wrapper'>
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
        {person.eye_color}
      </div>
      <div>
        <p>films</p>
        {person.films.toString()}
      </div>
      <div>
        <p>gender</p>
        {person.gender}
      </div>
      <div>
        <p>hair_color</p>
        {person.hair_color}
      </div>
      <div>
        <p>height</p>
        {person.height}
      </div>
      <div>
        <p>homeworld</p>
        {person.homeworld}
      </div>
      <div>
        <p>mass</p>
        {person.mass}
      </div>
      <div>
        <p>name</p>
        {person.name}
      </div>
      <div>
        <p>skin_color</p>
        {person.skin_color}
      </div>
      <div>
        <p>species</p>
        {person.species.toString()}
      </div>
      <div>
        <p>starships</p>
        {person.starships.toString()}
      </div>
      <div>
        <p>url</p>
        {person.url}
      </div>
      <div>
        <p>vehicles</p>
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
