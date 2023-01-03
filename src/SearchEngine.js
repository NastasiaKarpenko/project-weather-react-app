import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="row-search">
      <form className="search-form">
        <input
          type="search"
          placeholder="Type a city..."
          autofocus="on"
          autocomplete="off"
          id="inputCity"
        />
      </form>

      <input
        type="submit"
        value="Search"
        className="btn-search"
        id="nameOfCity"
      />
    </div>
  );
}
