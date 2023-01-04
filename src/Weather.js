import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
<div className="Weather">
    <div className="row">
        <div claasName="col-10">
            <div className="row">
                <div className="col-8 justify-content space-evenly">
                    <a href="/" data-value="Irpin">Irpin</a>
                    <a href="/" data-value="Krakow">Krakow</a>
                    <a href="/" data-value="Eindhoven">Eindhoven</a>
                    <a href="/" data-value="Sofia">Sofia</a>
                    <a href="/" data-value="Drogheda">Drogheda</a>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-warning">
                        Current
                    </button>

                </div>
            </div>
            <div className="row">
                <div className="col-8">
                   <input type="search" placeholder="Type a city..." />
                </div>
                <div className="col-2">
                    <button className="btn btn-warning">
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                <h2>Kyiv</h2>
                <p>Last updated: Mon, 15:30</p>
            </div>
            <div className="row">
                 <div className="col-4">
                     <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"></img>
                    11°C |°F

                 </div>
                 <div className="col-4">
        
                 </div>
            </div>

        </div>
        <div claasName="col-2">
            
        </div>
    </div>
</div>
    );
}
