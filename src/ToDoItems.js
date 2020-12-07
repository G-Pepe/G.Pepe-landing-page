import React, { useContext } from "react";
import { MyContext } from "./Contextfile";

export const ToDoItems = (props) => {
  const context = useContext(MyContext);

  const changeColor = (number) => {
    if (props.number >= 0 && props.number <= 2) {
      return "rgba(96,164,115,0.9)";
    } else if (props.number >= 3 && props.number <= 5) {
      return "rgba(95,158,160,1)";
    } else if (props.number >= 5 && props.number <= 7) {
      return "yellow";
    } else if (props.number >= 8 && props.number <= 9) {
      return "rgb(214,182,109)";
    } else if (props.number >= 10) {
      return "rgba(160,82,45,0.7)";
    }
  };

  const toggleStatus = () => {
    context.setLineThrough(!context.lineThrough);
  };

  return (
    <div
      onDoubleClick={() => props.deleteItem(props.id)}
      onClick={toggleStatus}
      style={{
        backgroundColor: changeColor(),
        borderRadius: "10px",
        width: "60%",
      }}
    >
      <li
        className="toDos"
        style={{
          textDecoration: context.lineThrough ? "line-through" : "none",
        }}
      >
        {props.text}
      </li>
    </div>
  );
};
