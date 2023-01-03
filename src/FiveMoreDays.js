import React from "react";
import "./FiveMoreDays.css";

export default function FiveMoreDays() {
  return (
    <div className="col-3">
      <div className="row" id="forecast">
        <div className="col">
          <img
            src="http://openweathermap.org/img/wn/04n@2x.png"
            alt="icon"
            width="42"
          />
          <span className="weather-forecast-date">Thu</span>
          <span className="weather-forecast-temperature-max">18°</span>
          <span className="weather-forecast-temperature-min">12°</span>
        </div>
      </div>
    </div>
  );
}
