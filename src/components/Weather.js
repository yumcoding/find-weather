import React, { Component } from "react";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";

class Weather extends Component {
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

  showModal = () => {
    this.setState({ showing: true });
  };

  hideModal = () => {
    this.setState({ showing: false });
  };

  getWeather = async (city) => {
    const API_KEY = "8f667f21fc1b75023d24daa366a24cbb";
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
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

  componentDidMount() {
    this.getWeather(this.props.city);
  }

  render() {
    const { data } = this.state;
    const { showing } = this.state;
    const weatherIcon = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

    return (
      <li className="fav-weather">
        <h2 className="fav-city">{data.city}</h2>
        <p className="fav-des">{data.weather}</p>
        <img src={weatherIcon} alt={data.weather} />
        <h1 className="fav-temp">{data.temp}℃</h1>
        <Button showModal={this.showModal} />
        {showing ? (
          <Modal
            data={this.state.data}
            modalState={showing}
            hideModal={this.hideModal}
          />
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default Weather;
