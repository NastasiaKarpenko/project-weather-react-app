import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather(){
    return(
<div className="Weather">
    <div className="row">
        <div claasName="col-10">
            <div className="row">
                <div className="col-8 cities">
                    <a href="/" data-value="Irpin">Irpin</a>
                    <a href="/" data-value="Krakow">Krakow</a>
                    <a href="/" data-value="Eindhoven">Eindhoven</a>
                    <a href="/" data-value="Sofia">Sofia</a>
                    <a href="/" data-value="Drogheda">Drogheda</a>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-warning shadow-sm w-100">
                        Current
                    </button>

                </div>
            </div>
            <div className="row">
                <div className="col-8 mt-2">
                   <input type="search" 
                   placeholder="Type a city..." 
                    className="form-control shadow-sm"
                    autoFocus="on"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-warning w-100 mt-2 shadow-sm">
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                <h2>Kyiv</h2>
                <p>Last updated: <span className="current-date">Mon, 15:30</span></p>
            </div>
            <div className="row">
                 <div className="col-4">
                     <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather-icon"/>
                     <strong className="temperature">-3</strong>1
                     <span className="units">
              <a href="/" id="celsius-link">°C</a> |
              <a href="/" id="fahrenheit-link">°F</a>
            </span>
                 </div>
                 <div className="col-4">
                 <ul>
                     <li>Clouds</li>
                     <li>Humidity: 42%</li>
                     <li>Wind: 2 km/h</li>
                </ul>

                 </div>
            </div>

        </div>
    
        <div claasName="col-2">
            <div className="row">
                <div className="col">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather-icon"/> Thu 18°12°
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
