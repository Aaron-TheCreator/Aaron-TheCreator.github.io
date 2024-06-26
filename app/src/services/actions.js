import {
  UPDATE_PAGE,
  CLOSE_CODE,
  OPEN_CODE,
  OPEN_GAME,
  CLOSE_GAME,
  OPEN_TERMINAL,
  CLOSE_TERMINAL,
  ENTER,
  RUN_PROGRAM,
  EXIT,
} from "../services/types";

export const updatePage = (newPage) => (dispatch) => {
  dispatch({ type: UPDATE_PAGE, payload: newPage });
};

export const closeCoder = () => (dispatch) => {
  dispatch({ type: CLOSE_CODE, payload: false });
};

export const openCoder = () => (dispatch) => {
  dispatch({ type: OPEN_CODE, paload: true });
};

export const openGame = () => (dispatch) => {
  dispatch({ type: OPEN_GAME, payload: true });
};

export const closeGame = () => (dispatch) => {
  dispatch({ type: CLOSE_GAME, payload: false });
};

export const openTerminal = () => (dispatch) => {
  dispatch({ type: OPEN_TERMINAL, payload: true });
};

export const closeTerminal = () => (dispatch) => {
  dispatch({ type: CLOSE_TERMINAL, payload: false });
};

export const enterApp = () => (dispatch) => {
  dispatch({ type: ENTER, payload: true });
};

export const exitApp = () => (dispatch) => {
  dispatch({ type: EXIT, payload: false });
};

export const runProgram = () => (dispatch) => {
  dispatch({ type: RUN_PROGRAM, payload: true });
};
