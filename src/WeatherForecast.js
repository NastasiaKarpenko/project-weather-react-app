import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
    let [forecastData, setForecastData]=useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true)
    }

if (loaded){

    return(
        <div className="WeatherForecast">
             <div className="row">
                <div className="col">
                <WeatherForecastDay data={forecastData[0]}/>
                </div>
            </div>
        </div>
    )
}else{
let apiKey="fdaeb70f86d9811e4917af5701e5fdf2";
let longitude=props.data.coordinates.lon;
let latitude = props.data.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;    
    
axios.get(apiUrl).then(handleResponse);
return "Loading"}
}