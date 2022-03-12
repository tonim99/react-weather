/* displays all current weather-related data */
import React from 'react'
import './CurrentWeather.css'
const CurrentWeather = ({ weather, conditions, icon, city, stateAbbr }) => {
    
    return(
        <>
        {weather && <div className='current-weather-card'>
            {city && <header className='current-weather-header'><h2>{city}, {stateAbbr}</h2></header>}
                <div>
                    <p className='current-temp'>{Math.round(weather.temp)} <span>&deg;</span></p>
                    {conditions && <div className='weather-conditions-container'>
                    <h4>{conditions}</h4>
                    {icon && <img className='weather-icon' alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>}
                </div>}
                <p className='current-feels-like'>Feels Like {Math.round(weather.feels_like)} <span>&deg;</span></p>
            </div>
        </div>}
        </>
    )
}

export default CurrentWeather