import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
                        <div className="row">
                <h2>{props.data.city}</h2>
                <div><span className="current-date">
                    <FormatDate date={props.data.date}/>
                    </span></div>
            </div>
            <div className="row">
                 <div className="col-5">
                     <img src={props.data.icon} 
                     alt={props.data.description}
                     className="float-left"/>
                     <strong className="temperature float-left">{Math.round(props.data.temp)}</strong>
                     <span className="units">
              <a href="/" id="celsius-link">°C</a> |
              <a href="/" id="fahrenheit-link">°F</a>
            </span>
                 </div>
                 <div className="col-5">
                 <ul>
                     <li className="letter-capitalize">{props.data.description}</li>
                     <li>Humidity: {props.data.humidity}%</li>
                     <li>Wind: {props.data.wind} km/h</li>
                </ul>

                 </div>
            </div>
        </div>
    )
}