import React, {useReducer} from 'react'
import {usePeople} from '../../Hook/usePeople'
import Graphs from './Graphs'
import paginatorReducer from '../../Hook/paginatorReducer'
import {PageDispatch} from '../../utils/context/context'

const GraphsContainer = () => {
  const [{page}, dispatchPage] = useReducer(paginatorReducer, {page: 1})
  const [state] = usePeople(`people/?page=${page}`)
  const props = {...state, page}
  return (
    <PageDispatch.Provider value={dispatchPage}>
      <Graphs {...props} />
    </PageDispatch.Provider>
  )
}

export default GraphsContainer
