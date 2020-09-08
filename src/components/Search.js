import React, { Component } from "react";

class Search extends Component {
  state = {
    city: "",
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onCreate } = this.props;
    onCreate(this.state.city);
    this.setState({ city: "" });
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Enter your favourite city"
          value={this.state.city}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
