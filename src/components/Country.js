import React from 'react'

const Country = ({ country, toggleMode }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <strong>{country.name} </strong>
        <img className="ml-1 border" src={country.flag} height="12px" alt="flag"/>
      </div>
      <button className="btn btn-primary" onClick={() => toggleMode(country)}>show details</button>
    </li>
  )
}

export default Country