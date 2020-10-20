import React from 'react'
import Borders from './Borders'

const CountryDetails = ({ country, toggleMode, countries }) => {
  console.log(country);
  return (
    <div>
      <div>
        <h1 className="float-left">{country.name}</h1>
        <img className="ml-2 border" src={country.flag} height="50px" border="1px" alt="flag"/>
      </div>
      <hr/>
      
      <h3 className="mt-4 mb-4">populaiton: <strong>{country.population}</strong></h3>

      <h3 className="mt-4 mb-4">capital: <strong>{country.capital}</strong></h3>

      <h3 className="mt-4 mb-4">languages:</h3>
      <ul>
        {country.languages.map(language => <li key={language.iso639_1}><strong>{language.name}</strong></li>)}
      </ul>

      <h3 className="mt-4 mb-4">currencies:</h3>
      <ul>
        {country.currencies.map(currency => <li key={currency.code}><strong>{currency.name} (symbol: {currency.symbol})</strong></li>)}
      </ul>

      <Borders countries={countries} borders={country.borders}/>
      
      <button className="btn btn-primary btn-block" onClick={() => toggleMode(country)}>back to global list</button>
    </div>
  )
}

export default CountryDetails