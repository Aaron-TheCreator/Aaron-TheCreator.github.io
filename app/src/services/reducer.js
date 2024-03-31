import {
  UPDATE_PAGE,
  LOADING,
  CLOSE_CODE,
  OPEN_CODE,
  OPEN_TERMINAL,
  CLOSE_TERMINAL,
  ENTER,
  EXIT,
  RUN_PROGRAM,
  OPEN_GAME,
  CLOSE_GAME,
} from "./types";

const initialState = {
  loading: false,
  page: "about.md",
  open: true,
  terminalOpen: false,
  gameOpen: false,
  enter: false,
  runProgram: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case UPDATE_PAGE:
      return { ...state, page: action.payload };
    case CLOSE_CODE:
      return { ...state, page: "about.md", open: false };
    case OPEN_CODE:
      return { ...state, page: "about.md", open: true, terminalOpen: false, gameOpen: false};
    case OPEN_GAME:
      return { ...state, page: "SmashKarts.io", open: false, terminalOpen: false, gameOpen: true};
    case CLOSE_GAME:
      return { ...state, page: "about.md", open: false, gameOpen: false, terminalOpen: false};
    case OPEN_TERMINAL:
      return { ...state, open: false, terminalOpen: true, gameOpen: false};
    case CLOSE_TERMINAL:
      return { ...state, terminalOpen: false };
    case ENTER:
      return { ...state, enter: true };
    case EXIT:
      return { ...state, enter: false };
    case RUN_PROGRAM:
      return { ...state, runProgram: true };
    default:
      return { ...state };
  }
};
