import React from 'react';
// import WeatherAPI from './api/Weather';
// import Form from './components/Form'
import Weather from './api/Weather'
import './App.css';

function App() {
  

  return (
    <div className="App">
      <h1>Your Current Local Weather</h1>
      <Weather />
    </div>
  );
}

export default App;
