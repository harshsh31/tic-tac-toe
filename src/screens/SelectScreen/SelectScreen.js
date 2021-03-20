import React, { Component } from "react";
import "./SelectScreen.css";

class SelectScreen extends Component {
  render() {
    const { userIsX, setUserIsX, setShowGame, resetBoardStatus } = this.props;
    return (
      <div className="selectScreenWrapper">
        <div className="title">Pick Your Side</div>
        <div className="options">
          <div
            className={`logo logoX ${userIsX ? "" : "disabled"}`}
            onClick={(e) => setUserIsX(true)}
          >
            {/* <i className="fas fa-times" aria-hidden="true" /> */}
            <div className="cross">
              <div className="crossIcon">X</div>
            </div>
            <input
              type="radio"
              className="inputBox"
              checked={userIsX}
              onChange={(e) => setUserIsX(true)}
            />
          </div>
          <div
            className={`logo logoO ${!userIsX ? "" : "disabled"}`}
            onClick={(e) => setUserIsX(false)}
          >
            <div className="circle"></div>
            <input
              type="radio"
              className="inputBox"
              checked={!userIsX}
              onChange={(e) => setUserIsX(false)}
            />
          </div>
        </div>
        <button
          className="continueBtn"
          onClick={() => {
            setShowGame(true);
            resetBoardStatus();
          }}
        >
          Continue
        </button>
      </div>
    );
  }
}

export default SelectScreen;
