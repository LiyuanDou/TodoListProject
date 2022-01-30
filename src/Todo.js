import { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import "./styles.css";

export default function Todo() {
  const [lists, setLists] = useState([]);

  function addTodo(inputText) {
    setLists([...lists, inputText]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addTodo} />
      <ul>
        {lists.map((item, index) => (
          <TodoItem key={index} id={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
