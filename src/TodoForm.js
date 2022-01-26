import { useState } from "react";
import "./styles.css";

export default function TodoForm(props) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Todo">
      <form onSubmit={handleSubmit}>
        <input
          id="todoItem"
          placeholder="Write here"
          onchange={handleChange}></input>
      </form>
      <ul>
        <li>
          {/* {props.lists.map((item) => (
            <p>item</p>
          )} */}
        </li>
      </ul>
    </div>
  );
}
