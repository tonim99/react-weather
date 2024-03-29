import React from 'react'
import { device } from '../../device.js'
import styled from 'styled-components'

const StyledWeatherDaily = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color-light);
  align-items: left;
  width: 80%;
  margin: 20px auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  flex-direction: column;
  padding: 0px 20px;
  

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const StyledWeatherDailyItems = styled.div`
  display: flex;
  border-bottom: 1px solid #ffffff;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  &:last-child {
    border-bottom: none;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: calc(14.28% - 10px);
    justify-content: center;
    padding: 20px;
    border: 1px solid #ffffff;
    border-radius: 8px;
    margin: 5px;
    &:last-child {
      border-bottom: 1px solid #ffffff;
     }
  }
`
const StyledWeekday = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  width: 25%;
  margin-top: 10px;

  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`
const StyledIcon = styled.div`
  width: 25%;

  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
`
const StyledConditions = styled.div`
  display: flex;
  text-transform: capitalize;
  width: 25%;

  @media ${device.tablet} {
    justify-content: center; 
  }
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
            <StyledIcon>
              <img alt='weather-icon' src={`http://openweathermap.org/img/wn/${day.icon}.png`}/>
            </StyledIcon>
            <StyledConditions>{day.conditions} </StyledConditions>
            <div><b>{Math.round(day.max)}&deg;F</b>/{Math.round(day.min)}&deg;F</div>
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