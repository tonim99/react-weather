import React from 'react';
import Weather from './api/Weather'
// import TestApiCall from './api/TestApiCall';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <h1>Your Current Local Weather</h1>
      <Weather />
      {/* <TestApiCall /> */}
    </div>
  );
}

export default App;
