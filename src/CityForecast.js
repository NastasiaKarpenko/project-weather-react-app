import React from "react";
import "./CityForecast.css";

export default function CityForecast() {
  return (
    <div className="row">
      <div className="col-5">
        <h2 id="city">Kyiv</h2>
        <ul>
          <li> Last updated: Monday 10:00</li>
        </ul>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="icon"
          id="icon"
          class="float-left"
        />
        <strong className="temperature">14</strong>
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>
      </div>

      <div className="col-6">
        <ul>
          <li>Clouds</li>
          <li>
            Humidity: <span className="colored-data">42%</span>
          </li>
          <li>
            Wind: <span className="colored-data">2 km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
