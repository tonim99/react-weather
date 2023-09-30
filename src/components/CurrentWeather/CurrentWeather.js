/* displays all current weather-related data */
import React from 'react'
import './CurrentWeather.module.css'
import WeatherContainer from '../WeatherContainer/WeatherContainer'
const CurrentWeather = ({ weather, conditions, icon, city, stateAbbr }) => {
    
    return(
        <>
            {weather && <WeatherContainer>
                {city && <header className='current-weather-header'><h2>{city}, {stateAbbr}</h2></header>}
                <div className='current-weather-container'>
                    <div className='current-weather-column'>
                        <p className='current-temp'>{Math.round(weather.temp)} <span>&deg;</span></p>
                        <p className='current-conditions'>{conditions}</p>
                        <p className='current-feels-like'>Feels Like {Math.round(weather.feels_like)} <span>&deg;</span></p>
                    </div>
                    {conditions && <div className='weather-conditions-container'>
                        {icon && <img className='weather-icon' alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>}
                    </div>}
                </div>
            </WeatherContainer>}
        </>
    )
}

export default CurrentWeather