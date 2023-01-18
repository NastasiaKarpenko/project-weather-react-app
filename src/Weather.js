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
    if (city.length > 2) {
        search();
      } else {
        alert("Enter a city");
      }
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
                <div className="col nput-group ">
                   <form onSubmit={showInfoForCity}>
                   <input type="search" 
                   placeholder="Type a city..." 
                    className="form-control shadow-sm"
                    autoFocus="on"
                    onChange={handleCityChange}/>
                    <input type="submit" 
                    value="Search" 
                    className="btn ms-4 btn-outline-warning shadow-sm" />
                    </form>
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
