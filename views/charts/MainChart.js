import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#f9b115'
const brandDanger = getStyle('danger') || '#f86c6b'

const MainChart = attributes => {
  const random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const defaultDatasets = (()=>{
    let elements = 27
    const data1 = [10,18,23,29,34,41,46,54,62,72,77,82]
    const data2 = [10, 15,18,23,27,32,25,43,51,56,59,62]
    const data3 = []
    for (let i = 0; i <= elements; i++) {
      data1.push(random(15,20))
      data2.push(random(5, 10))
 
    }
    return [
      {
        label: 'Pengaduan Perbulan',
        backgroundColor: hexToRgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      },
      {
        label: 'Tindakan Perbulan ',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2
      },
   
    ]
  })()

  const defaultOptions = (()=>{
    return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 0,
              stepSize: Math.ceil(100 / 5),
              max: 100
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  )()

  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']}
      
    />
  )
}


export default MainChart
