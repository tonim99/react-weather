/* 
    Makes API calls to openweathermap OneCall and Geocoding APIs 
    and passes props to children - NavBar, CurrentWeather & Weather7Day
*/

import React, { useEffect, useState, useCallback } from 'react'
import CurrentWeather from '../components/CurrentWeather'
import NavBar from '../components/NavBar'
import Weather7Day from '../components/Weather7Day';
import './Weather.css';

// npm package to convert full state names to abbreviations //
import states from 'us-state-converter';

const Weather = () => {
    // DEFINE STATE //
    const [zip, setZip] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [city, setCity] = useState('')
    const [conditions, setConditions] = useState('')
    const [icon, setIcon] = useState('')
    const [input, setInput] = useState('')
    const [weather, setWeather] = useState('')
    const [weather7Day, setWeather7Day] = useState([])
    const [stateName, setStateName] = useState('')

    // DEFINE OTHER VARIABLES //
    const stateAbbr = states.abbr(stateName)
    const APIKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'http://api.openweathermap.org';
   
    // API CALLS AND SET STATE //
    const fetchLatLon = useCallback(() => {
        // calls geolocation API and sets lat, lon, city //
        fetch(`${baseUrl}/geo/1.0/zip?zip=${zip}&appid=${APIKey}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data, '***location info***')
                setLat(data.lat)
                setLon(data.lon)
                setCity(data.name)
            })
            .catch(err =>  <div>{err}</div>)
    }, [APIKey, zip])

    const fetchStateByLatLon = useCallback(() => {
        // calls geolocation api (reverse) and sets stateName //
        let url = `${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${APIKey}`
        fetch(url)
            .then(res=>res.json())
            .then((data) => {
                console.log(data)
                setStateName(data[0].state)
            })
            .catch(err =>  <div>{err}</div>)
    }, [APIKey, lat, lon])
    
    const fetchWeather = useCallback(() => {
        // calls onecall api and sets weather conditions //
        const url = `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKey}&units=imperial`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log('***result of fetchWeather***', data)
                setWeather(data.current)
                setConditions(data.current.weather[0].main)
                setIcon(data.current.weather[0].icon)
                setWeather7Day(data.daily)
            })
            .catch(err =>  <div>{err}</div>)
    }, [APIKey, lat, lon])
    
    useEffect(() => {
        console.log('***use effect 1 fired***')
            fetchLatLon()
    }, [fetchLatLon])

    useEffect(() => {
        console.log('***use effect 2 fired***')
        fetchStateByLatLon()
        fetchWeather()
    }, [fetchStateByLatLon, fetchWeather])

    return(
        <div className='weather-container'>
            <NavBar 
                setZip={setZip}
                input={input}
                setInput={setInput}
            />
            <CurrentWeather 
                    city={city}
                    stateAbbr={stateAbbr}
                    weather={weather}
                    conditions={conditions}
                    icon={icon}
                />
            <Weather7Day weather7Day={weather7Day}/>
        </div>
    )
}

export default Weather


           
                