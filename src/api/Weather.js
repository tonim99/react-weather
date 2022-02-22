/*makes API call from openweathermap and passes props to children */

import React, {useEffect, useState} from 'react'
import CurrentWeather from '../components/CurrentWeather'
import Form from '../components/Form'
import './Weather.css';
const Weather = () => {
    
    const [weather, setWeather] = useState({})
    const [input, setInput] = useState('London')
    const [city, setCity] = useState('London')
    const [conditions, setConditions] = useState({})
    const [icon, setIcon] = useState({})

    useEffect(() => {
        const fetchWeather = async() => {
        const APIKey = process.env.REACT_APP_API_KEY
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`
            try {
                let result = await fetch(url)
                let data = await result.json()
                setWeather(data.list[0].main)
                setConditions(data.list[0].weather[0])
                setIcon(data.list[0].weather[0].icon)
            }
            catch(err){
                console.error(err)
            }
        }
    
        fetchWeather()
    }, [city])

    return(
        <div className='weather-box'>
            <h3>Please enter your city</h3>
            <Form 
                input={input}
                setCity={setCity}
                setInput={setInput}
            />
            <CurrentWeather 
                weather={weather}
                conditions={conditions}
                icon={icon}
            />
        </div>
        
    )
}

export default Weather