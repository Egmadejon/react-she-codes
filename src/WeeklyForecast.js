import React from "react";
import "./WeeklyForecast.css";

export default function () {
  return (
    <div>
      <div class="card-deck">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Tuesday 9th</h5>
            <h1 class="card-text">🌧</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Wednesday 10th</h5>
            <h1 class="card-text">🌧</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Thursday 11th</h5>
            <h1 class="card-text">🌧</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Friday 12th</h5>
            <h1 class="card-text">🌧</h1>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Saturday 13th</h5>
            <h1 class="card-text">🌧</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
