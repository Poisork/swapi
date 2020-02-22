import React from 'react'
import {Entities} from './Entities'
import {PaginationLayout} from '../../layouts/paginationLayout'

const PeopleContainer = () => {
  return (
    <PaginationLayout>
      <Entities />
    </PaginationLayout>
  )
}

export default PeopleContainer
