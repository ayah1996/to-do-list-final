import React from "react";
import "./Styles.css";

function Button(props) {
  return (
    <button
      className={props.isPurple ? "btn background-button" : "btn"}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
