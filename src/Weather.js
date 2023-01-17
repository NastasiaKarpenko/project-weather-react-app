import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo" ;
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";



export default function Weather(props){
    const [city,setCity]=useState(props.defaultCity)
    const[weatherData, setWeatherData]=useState({ready:false});

    function handleSubmit(response){
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temp:response.data.main.temp,
            wind:response.data.wind.speed,
            city:response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity:response.data.main.humidity,
        });  } 

    function search(){
    const apiKey="fdaeb70f86d9811e4917af5701e5fdf2";
    let unit="metric";
    let urlApi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(urlApi).then(handleSubmit);
}  

    function showInfoForCity(event){
    event.preventDefault();
    search();
    }

function handleCityChange(event){
setCity(event.target.value);
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
                    <form onSubmit={showInfoForCity}>
                   <input type="search" 
                   placeholder="Type a city..." 
                    className="form-control shadow-sm"
                    autoFocus="on"
                    onChange={handleCityChange}/>
                    </form>
                </div>
                <div className="col-3">
                    <button className="btn btn-warning w-100 mt-2 shadow-sm">
                        Search
                    </button>
                </div>
            </div>
            <WeatherInfo data={weatherData}/>


        </div>
    
        <div className="col-3">
           <WeatherForecast data={weatherData}/>
        </div>
    </div>
</div>
    );
}else{
    search()

    return "loading";

}
    
}
