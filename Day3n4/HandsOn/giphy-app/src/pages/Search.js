import React, { Component } from "react";
import GiphyWithSearch from "../components/GiphyWithSearch";

export default class Search extends Component {
  state = {
    search: "",
    data: [],
  };

  getSearch = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.search}&limit=6`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.data });
      });
  };

  render() {
    return (
      <div className="wrapper">
          <input
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            className="input-text"
            type="text"
            name="search"
          />
          <button
            onClick={() => this.getSearch()}
            className="search-button"
            type="button"
          >
            Search
          </button>
        {this.state.data?.map((gif, i) => {
          return (
            <GiphyWithSearch
              key={i}
              title={gif.title}
              url={gif.images.original.url}
            />
          );
        })}
      </div>
    );
  }
}
