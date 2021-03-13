import React, { Component } from "react";

export class Square extends Component {
  render() {
    const { value } = this.props;
    return <button className="square">{value}</button>;
  }
}

export default Square;
