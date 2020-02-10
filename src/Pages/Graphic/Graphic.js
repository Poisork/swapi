import React, {useState} from 'react'
import {usePeople} from '../../Hook/usePeople'
import {ReactComponent as Logo} from '../../media/Eclipse-1s-200px.svg'

import Pagination from '../../Components/Pagination/Pagination'
import ChartJs from './ChartJs'

const Graphic = () => {
  const [page, setPage] = useState(1)
  const [isLoading, error, people, count] = usePeople(`people/?page=${page}`)

  const parsingPeople = people
    ? people.reduce((hash, {mass, height, name}) => {
        const validMass = mass.match(/\d/) ? mass.replace(',', '') : '0'
        const validHeight = height.match(/\d/) ? height.replace(',', '') : '0'
        return [...hash, {validMass, validHeight, name}]
      }, [])
    : []

  const parsingDataToChart = (label, bckColor, array, key) => {
    return {
      label,
      backgroundColor: bckColor,
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
      <Pagination
        setPage={setPage}
        count={count}
        activePage={page}
        pageSize={pageSize}
      />
      {isLoading && <Logo />}
      {!isLoading && !error && (
        <ChartJs
          height='600'
          type='line'
          labels={names}
          datasets={arrayDataSets}
        />
      )}
      {error}
    </>
  )
}

export default Graphic
