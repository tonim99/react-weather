/* Makes API calls to openweather map One Call API and Geocoding API and passes props to children */

import React, { useEffect, useState } from 'react'
import CurrentWeather from '../components/CurrentWeather'
import NavBar from '../components/NavBar'
import Weather7Day from '../components/Weather7Day';
import './Weather.css';

const Weather = () => {
    const [zip, setZip] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [city, setCity] = useState('')
    const [conditions, setConditions] = useState('')
    const [icon, setIcon] = useState('')
    const [input, setInput] = useState('')
    const [weather, setWeather] = useState('')
    const [weather7Day, setWeather7Day] = useState([])
  
    const APIKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'http://api.openweathermap.org';
   
    const fetchLatLon = () => {
        fetch(`${baseUrl}/geo/1.0/zip?zip=${zip}&appid=${APIKey}`)
            .then(res => res.json())
            .then((data) => {
                setLat(data.lat)
                setLon(data.lon)
                setCity(data.name)
            })
            .catch(err => console.error(err))
    }

    const fetchWeather = () => {
        let url = `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKey}&units=imperial`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log('***result of fetchWeather***', data)
                setWeather(data.current)
                setConditions(data.current.weather[0].main)
                setIcon(data.current.weather[0].icon)
                setWeather7Day(data.daily)
            })
            .catch(err =>  console.error(err))
    }
    
    useEffect(() => {
        console.log('***use effect 1 fired***')
            fetchLatLon()
    }, [zip])

    useEffect(() => {
        console.log('***use effect 2 fired***')
        fetchWeather()
    }, [city])

    return(
        <div className='weather-container'>
            <NavBar 
                setZip={setZip}
                input={input}
                setInput={setInput}
            />
            <div className='current-weather-container'>
                <h1>Your Current Local Weather</h1>
                <CurrentWeather 
                    city={city}
                    weather={weather}
                    conditions={conditions}
                    icon={icon}
                />
            </div>
            <div className="7-day-weather">
                <Weather7Day weather7Day={weather7Day}/>
            </div>
        </div>
    )
}

export default Weather


           
                