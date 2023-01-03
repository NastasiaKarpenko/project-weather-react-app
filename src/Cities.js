import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="row" id="namedCity">
      <div className="col">
        <a href="/" data-value="Irpin">
          Irpin
        </a>
      </div>
      <div className="col">
        <a href="/" data-value="Krakow">
          Krakow
        </a>
      </div>
      <div className="col">
        <a href="/" data-value="Eindhoven">
          Eindhoven
        </a>
      </div>
      <div className="col">
        <a href="/" data-value="Sofia">
          Sofia
        </a>
      </div>
      <div className="col">
        <a href="/" data-value="Drogheda">
          Drogheda
        </a>
      </div>

      <button type="button" className="btn-current" id="currentPosition">
        Current
      </button>
    </div>
  );
}
