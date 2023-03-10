import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecastDay(props){
 function maxTemp(){
     let temperature = Math.round(props.data.temp.max);
     return `${temperature}`;
 }
 function minTemp(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
}

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
    return days[day];
}

    return(
        <div className="weatherForecast-day">
                <WeatherIcon code={props.data.weather[0].icon} size={36}/> 
                <span >{day()} </span>
                <span className="weatherForecast-max-temp fw-semibold">  {maxTemp()}°</span>
                <span className="weatherForecast-min-temp"> {minTemp()}°</span>
        </div>
    )
}
