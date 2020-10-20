import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [mode, setMode] = useState(false)
  const [chosenCountry, setChosenCountry] = useState({})

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const toggleMode = (country) => {
    setChosenCountry(country)
    setMode(!mode)
  }

  if (mode) {
    return (
      <CountryDetails countries={countries} country={chosenCountry} toggleMode={toggleMode}/>
    )
  }

  return (
    <div className="App">
      <h1>countries nutshell</h1>
      <hr/>

      <Filter filter={filter} filterChangeHandler={handleFilterChange} countries={countries} />
      
      <Countries countries={countries.filter(country => new RegExp(filter, 'i').test(country.name))} toggleMode={toggleMode} />
    </div>
  )
}

export default App;
