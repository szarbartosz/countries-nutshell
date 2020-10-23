import React from 'react'

const Border = ({ countries, alpha3Code }) => {
  const country = countries.filter(country => country.alpha3Code === alpha3Code)[0]
  return (
    <li>
      <strong>{country.name}</strong>
      <img className="ml-1 border" src={country.flag} height="12px" alt="flag"/>
    </li>
  )
}

export default Border