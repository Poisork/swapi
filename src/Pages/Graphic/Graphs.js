/* eslint-disable react/prop-types */
import React from 'react'
import {ReactComponent as Logo} from '../../media/Eclipse-1s-200px.svg'
import Pagination from '../../Components/Pagination/Pagination'
import ChartJs from './ChartJs'

const Graphs = ({page, isLoading, error, people, count}) => {
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
  const pageSize = 10

  return (
    <>
      <Pagination count={count} activePage={page} pageSize={pageSize} />
      {isLoading && <Logo />}
      {!isLoading && !error && people && (
        <ChartJs
          height='600'
          type='line'
          labels={JSON.stringify(names)}
          datasets={JSON.stringify(arrayDataSets)}
        />
      )}
      {error}
    </>
  )
}

export default Graphs
