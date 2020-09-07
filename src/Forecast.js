import React, { useState } from "react";
import axios from "axios";
import Date from "./date.js";
import Temperature from "./temperature.js";
import Hour from "./hour.js";

import "./Forecast.css";

export default function Forecast() {
  const [ready, setReady] = useState(true);
  const [forecast, setForecast] = useState({});
  const [city, setCity] = useState(null);
  function handleRequest(response) {
    setReady(true);
    setForecast({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37bf5a036b50f06a7335705f522feed4&units=metric`;
    axios.get(url).then(handleRequest);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="page-body">
        <div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for a city 🔍"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
        <br />
        <Date />
        <h2 className="city-name"> {city}</h2>

        <section name="city-temperature" className="row">
          <h2>
            <Temperature celsius={forecast.temperature} />
          </h2>
          <ul>
            <li>
              <strong>Last update: </strong>
              <Hour />
            </li>
            <li>{forecast.description}</li>
          </ul>
          <ul>
            <li>
              <strong>Humidity: </strong>
              {forecast.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {forecast.wind} km/h
            </li>
          </ul>
        </section>
        <br />
      </div>
    );
  } else {
    return "Looking throught the window(so you don't have to), wait...";
  }
}
