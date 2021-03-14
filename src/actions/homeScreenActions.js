import actionTypes from "../constants/homeScreenConstants";

export function setUserMode(payload) {
  return {
    type: actionTypes.SET_USER_MODE,
    payload,
  };
}

export function setUserIsX(payload) {
  return {
    type: actionTypes.SET_USER_IS_X,
    payload,
  };
}

export function setShowGame(payload) {
  return {
    type: actionTypes.SET_SHOW_GAME,
    payload,
  };
}

export function resetBoardStatus() {
  return {
    type: actionTypes.RESET_BOARD_STATUS,
  };
}
export function setStepNumber(payload) {
  return {
    type: actionTypes.SET_STEP_NUMBER,
    payload,
  };
}
export function setBoard(payload) {
  return {
    type: actionTypes.SET_BOARD,
    payload,
  };
}
export function setWonGames(payload) {
  return {
    type: actionTypes.SET_WON_GAMES,
    payload,
  };
}
export function setGamesPlayed(payload) {
  return {
    type: actionTypes.SET_GAMES_PLAYED,
    payload,
  };
}
