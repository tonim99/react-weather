/*
 handles form input
 sets zip to input on submit
*/

import React from 'react'
import './Form.css';
const Form = ({ setZip, input, setInput }) => {

    const changeZip = (e) => {
        e.preventDefault()
        setZip(input)
    }

    /* TODO:

     handleSubmit() should clear the input after promises are 
     resolved and zip is set. 
     Currently clears input before zip is set and the 
     API call is not made because the zip code is an empty
     string.

    */

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setInput('')
    // }

    return(
        <form onSubmit={(e) => changeZip(e)}>
            <input 
                type='text'
                value={input}
                name='zip'
                placeholder='Search Zip Code'
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default Form