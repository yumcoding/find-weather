import React from "react";

function Header({ data: { city, weather, temp } }) {
  return (
    <div className="header">
      <h2 className="city">{city}</h2>
      <p className="weather">{weather}</p>
      <h1 className="temp">{temp}℃</h1>
    </div>
  );
}

export default Header;
