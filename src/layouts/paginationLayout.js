/* eslint-disable react/prop-types */
import React, {useReducer} from 'react'
import {usePeople} from '../Hook/usePeople'
import {ReactComponent as Loader} from '../media/Eclipse-1s-200px.svg'
import paginatorReducer, {init} from '../Hook/reducers/paginatorReducer'
import Pagination from '../Components/Pagination/Pagination'
import {PaginationContext} from '../utils/context/context'

export const PaginationLayout = ({children}) => {
  const [{activePage}, dispatch] = useReducer(paginatorReducer, 1, init)
  const [{count, isLoading, error, people}] = usePeople(
    `people/?page=${activePage}`,
  )
  const props = {activePage, dispatch, count}
  if (error) return error
  return (
    <>
      {count && <Pagination {...props} />}
      {isLoading && <Loader />}
      {!isLoading && people && (
        <PaginationContext.Provider value={people}>
          {children}
        </PaginationContext.Provider>
      )}
    </>
  )
}
