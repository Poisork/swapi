import React, {useEffect, useRef} from 'react'
import Chart from 'chart.js'
import {PropTypes as T} from 'prop-types'
import './ChartJs.scss'

const ChartJs = ({height, type, labels, datasets}) => {
  const ref = useRef()
  const options = {
    type,
    data: {
      labels: JSON.parse(labels),
      datasets: JSON.parse(datasets),
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
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const chart = new Chart(ctx, options)
    return () => chart.destroy()
  }, [options])
  return (
    <div className='wrapper-chart'>
      <canvas height={height} ref={ref} />
    </div>
  )
}

ChartJs.propTypes = {
  height: T.string,
  type: T.string,
  labels: T.string,
  datasets: T.string,
}

export default React.memo(ChartJs)
