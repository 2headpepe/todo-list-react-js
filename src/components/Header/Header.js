import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div className="Header">
      <h3>Todo list</h3>
      <button
        className="btn btn-primary"
        onClick={props.onClick}
      >
        Create Task
      </button>
    </div>
  );
};

export default Header;
