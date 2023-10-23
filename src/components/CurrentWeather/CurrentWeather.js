/* displays all current weather-related data */
import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    padding-left: 12px;
`
const StyledCurrentWeatherCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 20px auto;
    background-color: #ffffff;
    color: var(--text-color-dark);
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.25), 0 0 50px rgba(0,0,0,0.1);
`

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    height: 32px;
    padding: 12px 0px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`

const StyledCurrentWeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;

    @media $(device.tablet) {
        flex-direction: column;
        justify-content: center;
    }
`

const StyledCurrentTemp = styled.p`
    font-size: 96px;
    font-weight: bold;
    margin: 0px;
    display: flex;
`

const StyledCurrentConditions = styled.p`
    font-size: 18px;
    justify-content: left;
    width: 100%;
    text-transform: capitalize;
`

const StyledCurrentFeelsLike = styled.p`
    font-size: 18px;
    justify-content: left;
`

const StyledWeatherIcon = styled.img`
    height: 192px;
    width: 192px;
`
const CurrentWeather = ({ weather, conditions, icon, city, stateAbbr }) => {
    
    return(
        <>
            {weather && <StyledCurrentWeatherCard>
                {city && <StyledHeader>
                    <StyledH2>{city}, {stateAbbr}</StyledH2>
                </StyledHeader>}
                <StyledCurrentWeatherContainer>
                    <div>
                        <StyledCurrentTemp>{Math.round(weather.temp)} <span>&deg;</span></StyledCurrentTemp>
                        <StyledCurrentConditions>{conditions}</StyledCurrentConditions>
                        <StyledCurrentFeelsLike>Feels Like {Math.round(weather.feels_like)} <span>&deg;</span></StyledCurrentFeelsLike>
                    </div>
                    {conditions && <div>
                        {icon && <StyledWeatherIcon alt='weather-icon' src={`http://openweathermap.org/img/wn/${icon}@4x.png`}/>}
                    </div>}
                </StyledCurrentWeatherContainer>
            </StyledCurrentWeatherCard>}
        </>
    )
}

export default CurrentWeather