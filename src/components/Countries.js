import React from 'react'
import Country from './Country'

const Countries = ({ countries, toggleMode }) => {
  return (
    <ul className="list-group">
      {countries.map(country => <Country key={country.alpha3Code} country={country} toggleMode={toggleMode} />)}
    </ul>
  )
}

export default Countries