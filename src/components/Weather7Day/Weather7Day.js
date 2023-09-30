import React from 'react'
import './Weather7Day.module.css'

const Weather7Day = ({ weather7Day }) => {
  
  const dayTimeWeather = weather7Day && weather7Day.map((day) => {
  const dateLong = new Date(day.dt * 1000) 
  const weekday = Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dateLong)
  const date = dateLong.getDate()
  const min = day.temp.min
  const max = day.temp.max
  const conditions = day.weather[0].main
  const icon = day.weather[0].icon

    return { weekday, date, min, max, conditions, icon }

  })

  return(
    <>
    {dayTimeWeather && <div className='weather-daily'>
    <h3 className='forecast'>Daily Forecast</h3>
      <div className='weather-daily-row'>
      {dayTimeWeather 
        && dayTimeWeather.map((day, i) => (
          <div key={i} className='weather-daily-items'>
            <div className='weekday'>{day.weekday}&nbsp;{day.date}</div>
              <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${day.icon}.png`}/>
            <div className='conditions'>{day.conditions} </div>
            <div><b>{Math.round(day.max)}&deg;</b>/{Math.round(day.min)}&deg;</div>
            <div>
            </div>
          </div>
        ))
      }
      </div>
    </div>}
    </>
  );

}

export default Weather7Day