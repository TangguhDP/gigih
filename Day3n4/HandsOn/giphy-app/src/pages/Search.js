import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gif from "../components/Gif";
import { setData } from "../app/searchSlice";

export default function Search() {
  const [search, setSearch] = useState("");
  // const [data, setData] = useState([]);
  const dataQuery = useSelector((state) => state.search.data);
  const dispatch = useDispatch();

  const getSearch = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${search}&limit=6`
    )
      .then((response) => response.json())
      .then((response) => {
        // setData(response.data);
        dispatch(setData(response.data));
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
      {dataQuery?.map((gif, i) => {
        return <Gif key={i} title={gif.title} url={gif.images.original.url} />;
      })}
    </div>
  );
}
