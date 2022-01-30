import React, { useState } from "react";
import shortid from "shortid";
import "./styles.css";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [blankInput, SetBlankInput] = useState(false);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleClick() {
    if (inputText !== "") {
      props.onAdd(inputText);
      setInputText("");
      SetBlankInput(false);
    } else {
      SetBlankInput(true);
    }
  }

  return (
    <div className="form">
      <input
        onSubmit={handleSubmit}
        name="text"
        value={inputText}
        placeholder="Write here"
        onChange={handleChange}></input>
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
      {blankInput ? (
        <p className="errorMessage">Error: Please write something</p>
      ) : null}
    </div>
  );
}
