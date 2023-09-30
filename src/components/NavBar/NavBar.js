/* NavBar renders nav element and passes props to child - 
SearchByZip (form that searches for weather by zip code) */

import React from 'react'
import SearchByZip from '../SearchByZipForm/SearchByZipForm'
import './NavBar.module.css'
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