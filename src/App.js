import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    data: {
      city: "",
      temp: "",
      maxTemp: "",
      minTemp: "",
      weather: "",
      description: "",
      icon: "",
    },
    showing: false,
  };

  getWeather = async (latitude, longitude) => {
    const API_KEY = "8f667f21fc1b75023d24daa366a24cbb";
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    const { name } = data;
    const { temp, temp_max, temp_min } = data.main;
    const { main, description, icon } = data.weather[0];
    this.setState({
      data: {
        city: name,
        temp,
        maxTemp: temp_max,
        minTemp: temp_min,
        weather: main,
        description,
        icon,
      },
    });
  };

  getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.getWeather(latitude, longitude);
    });
  };

  componentDidMount() {
    this.getPosition();
  }

  showModal = () => {
    this.setState({ showing: true });
  };

  hideModal = () => {
    this.setState({ showing: false });
  };

  render() {
    const { data, showing } = this.state;
    return (
      <div className="container">
        <Header data={data} />
        <button className="btn-modal" onClick={this.showModal}>
          More Details
        </button>
        {showing ? (
          <Modal data={data} modalState={showing} hideModal={this.hideModal} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
