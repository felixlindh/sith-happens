import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar(props) {
  const navigate = useNavigate();
  const [searchValues, setSearchValues] = useState({
    query: "",
    category: "people",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchValues((prevSearchValues) => {
      return {
        ...prevSearchValues,
        [name]: value,
      };
    });
  }

  function handleKeyDown(event) {
    if (event.code === "Enter") {
      onSearchClick();
    }
  }

  function onSearchClick() {
    const url = `${props.startUrl}${
      searchValues.category
    }/?search=${searchValues.query.toLowerCase()}`;

    props.fetchFromUrl(url);
    navigate("/sith-happens/" + searchValues.category);
  }

  return (
    <div className="search-bar">
      <select
        className="select"
        onChange={handleChange}
        value={searchValues.category}
        name="category">
        <option value={"people"}>People</option>
        <option value={"starships"}>Starships</option>
        <option value={"vehicles"}>Vehicles</option>
        <option value={"films"}>Films</option>
        <option value={"planets"}>Planets</option>
        <option value={"species"}>Species</option>
      </select>

      <input
        className="search-input"
        placeholder="search for star wars stuff.."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="query"
        value={searchValues.query}
        type="text"
      />
      <button className="search-button" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}
