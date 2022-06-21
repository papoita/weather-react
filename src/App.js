import React from "react";

import Footer from "./Footer";
import Weather from "./Weather";
import "./styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App by Papo</h1>
      
      <Weather/>
      
      
      <Footer />
    </div>
    </div>
  );
}


