/* 
    Makes API calls to openweathermap OneCall and Geocoding APIs 
    and passes props to children - NavBar, CurrentWeather & Weather7Day
*/

import React, { useEffect, useState, useCallback } from 'react'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather'
import NavBar from '../components/NavBar/NavBar'
import Weather7Day from '../components/Weather7Day/Weather7Day';
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle/GlobalStyle';
// npm package to convert full state names to abbreviations //
import states from 'us-state-converter';

const MainContainer = styled.div`
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `

export const themes = {
    default: {
        bg: 'var(--primary-bg-color)',
        bgImage: 'var(--gradient-primary)',
        navBg: 'var(--primary-bg-color)',
        searchBg: 'var(--secondary-bg-color)'
    },
    sunny: {
        bg: 'var(--sunny-bg-color)',
        bgImage: 'var(--gradient-sunny)',
        navBg: 'transparent',
        searchBg: '#e2b71c'
    },
    cloudy: {
        bg: 'var(--cloudy-bg-color)',
        bgImage: 'var(--gradient-cloudy)',
        navBg: 'transparent',
        searchBg: 'var(--secondary-bg-color)'
    },
    rainy: {
        bg: 'var(--rainy-bg-color)',
        bgImage: 'var(--gradient-rainy)',
        navBg: '#847996',
        searchBg: 'var(--secondary-bg-color)'
    }
};

const Weather = () => {
    // DEFINE STATE //
    const [zip, setZip] = useState('')
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()
    const [city, setCity] = useState()
    const [conditions, setConditions] = useState()
    const [id, setId] = useState()
    const [icon, setIcon] = useState()
    const [input, setInput] = useState('')
    const [weather, setWeather] = useState()
    const [weather7Day, setWeather7Day] = useState()
    const [stateName, setStateName] = useState()
    const [weatherCondition, setWeatherCondition] = useState('default');

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
                setWeather(data.current)
                setConditions(data.current.weather[0].description)
                setId(data.current.weather[0].id)
                setIcon(data.current.weather[0].icon)
                setWeather7Day(data.daily)
            })
            .catch(err =>  <div>{err}</div>)
    }, [APIKey, lat, lon])
    
    useEffect(() => {
        fetchLatLon()
    }, [fetchLatLon])

    useEffect(() => {
        fetchStateByLatLon()
        fetchWeather()
    }, [fetchStateByLatLon, fetchWeather])
    
    useEffect(() => {
        let idToInt = String(id)
        const clearSkyConditions = ['800'];
        const cloudyConditions = ['801', '802', '803', '804'];
        const rainyConditions = ['500', '501', '502', '503', '504', '511', '520', '521', '522', '531'];
        const snowyConditions = ['600', '601', '602', '611', '612', '613', '615', '616', '620', '621', '622'];
        const mistConditions = ['701', '711', '721', '731', '741', '751', '761', '762', '771', '781'];
        const drizzleConditions = ['300', '301', '302', '310', '311', '312', '313', '314', '321'];
        const thunderstormConditions = ['200', '201', '202', '210', '211', '212', '221', '230', '231', '232',]
        let conditionId

        if(clearSkyConditions.includes(idToInt)){
            conditionId = 'sunny'
        }else if(cloudyConditions.includes(idToInt)){
            conditionId = 'cloudy'
        }else if(rainyConditions.includes(idToInt) || snowyConditions.includes(idToInt) || mistConditions.includes(idToInt) || drizzleConditions.includes(idToInt) || thunderstormConditions.includes(idToInt)){
            conditionId = 'rainy'
        } else {
            conditionId = 'default'
        }

        setWeatherCondition(conditionId)
      }, [id]);

   
    return(
        <ThemeProvider theme={themes[weatherCondition]}>
            <GlobalStyle />
            <MainContainer>
                <NavBar 
                    setZip={setZip}
                    input={input}
                    setInput={setInput}
                    weatherCondition={weatherCondition}
                />
                <CurrentWeather 
                        city={city}
                        stateAbbr={stateAbbr}
                        weather={weather}
                        conditions={conditions}
                        icon={icon}
                    />
                <Weather7Day weather7Day={weather7Day}/>
            </MainContainer>
        </ThemeProvider>
    )
}

export default Weather;


           
                