import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather(props){
const[weatherData, setWeatherData]=useState({ready:false});

function handleSubmit(response){
console.log(response.data);
setWeatherData({
    ready: true,
    temp:response.data.main.temp,
    wind:response.data.wind.speed,
    city:response.data.name,
    data:"Wensday 7:00",
    description: response.data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    humidity:response.data.main.humidity,

})

}

if (weatherData.ready){
    


    return(
<div className="Weather">
    <div className="row">
        <div className="col-9">
            <div className="row">
                <div className="col-9 cities">
                    <a href="/" data-value="Irpin">Irpin</a>
                    <a href="/" data-value="Krakow">Krakow</a>
                    <a href="/" data-value="Eindhoven">Eindhoven</a>
                    <a href="/" data-value="Sofia">Sofia</a>
                    <a href="/" data-value="Drogheda">Drogheda</a>
                </div>
                <div className="col-3">
                    <button className="btn btn-outline-warning shadow-sm w-100">
                        Current
                    </button>

                </div>
            </div>
            <div className="row">
                <div className="col-9 mt-2">
                   <input type="search" 
                   placeholder="Type a city..." 
                    className="form-control shadow-sm"
                    autoFocus="on"/>
                </div>
                <div className="col-3">
                    <button className="btn btn-warning w-100 mt-2 shadow-sm">
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                <h2>{weatherData.city}</h2>
                <p>Last updated: <span className="current-date">{weatherData.date}</span></p>
            </div>
            <div className="row">
                 <div className="col-5">
                     <img src={weatherData.icon} 
                     alt={weatherData.description}
                     className="float-left"/>
                     <strong className="temperature float-left">{Math.round(weatherData.temp)}</strong>
                     <span className="units">
              <a href="/" id="celsius-link">°C</a> |
              <a href="/" id="fahrenheit-link">°F</a>
            </span>
                 </div>
                 <div className="col-5">
                 <ul>
                     <li className="letter-capitalize">{weatherData.description}</li>
                     <li>Humidity: {weatherData.humidity}%</li>
                     <li>Wind: {weatherData.wind} km/h</li>
                </ul>

                 </div>
            </div>

        </div>
    
        <div className="col-3">
            <div className="row">
                <div className="col">
                <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather-icon"/> Thu 18°12°
                </div>
            </div>
        </div>
    </div>
</div>
    );
}else{
    const apiKey="fdaeb70f86d9811e4917af5701e5fdf2";
    let unit="metric";
    let urlApi=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=&${unit}`;
    axios.get(urlApi).than(handleSubmit);

    return "loading";

}
    
}
