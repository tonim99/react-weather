import React from 'react'
import SearchByZip from './SearchByZipForm'
import './NavBar.css'
const NavBar = ({ setZip, input, setInput }) => {

    return (
        <nav>
            <SearchByZip
                setZip={setZip}
                input={input}
                setInput={setInput}
            />
        </nav>
    )
}

export default NavBar