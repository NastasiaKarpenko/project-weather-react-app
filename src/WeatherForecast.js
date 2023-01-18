import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
    let [forecastData, setForecastData]=useState(null);
    let [loaded, setLoaded] = useState(false);

    useEffect(() => {
       setLoaded(false);
    }, [props.data.coordinates]

    );

    function handleResponse(response){
    setForecastData(response.data.daily);
    setLoaded(true);
    }

    function load(){
let apiKey="fdaeb70f86d9811e4917af5701e5fdf2";
let longitude=props.data.coordinates.lon;
let latitude = props.data.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;    
    
axios.get(apiUrl).then(handleResponse);
return null
    }

if (loaded === true){
    console.log(forecastData);
    return(
        <div className="WeatherForecast">
            {forecastData.map(function(dailyForecast,index){
                if (index < 6){
                return(
                    <div className="row" key={index}>
                     <div className="col">
                     <WeatherForecastDay data={dailyForecast}/>
                     </div>
                    </div>
                )}
                else{ return null;}
            })}
        </div>
    )
}else{
load()}
}