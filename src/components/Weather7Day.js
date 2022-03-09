import React from 'react'



const Weather7Day = ({ weather7Day }) => {
    console.log('Weather7Day from component', weather7Day)
    
    const dayTimeWeather = weather7Day && weather7Day.map((day) => {

      let dateLong = new Date(day.dt * 1000) 
      let weekday = Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dateLong)
      let month = Intl.DateTimeFormat('en-US', { month: 'numeric' }).format(dateLong)
      let date = dateLong.getDate()
      let min = day.temp.min
      let max = day.temp.max
      let conditions = day.weather[0].main
      let icon = day.weather[0].icon

      return { weekday, month, date, min, max, conditions, icon }
  
    })

    

      return(
        <div>
          {dayTimeWeather 
            && dayTimeWeather.map((day, i) => (
              <div key={i}>{day.weekday} {day.month}/{day.date} Low: {Math.round(day.min)} High: {Math.round(day.max)} {day.conditions} <img className='weather-icon-small' alt='weather-icon' src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}/></div>
            ))
          }
        </div> 
    );
}

export default Weather7Day