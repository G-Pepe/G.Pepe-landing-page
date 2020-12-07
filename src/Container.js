import React, { useState, useEffect } from "react";
import { MyContext } from "./Contextfile";

export default function Container(props) {
  const [toDos, setTodos] = useState([]);
  const [lineThrough, setLineThrough] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [termToSearch, setTermToSearch] = useState("");

  useEffect(() => {
    let updatedData = localStorage.getItem("todo");

    setTodos(JSON.parse(updatedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDos));
  }, [toDos]);

  const contextValue = {
    toDos,
    setTodos,
    lineThrough,
    setLineThrough,
    weather,
    setWeather,
    city,
    setCity,
    termToSearch,
    setTermToSearch,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}
