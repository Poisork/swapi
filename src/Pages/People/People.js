import React, {useState} from 'react'
import {usePeople} from '../../Hook/usePeople'
import {ReactComponent as Logo} from '../../media/Eclipse-1s-200px.svg'
import OnePerson from '../../Components/OnePerson/OnePerson'
import Pagination from '../../Components/Pagination/Pagination'

const People = () => {
  const [page, setPage] = useState(1)
  const [isLoading, error, people, count] = usePeople(`people/?page=${page}`)
  const pageSize = 10

  return (
    <>
      <Pagination
        setPage={setPage}
        count={count}
        activePage={page}
        pageSize={pageSize}
      />
      {isLoading ? <Logo /> : null}
      {people && !isLoading
        ? people.map(person => <OnePerson key={person.url} person={person} />)
        : null}
      {error}
    </>
  )
}

export default People
