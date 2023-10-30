import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Weather from './Weather';
import * as api from '../../api/Api';
import states from 'us-state-converter';

jest.mock('../../api/Api');

describe('Weather Component', () => {
    beforeEach(() => jest.clearAllMocks())

    const latLon = {
        zip: '22980', 
        name: 'Waynesboro', 
        lat: 38.0686668, 
        lon: -78.8893999, 
        country: 'US'
    };
    
    const stateByLatLon = [{
        name: 'Waynesboro', 
        lat: 38.0686668, 
        lon: -78.8893999, 
        country: 'US', 
        state: 'Virginia'
    }];

    const currentWeather = {
        current:{
            clouds: 0,
            dew_point: 41.74,
            dt: 1698348983,
            feels_like: 79,
            humidity: 26,
            pressure: 1022,
            sunrise: 1698320133,
            sunset: 1698359081,
            temp: 79,
            uvi: 1.59,
            visibility: 10000,
        
        weather: [{
            description: "clear sky",
            icon: "01d",
            id: 800,
            main: "Clear",
        }],
        wind_deg: 360,
        wind_gust: 11.01,
        wind_speed: 5.01,
    },
        daily: [{
            clouds: 50,
            dew_point: 40.66,
            dt: 1698339600,
            feels_like: {
                day: 75,
                eve: 69,
                morn: 49,
                night: 58,
            },
            humidity: 27,
            moon_phase: 0.42,
            moonrise: 1698355260,
            moonset: 1698310260,
            pop: 0,
            pressure: 1023,
            sunrise: 1698320133,
            sunset: 1698359081,
            temp: {
                day: 77,
                eve: 70,
                max: 79,
                min: 51,
                morn: 52,
                night: 59,
            },
            uvi: 3.94,
            weather: [{
                description: "scattered clouds",
                icon: "03d",
                id: 802,
                main: "Clouds",
            }],
            wind_deg: 243,
            wind_gust: 9.86,
            wind_speed: 6.78,
        }],
    };
    it('should render the page', async () => {
        render (<Weather />);
        await api.getLatLon.mockResolvedValue(latLon); 
        await api.getStateByLatLon.mockResolvedValue(stateByLatLon);
        await api.getWeather.mockResolvedValue(currentWeather);
        const stateAbbr = states.abbr(stateByLatLon[0].state);
        await waitFor(() => {
            screen.getByPlaceholderText('Search Zip Code')
        });
        userEvent.type(screen.getByPlaceholderText('Search Zip Code'), '22980');
        userEvent.click(screen.getByRole('button', {name: ''}));
        await screen.findByText(`Waynesboro, ${stateAbbr}`);
        screen.getByText('79');
        screen.getByText('clear sky');
        screen.getByText('Feels Like 79');
        screen.getByText('Daily Forecast');
        screen.getByText('Thu 26');
        screen.getByText('Clouds');
   });

   it('displays an error from the getLatLon API call', async () => {
     await api.getLatLon.mockRejectedValue(new Error('This is an error message'));

     render(<Weather />)
        userEvent.type(screen.getByPlaceholderText('Search Zip Code'), '22980');
        userEvent.click(screen.getByRole('button', {name: ''}));
        await screen.findByText('This is an error message')
   });
}) ;