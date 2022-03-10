import React from 'react'
import Form from './Form'
import './NavBar.css'
const NavBar = ({ setZip, input, setInput }) => {

    return (
        <nav>
            <Form 
                setZip={setZip}
                input={input}
                setInput={setInput}
            />
        </nav>
    )
}

export default NavBar