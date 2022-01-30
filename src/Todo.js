import { useState } from "react";
// import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./styles.css";

export default function Todo() {
  const [lists, setLists] = useState([]);

  const [inputText, setInputText] = useState("");

  function addTodo(item) {
    if (item === "") {
      alert("You didn't type anything");
    } else {
      setLists([...lists, item]);
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(inputText);
    setInputText("");
  }

  return (
    <div className="Todo">
      <div className="Todo">
        <h1>Todo List</h1>
        <p>Write your next todo item here:</p>
        <form onSubmit={handleSubmit}>
          <input
            name="text"
            value={inputText}
            placeholder="Write here"
            onChange={handleChange}></input>
          <button onClick={handleSubmit}>
            <span>Add</span>
          </button>
        </form>
      </div>

      <div>
        <ul>
          {lists.map((item) => (
            <TodoItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
