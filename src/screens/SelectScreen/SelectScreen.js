import React, { Component } from "react";
import "./SelectScreen.css";

class SelectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsX: true,
    };
  }
  render() {
    const { userIsX } = this.state;
    return (
      <div className="selectScreenWrapper">
        <div className="title">Pick Your Side</div>
        <div className="options">
          <div className="logo logoX">
            <div className="image">
              <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" />
            </div>
            <input
              type="radio"
              className="inputBox"
              checked={userIsX}
              onChange={(e) => this.setState({ userIsX: true })}
            />
          </div>
          <div className="logo logoO">
            <div className="image"></div>
            <input
              type="radio"
              className="inputBox"
              checked={!userIsX}
              onChange={(e) => this.setState({ userIsX: false })}
            />
          </div>
        </div>
        <button className="continueBtn">Continue</button>
      </div>
    );
  }
}

export default SelectScreen;
