import React from 'react'

const Form = ({input, setCity, setInput}) => {
    
    const changeCity = (e) => {
        e.preventDefault()
        setCity(input)
    }
    
    return(
        <form onSubmit={(e) => changeCity(e)}>
            <input 
                className='city-input'
                type='text'
                value={input}
                name='city'
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form