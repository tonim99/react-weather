import React, {useState} from 'react'



const Weather7Day = ({ weather7Day }) => {
    console.log('Weather7Day from component', weather7Day)
    // const [dayTime, setDayTime] = useState('')
    const dayTime = weather7Day && weather7Day.map((day) => {
        day = new Date(day.dt * 1000)
        console.log(day, "**day")
        return day
        // let options = { weekday: 'long'}
        // let weekDay = new Intl.DateTimeFormat('en-US', options).format(day.dt)
        // return weekDay
    })
 
      console.log(dayTime, "dayTime")
      return(
        <div>
          {weather7Day && weather7Day.forEach(day => console.log(day.dt))}
        </div>
          // <div>{day && <div>High: {day.temp.max}</div>}</div> 
    
    );
}

export default Weather7Day