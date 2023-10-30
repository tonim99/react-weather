

import React from 'react';
import Weather from './components/Weather/Weather'
import styled from 'styled-components'

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
  color: var(--text-color-light);
`
function App() {

  return (
    <StyledApp className="App">
      <Weather />
    </StyledApp>
    );
}

export default App;