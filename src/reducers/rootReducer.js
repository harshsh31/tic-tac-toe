import actionTypes from "../constants/homeScreenConstants";

export const user = (
  state = {
    userMode: null,
    userIsX: true,
    showGame: false,
    board: Array(9).fill(null),
    wonGames: 0,
    stepNumber: 0,
    gamesPlayed: 0,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_USER_MODE:
      return {
        ...state,
        userMode: action.payload,
      };
    case actionTypes.SET_USER_IS_X:
      return {
        ...state,
        userIsX: action.payload,
      };
    case actionTypes.SET_SHOW_GAME:
      return {
        ...state,
        showGame: action.payload,
      };
    case actionTypes.RESET_BOARD_STATUS:
      return {
        ...state,
        board: Array(9).fill(null),
      };
    case actionTypes.SET_BOARD:
      return {
        ...state,
        board: [...action.payload],
      };
    case actionTypes.SET_STEP_NUMBER:
      return {
        ...state,
        stepNumber: action.payload,
      };
    case actionTypes.SET_WON_GAMES:
      return {
        ...state,
        wonGames: action.payload,
      };
    case actionTypes.SET_GAMES_PLAYED:
      return {
        ...state,
        gamesPlayed: action.payload,
      };
    default:
      return state;
  }
};
