/* handles form input and sets selected city */
import React from 'react'
import './Form.css';
const Form = ({ setZip, input, setInput }) => {

    const changeZip = (e) => {
        e.preventDefault()
        setZip(input)
    }
    
    return(
        <form onSubmit={(e) => changeZip(e)}>
            <input 
                type='text'
                value={input}
                name='zip'
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form