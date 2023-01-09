import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <Weather defaultCity="Kyiv"/>
      <footer>
              <small> This project was coded by {" "}
                <a href="https://fantastic-banoffee-9a9f78.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer">
                  Anastasiia Kovalenko
                </a>{" "}and is {" "}
                <a href="https://github.com/NastasiaKarpenko/project-weather-react-app" 
                target="_blank" 
                rel="noopener noreferrer">
                open-source code
                 </a>

    </small></footer>
    </div>     
    
    // <div className="row" id="namedCity">
    //   <div className="col">
    //     <a href="/" data-value="Irpin">
    //       Irpin
    //     </a>
    //   </div>
    //   <div className="col">
    //     <a href="/" data-value="Krakow">
    //       Krakow
    //     </a>
    //   </div>
    //   <div className="col">
    //     <a href="/" data-value="Eindhoven">
    //       Eindhoven
    //     </a>
    //   </div>
    //   <div className="col">
    //     <a href="/" data-value="Sofia">
    //       Sofia
    //     </a>
    //   </div>
    //   <div className="col">
    //     <a href="/" data-value="Drogheda">
    //       Drogheda
    //     </a>
    //   </div>

    //   <button type="button" className="btn-current" id="currentPosition">
    //     Current
    //   </button>
    // </div>
  );
}
