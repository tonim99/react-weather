/* displays all current weather-related data */
import React from 'react'
import { device } from '../../device.js'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    align-items: center;
    @media ${device.tablet} {
        padding-left: 20px;
      }
`
const StyledCurrentWeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 20px auto;
    background-color: #ffffff;
    color: var(--text-color-dark);
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.25), 0 0 50px rgba(0,0,0,0.1);
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
    height: 32px;
    padding: 12px 0px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    @media ${device.tablet} {
        justify-content: left;
    }
`

const StyledCurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media ${device.tablet} {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`
const StyledCurrentWeather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.tablet} {
       align-items: flex-start;
    }
`
const StyledCurrentTemp = styled.p`
    display: flex;
    font-size: 60px;
    font-weight: bold;
    margin: 20px;

    @media ${device.tablet} {
        font-size: 92px;
    }
`

const StyledCurrentConditions = styled.p`
    display: flex;
    font-size: 18px;
    justify-content: center;
    text-transform: capitalize;
    margin: 0px;

    @media ${device.tablet} {
        padding-left: 20px;
    }
`

const StyledCurrentFeelsLike = styled.p`
    display: flex;
    font-size: 18px;
    justify-content: left;

    @media ${device.tablet} {
        padding-left: 20px;
    }
`

const StyledIconContainer = styled.div`
    height: 96px;
    width: 96px;

    @media ${device.tablet} {
        height: 192px;
        width: 192px;
    }
`

const StyledWeatherIcon = styled.img`
    height: 96px;
    width: 96px;

    @media ${device.tablet} {
        height: 192px;
        width: 192px;
    }
`
const CurrentWeather = ({ weather, conditions, icon, city, stateAbbr }) => {
    
    return(
        <>
            {weather && <StyledCurrentWeatherCard>
                {city && <StyledHeader>
                    <StyledH2>{city}, {stateAbbr}</StyledH2>
                </StyledHeader>}
                <StyledCurrentWeatherContainer>
                    <StyledCurrentWeather>
                        <StyledCurrentTemp>{Math.round(weather.temp)} <span>&deg;F</span></StyledCurrentTemp>
                        <StyledCurrentConditions>{conditions}</StyledCurrentConditions>
                        <StyledCurrentFeelsLike>Feels Like {Math.round(weather.feels_like)} <span>&deg;F</span></StyledCurrentFeelsLike>
                    </StyledCurrentWeather>
                    {conditions && <StyledIconContainer>
                        {icon && <StyledWeatherIcon alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>}
                    </StyledIconContainer>}
                </StyledCurrentWeatherContainer>
            </StyledCurrentWeatherCard>}
        </>
    )
}

export default CurrentWeather