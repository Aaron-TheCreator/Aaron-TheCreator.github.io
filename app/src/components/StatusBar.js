import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCoder, closeGame } from "../services/actions";

const StatusBar = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleClose = () => {
    setTimeout(() => {
      dispatch(closeWindow(page));
    }, 0);
  };
  const closeWindow = (page) => {
    return page === "SmashKarts.io" ? closeGame() : closeCoder();
  };

  return (
    <div className="status-bar" id={page !== "SmashKarts.io" ? "status-bar-vs": "status-bar-gw"}>
      <div className="status-bar-inner">
        <div className="icons">
          <div
            className="icon"
            style={{ background: "#ED594A" }}
            onClick={handleClose}
          ></div>
          <div className="icon" style={{ background: "#FDD800" }}></div>
          <div className="icon" style={{ background: "#5AC05A" }}></div>
        </div>
        <p className="status-text">{page} - a. aaron burns</p>
      </div>
    </div>
  );
};

export default StatusBar;
