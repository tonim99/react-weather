import React from 'react'

const CurrentWeather = ({ weather, conditions, icon }) => {
    
    
    return(
        <div>
            {weather && <div className='weather-main'>
                <h4>Temperature: {Math.round(weather.temp)} F</h4>
                <h5>Feels like: {Math.round(weather.feels_like)} F</h5>
            </div>}
            {conditions && <div className='conditions-main'>
                <h4>Conditions: {conditions.description}</h4>
                <img className='weather-icon' alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
            </div>}
        </div>
        
    )
}

export default CurrentWeather