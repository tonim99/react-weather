    
    
    
    const APIKey = process.env.REACT_APP_API_KEY;
    const baseUrl = 'https://api.openweathermap.org';

    export const fetchLatLon = (zip) =>  fetch(`${baseUrl}/geo/1.0/zip?zip=${zip}&appid=${APIKey}`)
    export const fetchStateByLatLon = (lat, lon) => fetch(`${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${APIKey}`)
    export const fetchWeather = (lat, lon) => (`${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKey}&units=imperial`)