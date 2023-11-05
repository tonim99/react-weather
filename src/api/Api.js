    
    
    
const APIKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.openweathermap.org';

export const getLatLon = (zip) => fetch(`${baseUrl}/geo/1.0/zip?zip=${zip}&appid=${APIKey}`)
.then(async (res) => {
        if(!res.ok) {
            const errorData = await res.json();
            throw new Error(
                errorData.message
                    ? `Error Code: ${errorData.cod} - ${errorData.message}`
                    : 'Invalid zip code. Please try again.'
            );
        }
    return res.json()
})  

export const getStateByLatLon = (lat, lon) => fetch(`${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${APIKey}`)
    .then(async (res) => {
        if(!res.ok) {
            const errorData = await res.json();
            throw new Error(
                errorData.message
                    ? `Error Code: ${errorData.cod} - ${errorData.message}`
                    : 'Something went wrong. Please refresh and try again.'
            );
        }
    return res.json()
})
    
    
    export const getWeather = (lat, lon) => fetch(`${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKey}&units=imperial`)
    .then(async (res) => {
        if(!res.ok) {
            const errorData = await res.json();
            throw new Error(
                errorData.message
                    ? `Error Code: ${errorData.cod} - ${errorData.message}`
                    : 'Something went wrong. Please refresh and try again.'
            );
        }
    return res.json()
    })