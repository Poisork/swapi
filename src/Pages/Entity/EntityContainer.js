import React, {useState} from 'react'
import {usePeople} from '../../Hook/usePeople'
import Entity from './Entity'

const PeopleContainer = () => {
  const [page, setPage] = useState(1)
  const [isLoading, error, people, count] = usePeople(`people/?page=${page}`)
  const props = {isLoading, error, people, count, page, setPage}
  return <Entity {...props} />
}

export default PeopleContainer
