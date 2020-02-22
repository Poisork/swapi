/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import ChartJs from './ChartJs'
import {PaginationContext} from '../../utils/context/context'

const Graphs = () => {
  const people = useContext(PaginationContext)
  const parsingPeople = people
    ? people.reduce((hash, {mass, height, name}) => {
        const validMass = mass.match(/\d/) ? mass.replace(',', '') : '0'
        const validHeight = height.match(/\d/) ? height.replace(',', '') : '0'
        return [...hash, {validMass, validHeight, name}]
      }, [])
    : []

  const parsingDataToChart = (label, backgroundColor, array, key) => {
    return {
      label,
      backgroundColor,
      data: array.map(item => item[key]),
    }
  }

  const arrayDataSets = [
    parsingDataToChart(
      'Character mass',
      'rgba(52, 152, 219, 0.75)',
      parsingPeople,
      'validMass',
    ),
    parsingDataToChart(
      'Character growth',
      'rgba(231, 76, 60, 0.75)',
      parsingPeople,
      'validHeight',
    ),
  ]

  const names = parsingPeople.map(item => item.name)

  return (
    <ChartJs
      height='600'
      type='line'
      labels={JSON.stringify(names)}
      datasets={JSON.stringify(arrayDataSets)}
    />
  )
}

export default Graphs
