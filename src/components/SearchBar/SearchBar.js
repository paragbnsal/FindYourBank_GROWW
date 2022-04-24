import React, { useState } from "react";

const SearchBar = () => {
  const cities = ["Favourite", "Mumbai", "Delhi", "Kolkata", "Goa", "Jaipur"];

  const [city, setCity] = useState("Favourite");
  // const [banks, setBanks] = useState([]);

  const searchHandler = async () => {
    const url = `https://vast-shore-74260.herokuapp.com/banks?city=${city.toUpperCase()}`;
    const response = await fetch(url, { cache: "force-cache" });
    const data = await response.json();
    // setBanks(data);
    console.log(data);
  };

  const citySelectHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <div>
        <select
          className="custom-select"
          name="city"
          onChange={citySelectHandler}
        >
          {cities.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <button onClick={searchHandler}> Search </button>
      </div>
    </>
  );
};

export default SearchBar;
