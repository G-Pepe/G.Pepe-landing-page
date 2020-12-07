import React, { useContext, useEffect } from "react";
import { MyContext } from "./Contextfile";
import { Temperature } from "./Temperature";
let initialCity = "Berlin";

export const WeatherApp = () => {
  const { city, setCity, weather, setWeather } = useContext(MyContext);

  const searchWeather = (e) => {
    e.preventDefault();
    fetchData(city);
    console.log(city);
    //context.setCity(context.city);
    //console.log(context.city);
  };

  const getCity = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchData(initialCity);
  }, []);

  const fetchData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    ).then((res) =>
      res.json().then((result) => {
        setWeather(result);
        console.log(result);
        //console.log(context.weather);
      })
    );
  };

  return (
    <div>
      <form onSubmit={searchWeather}>
        <input type="text" name="city" onChange={getCity} />
        <input type="submit" value="search" />
      </form>

      {weather && <Temperature />}
    </div>
  );
};
