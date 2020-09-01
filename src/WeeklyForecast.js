import React from "react";
import axios from "axios";

import "./WeeklyForecast.css";

export default function (props) {
  function weeklyForecast(response) {
    console.log(response.data);
  }
  let ApiKey = "37bf5a036b50f06a7335705f522";
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${ApiKey}`;
  axios.get(url).then(weeklyForecast);

  return (
    <div>
      <h2 className="following-days-header">Following days forecast</h2>
      <br />

      <div className="weeklyForecast">
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tuesday 9th</h5>
              <h1 className="card-text">🌧</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wednesday 10th</h5>
              <h1 className="card-text">🌧</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Thursday 11th</h5>
              <h1 className="card-text">🌧</h1>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Friday 12th</h5>
              <h1 className="card-text">🌧</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
