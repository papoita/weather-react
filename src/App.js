import React from 'react';
import Form from "./Form";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather App by Papo</h1>
       <Weather/>
       <Form />
      </header>
      
    </div>
  );
}

export default App;
