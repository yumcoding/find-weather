import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  state = {
    data: {
      city: "",
      temp: "",
      weather: "",
      icon: "",
    },
  };

  getWeather = async (city) => {
    const API_KEY = "8f667f21fc1b75023d24daa366a24cbb";
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const { name } = data;
    const { temp } = data.main;
    const { main, icon } = data.weather[0];
    this.setState({
      data: {
        city: name,
        temp,
        weather: main,
        icon,
      },
    });
  };

  componentDidMount() {
    this.getWeather(this.props.city);
  }

  render() {
    const { city, temp, weather, icon } = this.state.data;
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <li className="fav-weather">
        <h2>{city}</h2>
        <p>{weather}</p>
        <img src={weatherIcon} alt={weather} />
        <h1>{temp}</h1>
      </li>
    );
  }
}

export default Weather;
