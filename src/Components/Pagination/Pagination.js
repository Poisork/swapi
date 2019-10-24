import React from 'react'
import './Pagination.scss'
import {PropTypes as T} from 'prop-types'

const Pagination = ({pageSize, count, activePage, setPage}) => {  

    return ( 
        count ?
            <div className='wrapper-pagination'>
                {[...Array(Math.ceil(count / pageSize))]
                    .map((item,index) => (
                        <p 
                            key={index}
                            className={index + 1 === activePage ? 'activePage' : ''} 
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </p>
                    ))
                }
            </div> : 
            null  
    )
}

Pagination.propTypes = {
    pageSize: T.number.isRequired,
    activePage: T.number.isRequired,
    count: T.number,
    setPage: T.func
}

export default React.memo(Pagination)