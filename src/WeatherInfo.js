import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
                 <div className="col-6 d-flex">
                     <div className="float-left">
                         <WeatherIcon code={props.data.icon}/>
                     </div>
                    <div>
                    <WeatherTemperature celsius={props.data.temp}/>
                    </div> 
                </div>
                <div className="col-5">
                 <ul>
                     <li className="text-capitalize">{props.data.description}</li>
                     <li>Humidity: {props.data.humidity}%</li>
                     <li>Wind: {props.data.wind} km/h</li>
                </ul>

                 </div>
            </div>
        </div>
    )
}