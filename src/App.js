import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";

class App extends Component {
  state = {
    city: "",
    temp: "",
    maxTemp: "",
    minTemp: "",
    weather: "",
    description: "",
    icon: "",
  };

  getWeather = async () => {
    const API_KEY = "8f667f21fc1b75023d24daa366a24cbb";
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&appid=${API_KEY}`
    );
    const { name } = data;
    const { temp, temp_max, temp_min } = data.main;
    const { main, description, icon } = data.weather[0];
    this.setState({
      city: name,
      temp,
      maxTemp: temp_max,
      minTemp: temp_min,
      weather: main,
      description,
      icon,
    });
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const {
      city,
      temp,
      maxTemp,
      minTemp,
      weather,
      description,
      icon,
    } = this.state;
    return (
      <div className="container">
        <Header city={city} weather={weather} temp={temp} />
      </div>
    );
  }
}

export default App;
