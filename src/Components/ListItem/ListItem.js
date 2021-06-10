import React from "react";
import Button from "../Buttons/Button";
import "./Styles.css";

function ListItem(props) {
  return (
    <div className="list-item">
      <span className="task-title">{props.task}</span>
      <Button
        text="Delete"
        isPurple={true}
        handleClick={props.handleDelete}
      ></Button>
    </div>
  );
}

export default ListItem;
