import React, {useContext} from 'react'
import './Pagination.scss'
import {PropTypes as T} from 'prop-types'
import {PageDispatch} from '../../utils/context/context'
import paginatorAC from '../../Hook/actionCreators/paginatorAC'

const Pagination = ({pageSize, count, activePage}) => {
  const dispatch = useContext(PageDispatch)
  return count ? (
    <div className='wrapper-pagination'>
      {[...Array(Math.ceil(count / pageSize))].map((item, index) => (
        <button
          type='submit'
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          disabled={index + 1 === activePage}
          className={index + 1 === activePage ? 'activePage' : ''}
          onClick={() => dispatch(paginatorAC.changePage(index + 1))}
        >
          {index + 1}
        </button>
      ))}
    </div>
  ) : null
}

Pagination.propTypes = {
  pageSize: T.number.isRequired,
  activePage: T.number.isRequired,
  count: T.number,
  setPage: T.func,
}

export default React.memo(Pagination)
