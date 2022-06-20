import React, { useState } from "react";
//import Weather from "./Weather";
import axios from "axios";
//import Loader from "react-loading-spinner";

export default function Form() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showResponse(response) {
    setLoaded(true);
    setWeather({
      tempC: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    //console.log(response.data)
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a5d0107b87d2358462582e10139dd2d&units=metric`;
    axios.get(url).then(showResponse);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="weather">
          <li>
            The temperature in {city} is {Math.round(weather.tempC)} C
          </li>
          <li>The wind is {weather.wind} km/hr</li>
          <li>The humidity is {weather.humidity} %</li>
          <li>The description is: {weather.description}</li>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
