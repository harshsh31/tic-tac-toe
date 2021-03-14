import React, { Component } from "react";
import Square from "../../components/Square/Square";
import "./BoardScreen.css";

class BoardScreen extends Component {
  renderSquare(i) {
    const { onClick, board } = this.props;
    return <Square value={board[i]} onClick={() => onClick(i)} />;
  }
  render() {
    const { userMode, gamesPlayed, wonGames } = this.props;
    return (
      <div className="boardScreenWrapper">
        <div className="scoreBoard">
          <div className="boardPlayer">Alex</div>
          <div className="scoreCard">
            {wonGames} - {gamesPlayed - wonGames}
          </div>
          <div className="boardPlayer">{userMode}</div>
        </div>
        <div className="boardContainer">
          <div className="boardRow">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="boardRow">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="boardRow">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export default BoardScreen;
