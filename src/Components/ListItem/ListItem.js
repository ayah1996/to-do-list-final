import React, { Component } from "react";
import Button from "../Buttons/Button";
import "./Styles.css";
class ListItem extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-item">
        <span className="task-title">{this.props.task}</span>
        <Button
          text="Delete"
          isPurple={true}
          handleClick={this.props.handleDelete}
        ></Button>
      </div>
    );
  }
}

// function ListItem(props) {
//   return (
//     <div className="list-item">
//       <span className="task-title">{props.task}</span>
//       <Button
//         text="Delete"
//         isPurple={true}
//         handleClick={props.handleDelete}
//       ></Button>
//     </div>
//   );
// }

export default ListItem;
