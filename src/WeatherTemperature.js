import React, {useState} from "react";

export default function WeatherTemperature(props){
const[unit, setUnit] = useState("celsius");

function ShowFahrenheit(event){
event.preventDefault();
setUnit("fahrenheit");
}

function ShowCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    }
    function fahrenheit(){
      return  (props.celsius * 9 / 5 +32);
    }

if (unit === "celsius") {
    return(
        <div className="WeatherTemperature">
         <strong className="temperature">{Math.round(props.celsius)}</strong>
            <span className="unit">
                   °C |
                   <a href="/" className="fahrenheit-link" onClick={ShowFahrenheit}>°F</a>
            </span>
        </div>)

}else{

return(
   <div className="WeatherTemperature">
       <strong className="temperature">{Math.round(fahrenheit())}</strong>
       <span className="unit">
        <a href="/" className="celsius-link" onClick={ShowCelsius}>°C</a> |°F
        </span>
            </div>
            )
}


}