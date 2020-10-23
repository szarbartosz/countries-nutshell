import React from 'react'

const Weather = ({ weatherObject, capital }) => {
  return ( 
    <div>
      <h3 className="mt-4 mb-4">weather in {capital}:</h3>
      <table className="table">
        <thead>
          <tr className="bg-info">
            <th scope="col"><img className="ml-2 justify-content-center" src={`http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`} height="60px" alt="icon"/></th>
            <th className="text-white" scope="col">{weatherObject.weather[0].description}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>temperature</td>
            <td>{Math.round(weatherObject.main.temp - 273)}°C</td>
          </tr>
          <tr>
            <td>wind</td>
            <td>{weatherObject.wind.speed} m/s</td>
          </tr>
          <tr>
            <td>cloud cover</td>
            <td>{weatherObject.clouds.all}%</td>
          </tr>
          <tr>
            <td>humidity</td>
            <td>{weatherObject.main.humidity}%</td>
          </tr>
          <tr>
            <td>pressure</td>
            <td>{weatherObject.main.pressure} hPa</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
} 

export default Weather
