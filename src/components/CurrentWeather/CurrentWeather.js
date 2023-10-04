/* displays all current weather-related data */
import React from 'react'
import styles from './CurrentWeather.module.css'

const CurrentWeather = ({ weather, conditions, icon, city, stateAbbr }) => {
    
    return(
        <>
            {weather && <div className={styles.currentWeatherCard}>
                {city && <header className={styles.currentWeatherHeader}><h2>{city}, {stateAbbr}</h2></header>}
                <div className={styles.currentWeatherContainer}>
                    <div className={styles.currentWeatherColumn}>
                        <p className={styles.currentTemp}>{Math.round(weather.temp)} <span>&deg;</span></p>
                        <p className={styles.currentConditions}>{conditions}</p>
                        <p className={styles.currentFeelsLike}>Feels Like {Math.round(weather.feels_like)} <span>&deg;</span></p>
                    </div>
                    {conditions && <div className={styles.weatherConditionsContainer}>
                        {icon && <img className={styles.weatherIcon} alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>}
                    </div>}
                </div>
            </div>}
        </>
    )
}

export default CurrentWeather