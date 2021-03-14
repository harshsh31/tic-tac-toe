import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={onClick}>
        {value == "X" ? (
          <i className="fas fa-times xIcon" aria-hidden="true" />
        ) : value == "O" ? (
          <i className="far fa-circle oIcon" aria-hidden="true" />
        ) : (
          value
        )}
      </button>
    );
  }
}

export default Square;
