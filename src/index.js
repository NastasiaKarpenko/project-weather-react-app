import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import SearchEngine from "./SearchEngine";
import CityForecast from "./CityForecast";
import FiveMoreDays from "./FiveMoreDays";


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <App />
                  <SearchEngine />
                  <CityForecast />
                </div>
                <FiveMoreDays />
                <FiveMoreDays />
              </div>
            </div>
          </div>
          <div id="signature">
            
            <footer><small>
      <a href="https://github.com/NastasiaKarpenko/project-weather-react-app" target="_blank" rel="noopener noreferrer">Open-source code,</a> by{" "}
    <a href="https://fantastic-banoffee-9a9f78.netlify.app/" target="_blank" rel="noopener noreferrer">Anastasiia Kovalenko</a>
    </small></footer>
            
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
