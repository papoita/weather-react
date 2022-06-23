import React from "react";

import Footer from "./Footer";
import Form from "./Form";
import "./styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App by Papo</h1>
      
      <Form/>
      
      
      <Footer />
    </div>
    </div>
  );
}


