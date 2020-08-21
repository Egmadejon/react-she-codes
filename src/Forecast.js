import React, { useState } from "react";
import Icons from "./icons.js";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  const [city, setCity] = useState(null);
  function handleRequest(response) {}
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37bf5a036b50f06a7335705f522feed4&units=metric`;
    axios.get(url).then(handleRequest);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
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
          <button type="button" className="btn btn-primary btn-sm">
            Current location{" "}
          </button>
        </div>
      </div>
      <h2 className="city-name">
        {" "}
        New York <Icons />
      </h2>

      <section name="city-temperature" className="row">
        <h2 className="temperature">20°</h2>
        <h2>C|F</h2>
        <ul>
          <li>
            <strong>Date: </strong>Monday 10th August
          </li>
          <li>
            <strong>Last update: </strong>10:30h
          </li>
          <li>Cloudy</li>
        </ul>
        <ul>
          <li>
            <strong>Humidity:</strong>
          </li>
          <li>
            <strong>Wind:</strong>
          </li>
          <li>
            <strong> Feels like:</strong>{" "}
          </li>
        </ul>
      </section>
    </div>
  );
}
