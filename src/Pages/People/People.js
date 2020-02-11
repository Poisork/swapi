/* eslint-disable react/prop-types */
import React from 'react'
import {ReactComponent as Logo} from '../../media/Eclipse-1s-200px.svg'
import OnePerson from '../../Components/OnePerson/OnePerson'
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
        people.map(person => <OnePerson key={person.url} person={person} />)}
      {error}
    </>
  )
}

export default React.memo(People)
