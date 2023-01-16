import React from "react";

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
        <div>
                <span className="weatherForecast-day">{day()}</span> 
                <img src="http://openweathermap.org/img/wn/{forecast[0].weather[0].icon}@2x.png"
                     alt={props.data.description}/> 
                <span className="weatherForecast-max-temp">{maxTemp()}°</span>
                <span className="weatherForecast-min-temp">{minTemp()}°</span>
        </div>
    )
}
