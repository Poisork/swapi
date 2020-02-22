import React from 'react'
import './Pagination.scss'
import {PropTypes as T} from 'prop-types'
import paginatorAC from '../../Hook/actionCreators/paginatorAC'

const Pagination = ({pageSize = 10, count, activePage, dispatch}) => {
  return (
    <div className='wrapper-pagination'>
      {[...Array(Math.ceil(count / pageSize))].map((item, index) => {
        const pageIsActive = index + 1 === activePage
        return (
          <button
            type='submit'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            disabled={pageIsActive}
            className={pageIsActive ? 'activePage' : ''}
            onClick={() => dispatch(paginatorAC.changePage(index + 1))}
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}

Pagination.propTypes = {
  pageSize: T.number,
  activePage: T.number.isRequired,
  count: T.number,
  dispatch: T.func,
}

export default React.memo(Pagination)
