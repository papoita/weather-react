import React from "react";
import Form from "./Form";

export default function Weather(){
  return(<>
    <Form/>
    <div className="weather">
    <div className="row">
      <div className="col-6">
        <img  src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="" />
        <div >21 C | F</div>
        <div ><ul>
        <li>Precipitation: 15%</li>
        <li>Humidity:48%</li>
        <li>Winde 8km/hr</li>
        </ul></div>
        
      </div>
      <div className="col-6"><h1>Ottawa, ON</h1>
    <ul>
      <li> Monday 09:00 pm</li>
      <li> Mostly Cloudy</li>
    </ul></div>
    </div>
  </div>
  </>)
}