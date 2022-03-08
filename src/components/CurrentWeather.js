/* displays all weather-related data */
import React from 'react'
import './CurrentWeather.css'
const CurrentWeather = ({ weather, conditions, icon, city }) => {
    console.log('***weather***', weather)
    return(
        <div>
            {weather && <div>
                {city && <h2>{city}</h2>}
                <p>{Math.round(weather.temp)} <span>&#176;</span></p>
                <h5>Feels Like: {Math.round(weather.feels_like)} <span>&#176;</span></h5>
            </div>}
            {conditions && <div className='weather-conditions-container'>
                <h4>Conditions: {conditions}</h4>
                {icon && <img className='weather-icon' alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>}
            </div>}
        </div>
    )
}

export default CurrentWeather