import React from 'react'
import Border from './Border'

const Borders = ({ country, countries, borders }) => {
  if (borders.length === 0) {
    return (
      <h3 className="mt-4 mb-4">borders: no adjacent countries</h3>
    )
  }
  
  return (
    <div className="mt-4 mb-4">
      <h3>borders:</h3>
      <ul>
        {borders.map(border => <Border key={border} countries={countries} alpha3Code={border} />)}
      </ul>
    </div>
  )
}

export default Borders