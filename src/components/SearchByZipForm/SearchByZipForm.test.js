import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchByZipForm from './SearchByZipForm';
import * as api from '../../api/Api';

jest.mock('../../api/Api');

describe('Weather Component', () => {
    beforeEach(() => jest.clearAllMocks())

    const props = {
        setZip: jest.fn(),
        setInput: jest.fn(),
        input: '22980',
    }
    it('should call the getLatLon function when the button is pressed', async () => {
        render(<SearchByZipForm {...props}/>)
        await waitFor(() => {
            screen.getByPlaceholderText('Search Zip Code')
        });
        userEvent.type(screen.getByPlaceholderText('Search Zip Code'), '22980');
        userEvent.click(screen.getByRole('button', {name: ''}));
        expect(api.getLatLon).toHaveBeenCalledWith('22980')
    })
})