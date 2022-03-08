/* displays all weather-related data */
import React from 'react'
import './CurrentWeather.css'
const CurrentWeather = ({ weather, conditions, icon }) => {
    console.log('***weather***', weather)
    return(
        <div>
            {weather && <div>
                <h4>Temperature: {Math.round(weather.temp)} <span>&#176;</span></h4>
                <h5>Feels Like: {Math.round(weather.feels_like)} <span>&#176;</span></h5>
            </div>}
            {conditions && <div>
                <h4>Conditions: {conditions}</h4>
                {icon && <img className='weather-icon' alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>}
            </div>}
        </div>
    )
}

export default CurrentWeather