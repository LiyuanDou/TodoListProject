import { useState } from "react";
import TodoForm from "./TodoForm";
import "./styles.css";

export default function Todo() {
  // const [lists, setLists} = useState(null)

  function addTodo(item) {
    const newLists = [item, ...lists];
  }

  return (
    <div className="Todo">
      <div>
        <h1>Todo List</h1>
        <p>Write your next todo item here:</p>
        <TodoForm />
      </div>
    </div>
  );
}
