import React, {useEffect} from 'react'
import Chart from 'chart.js'
import {PropTypes as T} from 'prop-types'
import './ChartJs.scss'

const ChartJs = ({height, type, labels, datasets}) => {
  const options = {
    type,
    data: {
      labels,
      datasets,
    },
    options: {
      title: {
        display: true,
        text: 'SWAPI Chart.js',
        fontSize: 20,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      maintainAspectRatio: false,
    },
  }

  useEffect(() => {
    const canvas = document.getElementById('canvas-1')
    const ctx = canvas.getContext('2d')
    const chart = new Chart(ctx, options)
    return () => chart.destroy()
  }, [datasets, options])

  return (
    <div className='wrapper-chart'>
      <canvas height={height} id='canvas-1' />
    </div>
  )
}

ChartJs.propTypes = {
  height: T.string,
  type: T.string,
  labels: T.arrayOf(T.string),
  datasets: T.arrayOf(
    T.shape({
      label: T.string,
      backgroundColor: T.string,
      data: T.arrayOf(T.string),
    }),
  ),
}

export default ChartJs
