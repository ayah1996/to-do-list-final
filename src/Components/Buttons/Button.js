import React, { Component } from "react";
import "./Styles.css";

class Button extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className={this.props.isPurple ? "btn background-button" : "btn"}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
