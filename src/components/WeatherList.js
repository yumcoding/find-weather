import React, { Component } from "react";
import Weather from "./Weather";

class WeatherList extends Component {
  static defaultProps = {
    favCities: [],
  };

  render() {
    const { favCities } = this.props;
    const list = favCities.map((city, i) => <Weather key={i} city={city} />);
    return <ul>{list}</ul>;
  }
}

export default WeatherList;
