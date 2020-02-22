/* eslint-disable react/prop-types */
import React from 'react'

export const ContentAllEntity = ({item, t}) => (
  <div className='one-person-wrapper'>
    <div>
      <p>{t('name')}</p>
      {t(item.name)}
    </div>
    <div>
      <p>{t('birth_year')}</p>
      {item.birth_year}
    </div>
    <div>
      <p>{t('created')}</p>
      {item.created}
    </div>
    <div>
      <p>{t('edited')}</p>
      {item.edited}
    </div>
    <div>
      <p>{t('eye_color')}</p>
      {t(item.eye_color)}
    </div>
    <div>
      <p>{t('films')}</p>
      {item.films.toString()}
    </div>
    <div>
      <p>{t('gender')}</p>
      {t(item.gender)}
    </div>
    <div>
      <p>{t('hair_color')}</p>
      {item.hair_color}
    </div>
    <div>
      <p>{t('height')}</p>
      {item.height}
    </div>
    <div>
      <p>{t('homeworld')}</p>
      {item.homeworld}
    </div>
    <div>
      <p>{t('mass')}</p>
      {item.mass}
    </div>
    <div>
      <p>{t('skin_color')}</p>
      {item.skin_color}
    </div>
    <div>
      <p>{t('species')}</p>
      {item.species.toString()}
    </div>
    <div>
      <p>{t('starships')}</p>
      {item.starships.toString()}
    </div>
    <div>
      <p>{t('url')}</p>
      {item.url}
    </div>
    <div>
      <p>{t('vehicles')}</p>
      {item.vehicles.toString()}
    </div>
  </div>
)

export const ContentOnlyNameEntity = ({item, t}) => <div>{t(item.name)}</div>
