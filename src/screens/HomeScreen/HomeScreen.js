import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  setUserMode,
  setUserIsX,
  setShowGame,
  resetBoardStatus,
  setStepNumber,
  setBoard,
  setWonGames,
  setGamesPlayed,
} from "../../actions/homeScreenActions";
import "./HomeScreen.css";
import SelectScreen from "../SelectScreen/SelectScreen";
import BoardScreen from "../BoardScreen/BoardScreen";

class HomeScreen extends Component {
  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  allPlacesFilled = (squares) => {
    let i;
    for (i = 0; i < squares.length; i++) {
      if (squares[i] == null) break;
    }
    return i == squares.length;
  };
  handleClick = (boardNumber) => {
    const {
      stepNumber,
      board,
      userIsX,
      setStepNumber,
      setBoard,
      wonGames,
      setWonGames,
      setGamesPlayed,
      gamesPlayed,
      resetBoardStatus,
    } = this.props;
    let boardCopy = board.slice();
    if (this.calculateWinner(board) || board[boardNumber]) {
      return;
    }
    boardCopy[boardNumber] =
      stepNumber % 2 == 0 ? (userIsX ? "X" : "O") : userIsX ? "O" : "X";

    setStepNumber(stepNumber + 1);
    setBoard(boardCopy);
    if (this.calculateWinner(boardCopy)) {
      if (stepNumber % 2 == 0) setWonGames(wonGames + 1);
      alert(`You have ${stepNumber % 2 == 0 ? "won" : "lost"} the game!`);
      setGamesPlayed(gamesPlayed + 1);
      resetBoardStatus();
      setStepNumber(0);
    }
    //tie game
    if (this.allPlacesFilled(boardCopy) && !this.calculateWinner(boardCopy)) {
      alert("Game is tied!Refreshing the board!");
      resetBoardStatus();
      setStepNumber(0);
    }
  };
  render() {
    const {
      userMode,
      setUserMode,
      setUserIsX,
      userIsX,
      showGame,
      setShowGame,
      resetBoardStatus,
      board,
      wonGames,
      gamesPlayed,
    } = this.props;
    return userMode == null ? (
      <div className="homeScreenWrapper">
        <div className="homeScreenLogo">
          <img src="tictactoe.svg" alt="logo" />
        </div>
        <div className="title">Choose your play mode</div>
        <div className="options">
          <button className="option" onClick={() => setUserMode("AI")}>
            With AI
          </button>
          <button className="option" onClick={() => setUserMode("Barbie")}>
            With a friend
          </button>
        </div>
      </div>
    ) : showGame ? (
      <BoardScreen
        userMode={userMode}
        board={board}
        onClick={(i) => this.handleClick(i)}
        wonGames={wonGames}
        gamesPlayed={gamesPlayed}
      />
    ) : (
      <SelectScreen
        setShowGame={setShowGame}
        setUserIsX={setUserIsX}
        userIsX={userIsX}
        resetBoardStatus={resetBoardStatus}
      />
    );
  }
}
const mapStateToProps = (state) => {
  const {
    user: {
      userMode = null,
      userIsX = true,
      showGame = false,
      board = [],
      stepNumber = 0,
      wonGames = 0,
      gamesPlayed = 0,
    },
  } = state;
  return {
    userMode,
    userIsX,
    showGame,
    board,
    stepNumber,
    wonGames,
    gamesPlayed,
  };
};
const mapDispatchToProps = {
  setUserMode,
  setUserIsX,
  setShowGame,
  resetBoardStatus,
  setStepNumber,
  setBoard,
  setWonGames,
  setGamesPlayed,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeScreen));
