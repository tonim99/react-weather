/*
 handles form input
 sets zip to input on submit
*/

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchByZipForm.module.css';
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.searchBg};
    border-radius: 45px;
`
const StyledInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-color-light);
    border-radius: 45px;
    background-color: ${(props) => props.theme.searchBg};
    border-style: solid;
    border: 5px solid var(--text-color-light);
    text-align: right;
`

const StyledInput = styled.input`
    font-size: 16px;
    padding: 8px;
    color: var(--text-color-light);
    background-color: ${(props) => props.theme.searchBg};
    border-style: hidden;
    border-radius: 45px;
    text-align: center;
    width: 300px;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.1);
    outline: none;
`

const StyledButton = styled.button`
    background-color: ${(props) => props.theme.searchBg};
    color: var(--text-color-light);
    font-size: 18px;
    padding: 8px;
    margin-left: -32px; 
    border-radius: 20px; 
    border-style: hidden;
    font-size: 16px;
`
const SearchByZipForm = ({ setZip, input, setInput }) => {

    const changeZip = (e) => {
        try{
            e.preventDefault()
            setZip(input)
        } catch(error) {
            return <div>{error.message}</div>
        }finally{
            setInput('')
        }

    }

    return(
        <StyledForm onSubmit={changeZip}>
            <StyledInputContainer className="input-container">
                <StyledInput 
                    type='text'
                    value={input}
                    name='zip'
                    placeholder='Search Zip Code'
                    onChange={(e) => setInput(e.target.value)}
                />
                <StyledButton type='submit'>
                    <FontAwesomeIcon icon={faSearch} rotation={90} />
                </StyledButton>
            </StyledInputContainer>
        </StyledForm>
    )
}

export default SearchByZipForm