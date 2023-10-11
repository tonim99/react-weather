/* NavBar renders nav element and passes props to child - 
SearchByZip (form that searches for weather by zip code) */

import React from 'react'
import SearchByZip from '../SearchByZipForm/SearchByZipForm'
import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
    align-items: center;
    justify-content: center;
    height: 82px;
    width: 100%;
    background-color: ${(props) => props.theme.navBg};
`
const NavBar = ({ setZip, input, setInput }) => {

    return (
        <Nav>
            <SearchByZip
                setZip={setZip}
                input={input}
                setInput={setInput}
            />
        </Nav>
    )
}

export default NavBar