import React from 'react'
import Borders from './Borders'
import Weather from './Weather'

const CountryDetails = ({ country, toggleMode, countries, weatherObject }) => {
  if (weatherObject.weather === undefined) return <></>

  return (
    <div>
      <div>
        <h1 className="float-left">{country.name}</h1>
        <img className="ml-2 border" src={country.flag} height="50px" border="1px" alt="flag"/>
      </div>
      <hr/>
      
      <h3 className="mt-4 mb-4">capital: <strong>{country.capital}</strong></h3>

      <h3 className="mt-4 mb-4">populaiton: <strong>{country.population}</strong></h3>

      <Borders countries={countries} borders={country.borders}/>

      <h3 className="mt-4 mb-4">languages:</h3>
      <ul>
        {country.languages.map(language => <li key={language.iso639_1}><strong>{language.name}</strong></li>)}
      </ul>

      <h3 className="mt-4 mb-4">currencies:</h3>
      <ul>
        {country.currencies.map(currency => <li key={currency.code}><strong>{currency.name} (symbol: {currency.symbol})</strong></li>)}
      </ul>      

      <Weather weatherObject={weatherObject} capital={country.capital} />
      
      <button className="btn btn-info btn-block" onClick={() => toggleMode(country)}>back to global list</button>
    </div>
  )
}

export default CountryDetails