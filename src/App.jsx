import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoList from "./TodoList";
import DescriptionIcon from "@mui/icons-material/Description";

export default function App() {
  const [items, setItems] = useState([]);

  function addItems(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItems(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>
          <DescriptionIcon fontSize="large" /> Todo List
        </h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoList
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
