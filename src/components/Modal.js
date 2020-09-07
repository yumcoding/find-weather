import React from "react";

function Modal({ data, modalState, hideModal }) {
  const modalClassName = modalState
    ? "modal display-block"
    : "modal display-none";
  const { city, temp, maxTemp, minTemp, description, weather, icon } = data;
  const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={modalClassName}>
      <div className="modal-main">
        <div onClick={hideModal} className="modal-close">
          <i className="fa fa-times"></i>
        </div>
        <div className="modal-content">
          <h1 className="modal-city">{city}</h1>
          <h4 className="modal-des">{description}</h4>
          <img className="modal-img" src={weatherIcon} alt={weather} />
          <div className="modal-temp">{temp}℃</div>
          <p className="modal-highlow">
            High: {maxTemp}℃ - Low:{minTemp}℃
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
