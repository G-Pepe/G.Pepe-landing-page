import React, { useContext } from "react";
import { MyContext } from "./Contextfile";
import { v4 as uuidv4 } from "uuid";

export const AddToDos = (props) => {
  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newToDo = {
      id: uuidv4(),
      text: e.target[0].value,
      number: e.target[1].value,
      status: false,
    };
    console.log(newToDo);
    props.addToDo(newToDo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          className="activity"
          placeholder="activity"
        />

        <input type="number" className="number"></input>

        <button
          className="submit-btn"
          type="submit"
          style={{ display: "none" }}
        >
          {/*  &#43; */}
        </button>
      </form>
    </div>
  );
};
