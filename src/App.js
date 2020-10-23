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
  const [weatherObject, setWeatherObject] = useState({})

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleWeather = (country) => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: country.capital,
          appid: api_key
        }
      })
      .then(response => {
        setWeatherObject(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const toggleMode = (country) => {
    setChosenCountry(country)
    handleWeather(country)
    setMode(!mode)
  }

  if (mode) {
    return (
      <div>
        <CountryDetails countries={countries} country={chosenCountry} toggleMode={toggleMode} weatherObject={weatherObject} />

        <footer>
          <div className="text-center py-4">© 2020 Bartosz Szar</div>
        </footer>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>countries nutshell</h1>
      <hr/>

      <Filter filter={filter} filterChangeHandler={handleFilterChange} countries={countries} />
      
      <Countries countries={countries.filter(country => new RegExp(filter, 'i').test(country.name))} toggleMode={toggleMode} />

      <footer className="fixed-bottom">
          <div className="text-center py-4">© 2020</div>
      </footer>
    </div>
  )
}

export default App;
