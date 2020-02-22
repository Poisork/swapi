/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import '../../Components/RenderProps/RenderPropsWithTranslation.scss'
import RenderPropsWithTranslation from '../../Components/RenderProps/RenderPropsWithTranslation'
import {PaginationContext} from '../../utils/context/context'
import {ContentAllEntity} from './content'

export const Entities = () => {
  const people = useContext(PaginationContext)

  return people.map(person => (
    <RenderPropsWithTranslation
      key={person.url}
      item={person}
      render={props => ContentAllEntity(props)}
    />
  ))
}
