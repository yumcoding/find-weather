import React, { Component } from "react";

class WeatherList extends Component {
  render() {
    const { favCities } = this.props;
    console.log(favCities);
    return <div>Sanity Check</div>;
  }
}

export default WeatherList;
