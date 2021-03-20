import React, { Component } from "react";
import "./Square.css";

export class Square extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <button className="square" onClick={onClick}>
        {value == "X" ? (
          // <i className="fas fa-times xIcon" aria-hidden="true" />
          <div className="cross">
            X{/* <div className="crossIcon"></div> */}
          </div>
        ) : value == "O" ? (
          // <i className="far fa-circle oIcon" aria-hidden="true" />
          <div className="circle"></div>
        ) : (
          value
        )}
      </button>
    );
  }
}

export default Square;
