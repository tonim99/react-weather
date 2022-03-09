import React from 'react';
import Weather from './api/Weather'
import NavBar from './components/NavBar'
// import TestApiCall from './api/TestApiCall';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <h1>Your Current Local Weather</h1>

      <Weather />
      {/* <TestApiCall /> */}
    </div>
  );
}

export default App;
