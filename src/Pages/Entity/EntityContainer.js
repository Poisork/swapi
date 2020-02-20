import React, {useReducer} from 'react'
import {usePeople} from '../../Hook/usePeople'
import Entity from './Entity'
import paginatorReducer from '../../Hook/paginatorReducer'
import {PageDispatch} from '../../utils/context/context'

const PeopleContainer = () => {
  const [{page}, dispatchPage] = useReducer(paginatorReducer, {page: 1})
  const [state] = usePeople(`people/?page=${page}`)
  const props = {...state, page}
  return (
    <PageDispatch.Provider value={dispatchPage}>
      <Entity {...props} />
    </PageDispatch.Provider>
  )
}

export default PeopleContainer
