import React, { useContext } from "react";
import { AddToDos } from "./AddToDos";
import { ColorsExplanation } from "./ColorsExplanation";
import { MyContext } from "./Contextfile";
import { ToDoItems } from "./ToDoItems";

export const ToDoApp = () => {
  const context = useContext(MyContext);

  const addToDo = (newToDo) => {
    context.setTodos((context.toDos = [...context.toDos, newToDo]));
  };

  const deleteItem = (id) => {
    let updatedData = context.toDos.filter((item) => item.id !== id);

    context.setTodos(updatedData);
  };

  return (
    <div
      style={{
        width: "60%",
        marginTop: "3rem",
        marginLeft: "1.5rem",
        height: "100vh",
      }}
    >
      <h1 className="todoH1">ToDos...</h1>
      <AddToDos addToDo={addToDo} />
      <ul>
        {context.toDos.map((item, index) => {
          return (
            <ToDoItems
              text={item.text}
              number={item.number}
              key={index}
              id={item.id}
              deleteItem={deleteItem}
              status={item.status}
            />
          );
        })}
      </ul>
      <ColorsExplanation />
    </div>
  );
};
