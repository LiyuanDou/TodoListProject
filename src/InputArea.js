import React, { useState } from "react";
import shortid from "shortid";
import "./styles.css";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAdd(inputText);
    setInputText("");
  }

  return (
    <div className="InputArea">
      <h1>Todo List</h1>
      <p>What's your plan for today?</p>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          value={inputText}
          placeholder="Write here"
          onChange={handleChange}></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
