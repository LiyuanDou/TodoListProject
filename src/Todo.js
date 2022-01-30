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
    <div className="Todo">
      <InputArea onAdd={addTodo} />
      <ul>
        {lists.map((item, index) => (
          <TodoItem key={index} id={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
