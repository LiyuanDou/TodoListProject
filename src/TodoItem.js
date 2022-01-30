import { useState } from "react";
import "./styles.css";

export default function TodoItem(props) {
  const [status, setStatus] = useState("active");

  function handleCompelte() {
    if (status === "active") {
      setStatus("complete");
    } else {
      setStatus("active");
    }
  }

  return (
    <li
      onClick={handleCompelte}
      style={{
        textDecoration: status === "complete" ? "line-through" : "none"
      }}>
      {props.item}
    </li>
  );
}
