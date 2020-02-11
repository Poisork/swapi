/* eslint-disable react/prop-types */
import React from 'react'
import '../../Components/RenderProps/RenderPropsWithTranslation.scss'
import {ReactComponent as Logo} from '../../media/Eclipse-1s-200px.svg'
import RenderPropsWithTranslation from '../../Components/RenderProps/RenderPropsWithTranslation'
import Pagination from '../../Components/Pagination/Pagination'

const People = ({
  isLoading = true,
  error = '',
  people,
  count,
  page = 1,
  setPage = () => {},
  pageSize = 10,
}) => {
  const content = ({item, t}) => (
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

  // const contentOnlyWithNames = ({item, t}) => <div>{t(item.name)}</div>

  return (
    <>
      <Pagination
        setPage={setPage}
        count={count}
        activePage={page}
        pageSize={pageSize}
      />
      {isLoading && <Logo />}
      {!isLoading &&
        !error &&
        people &&
        people.map(person => (
          <RenderPropsWithTranslation
            key={person.url}
            item={person}
            render={props => content(props)}
          />
        ))}
      {error}
    </>
  )
}

export default React.memo(People)
