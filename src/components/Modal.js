import React from "react";

function Modal({ data }) {
  const { city, temp, maxTemp, minTemp, description, weather, icon } = data;
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="modal-container">
      <h3>{city}</h3>
      <h4>{description}</h4>
      <img src={weatherIcon} alt={weather} />
      <h5>{temp}</h5>
      <p>
        {maxTemp} {minTemp}
      </p>
    </div>
  );
}

export default Modal;
