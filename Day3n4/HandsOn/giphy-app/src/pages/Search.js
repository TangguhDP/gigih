import React, { useState } from "react";
import Gif from "../components/Gif";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getSearch = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${search}&limit=6`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div className="wrapper">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="input-text"
        type="text"
        name="search"
      />
      <button
        onClick={() => getSearch()}
        className="search-button"
        type="button"
      >
        Search
      </button>
      {data?.map((gif, i) => {
        return <Gif key={i} title={gif.title} url={gif.images.original.url} />;
      })}
    </div>
  );
}
