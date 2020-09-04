import React from "react";
import "./App.css";
import Forecast from "./Forecast";
import WeeklyForecast from "./WeeklyForecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather app{" "}
          <img
            className="header-img"
            src="http://media.idownloadblog.com/wp-content/uploads/2013/12/iOS-7-weather-app-icon.png"
            width="50px"
            alt=""
          ></img>
        </h1>{" "}
      </header>
      <div part="page-body" className="container-fluid">
        <Forecast city="" />
      </div>
    </div>
  );
}

export default App;
