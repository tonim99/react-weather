import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchByZipForm from './SearchByZipForm';

describe('Weather Component', () => {
    beforeEach(() => jest.clearAllMocks())

    const props = {
        setZip: jest.fn(),
        setInput: jest.fn(),
        input: '24401'
    }
    it('should set the zip when the button is pressed', async () => {
        render(<SearchByZipForm {...props}/>)
        await waitFor(() => {
            screen.getByPlaceholderText('Search Zip Code')
        });
        userEvent.type(screen.getByPlaceholderText('Search Zip Code'), '24401');
        userEvent.click(screen.getByRole('button', {name: ''}));
        expect(props.setZip).toHaveBeenCalledWith('24401')
    })
})