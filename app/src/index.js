import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";

// Root CSS
import "./css/normalize.css";

// Root App
import SpaceApp from "./App";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Reducer
import { reducer } from "./services/reducer";

import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <SpaceApp />
  </Provider>,
  document.getElementById("root")
);
