import React, { useContext } from "react";
import { MyContext } from "./Contextfile";

export const Temperature = () => {
  const { weather } = useContext(MyContext);
  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <h3>Temperature: {weather.main.temp}</h3>
      <p>Max: {weather.main.temp_max} </p>
      <p>Min: {weather.main.temp_min}</p>
    </div>
  );
};
