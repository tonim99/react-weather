import React from 'react'
import styled from 'styled-components'

const StyledWeatherDaily = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  color: var(--text-color-dark);
  align-items: left;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 80%;
  margin: 20px auto;
  box-shadow: 0 1px 5px rgba(0,0,0,0.25), 0 0 50px rgba(0,0,0,0.1);
`

const StyledForecast = styled.h3`
  font-size: 24px;
  display: flex;
  justify-content: flex-start;
  margin-top: 0;
  padding: 20px 20px 0px 20px;
`

const StyledWeatherDailyRow = styled.div`
  display: flex;
  flex: 0 0 calc((100%/7) - 20px);
  flex-wrap: wrap;
  justify-content: left;

  @media $(device.tablet) {
    flex: 0 0 calc((100%/4 ) - 20px);
    justify-content: center;
  }
`

const StyledWeatherDailyItems = styled.div`
  width: calc(14.28% - 10px);
  text-align: center;
  padding: 20px;
  outline: 1px solid #000000;
  border-radius: 8px;
  margin: 5px;
`

const StyledWeekday = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`
const StyledConditions = styled.div`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
`
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
    {dayTimeWeather && <StyledWeatherDaily>
    <StyledForecast>Daily Forecast</StyledForecast>
      <StyledWeatherDailyRow>
      {dayTimeWeather 
        && dayTimeWeather.map((day, i) => (
          <StyledWeatherDailyItems key={i}>
            <StyledWeekday>{day.weekday}&nbsp;{day.date}</StyledWeekday>
              <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${day.icon}.png`}/>
            <StyledConditions>{day.conditions} </StyledConditions>
            <div><b>{Math.round(day.max)}&deg;</b>/{Math.round(day.min)}&deg;</div>
            <div>
            </div>
          </StyledWeatherDailyItems>
        ))
      }
      </StyledWeatherDailyRow>
    </StyledWeatherDaily>}
    </>
  );

}

export default Weather7Day